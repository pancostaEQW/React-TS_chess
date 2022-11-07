import React, {useState, useEffect} from 'react'

export default function DataTimer() {
    const [dataMain, setDataMain] = useState(new Date().toLocaleTimeString());

    function tickTimer() {
        setDataMain(new Date().toLocaleTimeString())
    }
    
    useEffect(() => {
       setInterval(() => tickTimer(),1000)
    }, [])
    

  return (
    <div>
        <h2 className='mainTimer'>Main Timer {dataMain}</h2>
    </div>
  )
}
