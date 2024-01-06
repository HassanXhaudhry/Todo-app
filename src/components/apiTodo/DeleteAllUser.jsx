import React from "react";
import {clearAllUsers} from '../../store/slices/UserSlices';
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const deleteUsers=()=>{
    dispatch(clearAllUsers());
  }
  return (
  <button className="btn clear-btn" onClick={deleteUsers}>Clear All</button>
  )
};


export default DeleteAllUser;