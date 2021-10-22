import { io } from 'socket.io-client'
const baseUrl = process.env.REACT_APP_API_URL
const path = baseUrl.split('/')[2]

export const socketInstance = io(path, { forceNew: false })