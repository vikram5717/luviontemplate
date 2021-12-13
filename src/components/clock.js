import React,{useEffect , useState} from 'react'

 function Clock() {
    const[clockState, setClockstate] = useState();
    
    useEffect(() => {
        setInterval(() => {
        const date = new Date();
        setClockstate(date.toLocaleString());
    }, 1000);
    }, []);
      
    return  <h2 style={{ color:"red" , textAlign:"center" , fontSize:"55px" }}>You Have Been Logged in at {clockState}</h2>
    
            
}

export default Clock;
