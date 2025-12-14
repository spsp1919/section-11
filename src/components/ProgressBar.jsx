import { useState,useEffect } from "react";

    export default function ProgressBar({ timer}) {
    
 const [remainingTime,setRemainingtime] = useState(timer);
   
 useEffect ( ()=> {
      console.log('INTERVAL')
      const interval = setInterval (() => {
      setRemainingtime((prevTime) => prevTime - 10);
    },10);

    return () => {
      clearInterval(interval);
    };
    },[]);


    return <progress value ={remainingTime} max ={timer}/>;
    

}