import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

//boards
export const fetchBoardDetailsAPI = async (boardId) => {
  const request = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  return request.data
}

//columns
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  return response.data
}


//cards
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}