"use client"
import { useState } from "react";


export default function Home() {
  //define state
  const [todos, setTodos] = useState([{ task: "Portfilio", id:1 }, { task: "Hackathon 2", id:2 },])

  //input state
  const[inputVal,setInput]=useState("")
  const[id,setId]=useState(0)
//functions

const addItems=()=>{
  setTodos([...todos,{task:inputVal,id:id}])
 setInput("")
 setId(0)
}

//edit func

const editItem=(id:any)=>{
  let obj : any = todos.find(item=>item.id == id)
  setInput(obj.task)
  setId(obj.id)

}

  return (
    <div className="max-w-auto mx-auto p-2  flex-wrap bg-orange-700  ">
      <h1 className=" text-white font-serif font-bold text-center text-[40px] ">Todo App by Wajiha</h1>

      {/* start input div */}

      <div className="flex justify-center gap-4 mt-5 ">

        <input 
        onChange={(e:any)=>setInput(e.target.value)}
        value={inputVal}
        
        className="w-[40%] text-lg p-2 ml-20 border-b-2 rounded focus:outline-none "
         type="text" placeholder="What's your mind today?" />

        <input
        onChange={(e)=>setId(e.target.value)}
        value={id}
        className="w-[15%] text-lg p-2 mr-72 rounded focus:outline-none"
         type="number"
          placeholder="write id" />

        <button onClick={addItems} className="p-2 rounded mr-5  bg-yellow-500 w-[10%] hover:bg-orange-600 text-white">Add task</button>
      </div>

      {/* end input div */}

      <h1 className="text-center text-4xl mt-10 font-semibold underline font-serif">Task List</h1>

      {/* task list */}


      <div className="grid grid-cols-2 gap-4 mt-5">


        {/* grid items */}

        {
          todos.map((item:any,i:any)=>{
            return(
              
        <div className="shadow bg-yellow-200 p-2 " key={i}>
        <div className="flex justify-between ">
          <span className="shadow rounded-full h-8 w-8 mx-0 text-center p-1">{i+1}</span>
          <span className="shadow rounded-full h-8 w-8 mx-0 text-center p-1 bg-red-600 cursor-pointer">X</span>
        </div>
        {/* task data */}

        <div className="mt-1">{item.task}</div>
        <div>
          <h2 onClick={()=>editItem(item.id)} className="text-right  hover:cursor-pointer ">Edit</h2>
          <h2 className="">id:{item.id}</h2>
        </div>
      </div>


            )
          })
        }


      </div>
    </div>
  );
}
