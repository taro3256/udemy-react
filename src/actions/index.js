import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'http://udemy-utils.herokuapp.com/api/v1'
const QUERYSRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const responce = await axios.get(`${ROOT_URL}/events${QUERYSRING}`)
    dispatch({ type: READ_EVENTS, responce })
}