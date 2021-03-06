export const host = HOST;

// home
export const API_HOME = `${host}/api/home`
export const API_HOME_RECOMMEND = `${host}/api/goodsList`

// item
export const API_ITEM = `${host}/api/goodsItem`

// cate
export const API_CATE = `${host}/api/category`
export const API_CATE_SUB = `${host}/api/subCategory`
export const API_CATE_SUB_LIST = `${host}/api/subGoodsList`

// cart
export const API_CART = `${host}/xhr/promotionCart/getCarts.json`
export const API_CART_NUM = `${host}/xhr/promotionCart/getMiniCartNum.json`
export const API_CART_RECOMMEND = `${host}/xhr/rcmd/cart.json`
export const API_CART_ADD = `${host}/xhr/promotionCart/add.json`
export const API_CART_UPDATE = `${host}/xhr/promotionCart/update.json`
export const API_CART_UPDATE_CHECK = `${host}/xhr/promotionCart/updateCheck.json`

// user
export const API_USER = `${host}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`
export const API_CHECK_LOGIN = `${host}/xhr/u/checkLogin.json`