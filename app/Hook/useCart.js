import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initStoreData } from "../Store/actionReducers/CartStore";
const nameStore = 'cart_user'

const useCart = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
  }, [])

  return {
  }
}

export default useCart