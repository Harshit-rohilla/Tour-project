import Tour from "./components/Tour"
import { useState } from "react"
import data from "./data"
function App() {
  const[tourData, changeTourData]=useState(data)
  function removeTour(id){
    let newTour=tourData.filter((tour)=>tour.id!=id)
    changeTourData(newTour);
  }
  function refresh(){
    changeTourData(data);
  }
  if(tourData.length===0){
    return(
      <>
      <h1 className="bg-slate-700 text-center" >No Tours Left</h1>
      <button className="mx-auto block rounded-lg bg-pink-800 text-white cursor-pointer select-none px-3 py-2" onClick={refresh}>Refresh</button>
      </>
    )
  }
  return (
    <>
      <div className=" bg-slate-700">
        <Tour tourData={tourData} removeTour={removeTour}/>
      </div>
    </>
  )
}

export default App
