import * as types from './mutation-type'

export default {
    [types.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
    },
    [types.SET_TABS_INDEX](state, index) {
        state.tabsIndex = index
    }
}
