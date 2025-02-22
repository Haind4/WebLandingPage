import { createSlice } from '@reduxjs/toolkit'

let user = null
if (typeof window !== 'undefined') {
  const getDetailUser = localStorage.getItem('user_detail');
  user = JSON.parse(getDetailUser)
}

export const UserStore = createSlice({
  name: 'UserStore',
  initialState: {
    user: user,
  },
  reducers: {
    setUserDetail: (state, actions) => {
      state.user = actions.payload
    },
    logoutUser: (state) => {
      state.user = []
    },
  },

})

export const {
  setUserDetail, logoutUser
} = UserStore.actions

export default UserStore.reducer