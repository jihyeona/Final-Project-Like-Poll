import React from 'react'
import AddItem from './AddItem'
import { ItemCard } from '../components/ItemCard'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo } from '../lib/form'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Fab } from 'components/Fab'
import { AddItemLottie } from 'components/AddItemLottie'
import { VoteLottie } from 'components/VoteLottie'
import { ListContainer } from '../lib/container'
import { ThemeTitle } from '../lib/headline'

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
      <ProfileDiv>
        <ThemeTitle>{pollTitle}</ThemeTitle>
        {pollItems.length !== 0 && <><VoteLottie /><h2>Pick the items that you 💗</h2></>}
        {pollItems.length === 0 && <><AddItemLottie /><p>add item with the pink add button on the right bottom.</p></>}
        <section>
          {
            pollItems.map(item => (
              <ItemCard {...item} pollId={pollId} />
            ))
          }
        </section>
        <Fab pollId={pollId} />
      </ProfileDiv>
    </ListContainer>
  )
}

export default ItemList





