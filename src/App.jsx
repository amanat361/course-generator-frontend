import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./components/Sidebar"
import Chapters from "./components/Chapters"

function App() {
  return (
    <div className="flex p-4 flex-col gap-4 bg-zinc-700">
      <div className="flex justify-between items-center p-4 shadow-md shadow-zinc-950 bg-zinc-900 rounded">
        <h1 className="text-3xl font-bold text-center text-white">Physics for Scientists and Engineers (A Strategic Approach)</h1>
        <FontAwesomeIcon icon={faGraduationCap} size="3x" className="text-zinc-100" />
      </div>
      <div className="flex gap-4 w-full">
        <Sidebar />
        <Chapters />
      </div>
    </div>
  )
}

export default App
