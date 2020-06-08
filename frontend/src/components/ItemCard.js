// a card that shows the option that you can like.
// name, background image, description, like button 
// fetch the information about item from http://localhost:8080/polls/${pollId}
// the result is the json file about a poll, so we need to return something like;
// json.items[].name
// json.items[].description
// json.items[].imageUrl
// and so on. we need to check the syntax, not sure about how to call the array and index 
// you can click on the like button and then it will light up
// like button has counter 
// stretch goal: user A also likes this. (like in Facebook post)
import React from 'react'

export const ItemCard = ({ name, description, imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ItemCard  