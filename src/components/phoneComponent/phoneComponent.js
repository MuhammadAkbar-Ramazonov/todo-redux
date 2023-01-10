// import { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { buyPhone } from "../../redux/phone/phoneAction";

// export const PhoneComponent = () => {
// 	const inputRef = useRef();
// 	const { phoneCount } = useSelector((state) => state.phone);
// 	const dispatch = useDispatch();
// 	return (
// 		<div>
// 			<h2>Phone count = {phoneCount}</h2>
// 			<button onClick={() => dispatch(buyPhone())}>Take</button>
// 			<div>
// 				<input ref={inputRef} type='text' />
// 				<button onClick={() => dispatch(buyPhone(+inputRef.current.value))}>
// 					Take
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

import React from 'react'

export const phoneComponent = () => {
  return (
	<div>phoneComponent</div>
  )
}
