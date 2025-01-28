/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react'
import { memo,  useMemo } from 'react';
// import Slowcomponent from './assets/Slowcomponent'
import Modal from './modal';
import useModalDialog from './Hooks/useModalDialog';
import AnotherSlowcomponent from './assets/AnotherSlowcomponent';


// const MemoisedSlowcomponent = memo(function ModiefiedSlowComponent({ time, custom , x}){
//   return (
//     <Slowcomponent time = {time} custom = {custom} x = {x}/>)
// });

const MemoAnotherSlowcomponent = memo (AnotherSlowcomponent);

function Child (){
  <div>I am a child</div>
}

function App() {
  const {isOpen,open,close} = useModalDialog();

  const [x,setX]= useState(0);

  // const someFunction = useCallback(() => {}, []);

  //useCallback is a memoise hook which takes two parameter 1st function which we want to memoise and 2nd is dependency array in which 
  // put the values jiski wjah se hum that function ko again re render krna chata h , cache se nhi lana chahte 
  //means agr elements in dependency array change toh function ko re render hoga otherwise not
  //usecallback is used to memoise a function
  
  //if we want to memoise a array then we use useMemo

  // const timeArray = useMemo(() => {
  //   return [1000]; 
  // }, []);

  const memochild = useMemo(()=> {
    return <Child/>
  },[]);

  return(
    <>
      
      <div>
        Hello Everyone! Please open the modal for more info.
      </div>

      <br/>
       <button onClick = {() => setX(x => x+1)}>Increment X : {x}</button>
      <br/>
      <br/>

      <div>
        <button onClick = {open}>Open Modal</button>

        {isOpen && <Modal close = {close}/>}
        
      </div>

      <br/>

      <div>
        Thanks for visiting!
      </div>
      <br/>

      <MemoAnotherSlowcomponent >
        {memochild}
      </MemoAnotherSlowcomponent>

      {/* <MemoisedSlowcomponent time = {timeArray} custom = {someFunction} x={x}/> */}
  </> 
    
  );
  
}

export default App





//Want to develop a modal , like ek button click hoga toh ek modal render/open hoga
