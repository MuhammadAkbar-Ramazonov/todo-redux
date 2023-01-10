import React from 'react'
import { useSelector } from 'react-redux';

export const Login = () => {
	const state = useSelector((state) => state);

  return (
    <div>{state.user.email}</div>
  )
}
