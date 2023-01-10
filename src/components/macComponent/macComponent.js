// import React, { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { buyMac } from "../../redux/mac/macAction";

// export const MacComponent = () => {
// 	const { macCount } = useSelector((state) => state.mac);

// 	const dispatch = useDispatch();
// 	const inputRef = useRef();
// 	return (
// 		<div>
// 			<h2>Mac count = {macCount}</h2>
// 			<button onClick={() => dispatch(buyMac())}>Buy Mac</button>
// 			<div>
// 				<input type='text' ref={inputRef} />
// 				<button onClick={() => dispatch(buyMac(+inputRef.current.value))}>
// 					Take
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

import React from 'react'

export const macComponent = () => {
  return (
	<div>macComponent</div>
  )
}
