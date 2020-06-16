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
import { useSelector, useDispatch } from 'react-redux'
import { ListContainer, ItemRow, ThemeTitle, PollTitle, PollText } from '../lib/container'
import { deletepoll } from 'reducers/user'
import { useHistory } from 'react-router-dom'


export const ItemList = () => {
  const { pollId } = useParams()
  const polls = useSelector((store) => store.user.login.ongoingPolls)
  const loggedInUserId = useSelector((store) => store.user.login.userId)
  const poll = polls.filter(poll => poll._id === pollId)
  const pollTitle = poll[0].title
  const pollItems = poll[0].items
  const pollCreatorId = poll[0].userId
  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deletepoll(pollId, pollCreatorId))
    history.push('/home')
  }

  return (
    <ListContainer>
      <NavbarLight />
      <ItemDiv>
        <PollTitle>{pollTitle}</PollTitle>
        {loggedInUserId === pollCreatorId && <button onClick={(e) => handleDelete(e)}>delete the poll</button>}
        {pollItems.length !== 0 && <><VoteLottie id='votelottie' /><PollText>Pick the items that you 💗</PollText></>}
        {pollItems.length === 0 && <><AddItemLottie /><PollText>add item with the pink add button on the right bottom.</PollText></>}
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





