import React, { FC, useState, useRef, useEffect } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import swal from "sweetalert";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState(NaN);
    const [whiteTime, setWhiteTime] = useState(NaN);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
     startTime()
    }, [currentPlayer])
    
    function startTime() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decremantWhiteTimer : decremantBlackTimer
        timer.current = setInterval(callback, 1000);
    }
    function decremantBlackTimer() {
       setBlackTime(prev => prev === 0 ? 0 : prev - 1)
       
    }
    function decremantWhiteTimer() {   
       setWhiteTime(prev => prev === 0 ? 0 : prev - 1)
       
    }

    const handelRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)       
        restart()
    }
    if(blackTime === 0) swal('WHITE WIN');
    if(whiteTime === 0) swal('BLACK WIN');

  return (
    <div>
      <div>
        <button onClick={handelRestart}>Start game</button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>White - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
