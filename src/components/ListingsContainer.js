import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => {
      const updatedListings = listings.filter((listing) => listing.id !== id)
      setListings(updatedListings)
    })

  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((json) => {setListings(json)})
  },[])


  //filter first before mapping. Filter so that the listings that will get sent to ListingCard will be reduced by the value searched
  const listingCard = listings.filter((listing) =>
  listing.description.toLowerCase().includes(search.toLowerCase())
  )
  .map((eachListing) => (
    <ListingCard
    key = {eachListing.id}
    listingArray = {eachListing}
    onDeleteListing = {handleDelete}
    />
  ))



  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
