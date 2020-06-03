import React from 'react'
import AddItem from '../components/AddItem'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo, Form } from '../lib/form'

export const ItemList = () => {

  return (
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <h4>Here, return the ItemCard components.</h4>
        {/*return the ItemCard component. 
        We can reuse the structure from the movie project. So In the ItemList we will map through the ItemCard. 
        MoviesList = ItemList
        MovieThumb = ItemCard
        add a button called Add an Item which then reveals the AddItem component */}
        <AddItem />
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default ItemList