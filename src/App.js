import React , {useState,useReducer ,useEffect} from "react";
import "./style.css";

function reducer(state,action){
  switch(action.type){
    case "tick":
      return {count : state.count , step: action.step };
    case "untick":
      return {count : state.count + state.step , step : state.step};
    default:
      throw new Error();
  }
}

export default function App() {
  const[state,dispatch] = useReducer(reducer , {count : 0 , step : 0});

  useEffect(()=> {
    const id = setInterval(()=> dispatch({type : 'untick'}),1000);
  } , [dispatch]) ;

  return (
    <div>
      {state.count}
      <input onChange = {(e) => dispatch({type: 'tick' , step : Number(e.target.value)})}/>     
    </div>
  );
}
