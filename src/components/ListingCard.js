import React, {useState} from "react";

function ListingCard({listingArray, onDeleteListing}) {

  const {id, description, image, location}= listingArray;
  //console.log(id, description, image, location)
  const [isFavorite, setFavorite] = useState(false)

  function handleFavorite(){
    setFavorite((isOn) => !isOn);
  }

  function deleteFunction(){
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteFunction}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
