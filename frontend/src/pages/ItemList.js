import React from 'react'
import AddItem from './AddItem'
import { ItemCard } from '../components/ItemCard'
import NavbarLight from '../components/NavBar'
import { ItemDiv } from '../lib/container'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Fab } from 'components/Fab'
import { AddItemLottie } from 'components/AddItemLottie'
import { VoteLottie } from 'components/VoteLottie'
import { ListContainer, ItemRow } from '../lib/container'

export const ItemList = () => {
  const { pollId } = useParams()
  const ITEM_URL = `http://localhost:8080/polls/${pollId}`
  const [pollItems, setPollItems] = useState([])
  const [pollTitle, setPollTitle] = useState('')

  useEffect(() => {
    fetch(ITEM_URL, { method: 'GET' })
      .then(console.log('we are in itemlist'))
      .then(res => res.json())
      .then(json => {
        setPollItems(json.items)
        setPollTitle(json.title)
      })
      .then(console.log(pollItems))
  }, [])
  // instead of fetching the poll here, 
  // save all the polls that you fetch in the redux
  // and then use useSelector on line 15 to get the poll. 

  return (
    <ListContainer>
      <NavbarLight />
      <ItemDiv>
        <h1>{pollTitle}</h1>
        {pollItems.length !== 0 && <><VoteLottie /><h2>Pick the things that you 💗</h2></>}
        {pollItems.length === 0 && <><AddItemLottie /><p>Add item with the pink button on the right bottom.</p></>}
        <ItemRow>
          {
            pollItems.map(item => (
              <ItemCard {...item} pollId={pollId} />
            ))
          }
        </ItemRow>
        <Fab pollId={pollId} />
      </ItemDiv>
    </ListContainer>
  )
}

export default ItemList





