import { useState } from "react"
import CreateButtons from "./components/CreateButtons"


function App() {
  const [color, setColor] = useState('Cyan')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-2px shadow-lg bg-white px-3 py-2 rounded-3xl gap-5">
          <CreateButtons setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App