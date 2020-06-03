import React from 'react'
import AddItem from '../components/AddItem'

export const ItemList = () => {

  return (
    <>
      <h2>List of items for a poll</h2>
      {/*return the ItemCard component. 
        We can reuse the structure from the movie project. So In the ItemList we will map through the ItemCard. 
        MoviesList = ItemList
        MovieThumb = ItemCard
        add a button called Add an Item which then reveals the AddItem component */}
      <AddItem />
    </>
  )
}

export default ItemList