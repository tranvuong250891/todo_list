import { createStore } from '../core/createStore/createStore.js'
import reducer from '../core/createStore/reducer.js'
import logger from '../core/createStore/logger.js'

const { attach, connect, dispatch } = createStore(logger(reducer))



window.dispatch = dispatch

export { attach, connect }