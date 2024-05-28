import { useState } from "react";


function App() {
  const[count,setCount]=useState(0)
const increment=()=>{

  setCount(count+1)
  console.log(count);
  // if(count<10)
  //   {
  //     setCount(count+1)
  //   }
  //   else{
  //     setCount(count)
  //   }
}
const decrement=()=>{

  // setCount(count-1)
  // console.log(count);
  if(count>1)
    {
      setCount(count-1)
    }
    else{
      setCount(count)
    } 
}
const reset=()=>{
  setCount(0)
  console.log(count);
}
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black">
    <div className="mt-3">
    <span className="rounded-full text-white bg-red-600 px-3 py-2">{count}</span>
    </div>
<div className="flex gap-2 mt-6 ml-2 ">
        <button className="text-white bg-blue-800 px-6 py-2 border-[2px] border-white rounded-xl font-semibold" onClick={increment}>+</button>
        <button className="text-white bg-blue-800 px-6 py-2 rounded-xl border-[2px] border-white font-semibold" onClick={reset}>Reset</button>
        <button className="text-white bg-blue-800 px-6 py-2  rounded-xl border-[2px] border-white font-semibold" onClick={decrement}>-</button>
        </div>
    </div>
  );
}

export default App;
