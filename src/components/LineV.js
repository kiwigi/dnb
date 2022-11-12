import { useState, useEffect } from "react";

let playerColours = ["#E6F8FF","#D9FFCE","#F7D8FF"] 



export default function LineV(props){
    const [lineColour, updateState] = useState('#FFFFFF') //

    function getCurrTurn(){
        console.log("current turn: "+sessionStorage.getItem("currTurn"))
        return sessionStorage.getItem("currTurn")
    }    

    function setColour(){
        updateState(playerColours[getCurrTurn()])
        
    }

    const lineStyle = {
        width: '35px',
        height: '30vh',
        maxHeight: '100px',
        backgroundColor: lineColour,
        borderRadius: '25px',
        marginLeft: "auto",
        marginRight: "auto"
    }

    

    return(

        <div className="line" onClick= {()=> setColour()}style={lineStyle}>
            &nbsp;
        </div>
    );
}