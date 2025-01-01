import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "./Redux/feature/CounterSlice"



function App() {
const count = useSelector((state=>state.counter.count))
const dispatch= useDispatch()
 return (
  <div className="h-screen flex w-full justify-center items-center">
      <div  className="flex gap-6 border-2 border-purple-700 bg-gray-300 px-8 py-20">
    <button onClick={()=>dispatch(increment())}  className="px-4
     py-2 bg-green-500 rounded-md "> Increment</button>
    <button onClick={()=>dispatch(incrementByValue({value:5}))}  className="px-4
     py-2 bg-green-500 rounded-md "> Increment By Value</button>
    <h2 className="text-3xl bg-purple-300 px-5 py-2 rounded-md">{count}</h2>
    <button onClick={()=>dispatch(decrement())} className="px-4
     py-2 bg-red-500 rounded-md "> Decrement</button>
      </div>
      </div>
  )
}

export default App
