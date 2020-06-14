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
import { useSelector } from 'react-redux'
import { ListContainer, ItemRow } from '../lib/container'

export const ItemList = () => {
  const { pollId } = useParams()
  const polls = useSelector((store) => store.user.login.ongoingPolls)
  const poll = polls.filter(poll => poll._id === pollId)
  const pollTitle = poll[0].title
  const pollItems = poll[0].items

  return (
    <ListContainer>
      <NavbarLight />
      <ProfileDiv>
        <ThemeTitle>{pollTitle}</ThemeTitle>
        {pollItems.length !== 0 && <><VoteLottie /><h2>Pick the items that you 💗</h2></>}
        {pollItems.length === 0 && <><AddItemLottie /><p>add item with the pink add button on the right bottom.</p></>}
        <ItemRow>
          {
            pollItems.map(item => (
              <ItemCard {...item} pollId={pollId} />
            ))
          }
        </ItemRow>
        <Fab pollId={pollId} />
      </ProfileDiv>
    </ListContainer>
  )
}

export default ItemList





