import { useState } from "react";

let playerColours = ["#E6F8FF","#D9FFCE","#F7D8FF"] 


export default function LineH(props){
    const [lineColour, updateState] = useState('#FFFFFF') //

    function getCurrTurn(){
        console.log("current turn: "+sessionStorage.getItem("currTurn"))
        return sessionStorage.getItem("currTurn")
    }    

    function setColour(){
        updateState(playerColours[getCurrTurn()])
        
    }

    const lineStyle = {
        width: '30vw',
        maxWidth: '200px',
        height: '35px',
        marginTop: 'auto',
        marginBottom:'auto',
        backgroundColor: lineColour,
        borderRadius: '25px',
    
    }

    return(

        <div className="line" onClick= {()=> setColour()} style={lineStyle}>
            &nbsp;
        </div>
    );
}