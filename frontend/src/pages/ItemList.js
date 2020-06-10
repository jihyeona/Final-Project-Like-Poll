import React from 'react'
import AddItem from './AddItem'
import { ItemCard } from '../components/ItemCard'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo, Form } from '../lib/form'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Fab } from 'components/Fab'

export const ItemList = () => {
  const { pollId } = useParams()
  const ITEM_URL = `http://localhost:8080/polls/${pollId}`
  const [pollItems, setPollItems] = useState([])
  const [pollTitle, setPollTitle] = useState('')

  useEffect(() => {
    fetch(ITEM_URL, { method: 'GET' })
      .then(console.log('we are in itemlist'))
      .then(res => res.json())
      .then(json => setPollItems(json.items))
      // .then(json => setPollTitle(json.title))
      .then(console.log(pollItems))
  }, [AddItem, pollId])

  return (
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <h4>VOTE HERE! VOTE NOW!</h4>
        <p>Upvote the items that you like.</p>
        {/* <h1>{pollTitle}</h1> */}
        {/* {pollItems == [] && <p>You can add items for the poll.</p>} */}
        <section>
          {
            pollItems.map(item => (
              <ItemCard {...item} />
            ))
          }
        </section>
        <Fab pollId={pollId} />
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default ItemList





