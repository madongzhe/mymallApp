  import {  HOME_INFO, HOME_RECOMMEND } from '../constants/home'
  import { API_HOME,API_HOME_RECOMMEND } from '../constants/api'
  import { createAction } from '@/utils/redux'
  
  /**
   * 首页数据
   * @param {*} payload
   */
  export const dispatchHome = payload => createAction({
    url: API_HOME,
    type: HOME_INFO,
    payload
  })
  
  /**
   * 推荐商品
   * @param {*} payload
   */
  export const dispatchRecommend = (page, size, payload) => createAction({
    url: API_HOME_RECOMMEND+'?page='+page +'&size='+size,
    type: HOME_RECOMMEND,
    payload
  })
  