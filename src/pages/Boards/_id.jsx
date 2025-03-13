import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
import { genaratePlaceholderCard } from '~/utils/formatters'
import { isEmpty } from 'lodash'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '67c7c665aa901c53edb6295e'
    //call api
    fetchBoardDetailsAPI(boardId).then(board => {
      board.columns.forEach(column => {
        if (isEmpty(column.cards)) {
          column.cards = [genaratePlaceholderCard(column)]
          column.cardOrderIds = [genaratePlaceholderCard(column)._id]
        }
      })
      setBoard(board)
    })
  }, [])

  //goi API tao moi column va lam lai du lieu state board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    //xu li keo tha khi tao column moi
    createdColumn.cards = [genaratePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [genaratePlaceholderCard(createdColumn)._id]

    //cap nhat state board
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  //goi API tao moi card va lam lai du lieu state board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })

    //cap nhat state board
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
  }

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
        <AppBar />
        <BoardBar board={board} />
        <BoardContent
          board={board}
          createNewColumn={createNewColumn}
          createNewCard={createNewCard}
        />
      </Container>
    </>
  )
}

export default Board