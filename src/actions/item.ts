import {  ITEM_INFO } from '../constants/item'
import { API_ITEM } from '../constants/api'
import { createAction } from '@utils/redux'

export const dispatchItem = payload => createAction({
    url: API_ITEM,
    type: ITEM_INFO,
    payload
  })