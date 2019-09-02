import { combineReducers } from 'redux'
import home from './home'
import item from './item'
import cate from './cate'

export default combineReducers({
    home,
    item,
    cate,
})