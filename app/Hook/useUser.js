import React from 'react'
import { useDispatch } from 'react-redux';
import API from '../Service/API';
import { setUserDetail } from '../Store/actionReducers/UserStore';

export default function useUser() {
  const dispatch = useDispatch();

  const getDetailUser = async () => {
    const res = await API.Users.getDetail()
    if (res?.status === 200) {
      const user = res?.data?.data
      dispatch(setUserDetail(user))
    } else if (res?.status === 401) {
      dispatch(setUserDetail(null))
      localStorage.clear()
    }

  }
  return {
    getDetailUser
  }

}
