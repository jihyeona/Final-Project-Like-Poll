import React from 'react'
import AddItem from '../components/AddItem'
import { ItemCard } from '../components/ItemCard'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo, Form } from '../lib/form'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ItemList = () => {
  const { pollId } = useParams()
  const ITEM_URL = `http://localhost:8080/polls/${pollId}`
  const [pollItems, setPollItems] = useState([])

  useEffect(() => {
    fetch(ITEM_URL, { method: 'GET' })
      .then(console.log('we are in itemlist'))
      .then(res => res.json())
      .then(json => setPollItems(json.items))
      .then(console.log(pollItems))
  }, [])

  return (
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <h4>Here, return the ItemCard components.</h4>
        <section>
          {
            pollItems.map(item => (
              <ItemCard {...item} />
            ))
          }
        </section>
        <AddItem pollId={pollId} />
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default ItemList





