import { Link } from "react-router-dom";
import { useState } from "react";





const charStyle = {
    objectFit: "cover",
    width: '60px',
}

export default function DotSelect(props){
            //currState (default state, function that updates state)
    const [dotBorderColour, updateState] = useState('#B5B5B5') //

    function setAsSelected() {
        if (dotBorderColour==='#F4648B'){
            updateState('#B5B5B5')

        }
        else {
            updateState('#F4648B')
        }
    }


    return(
        <div>
            <div onClick={ ()=> setAsSelected() } className="dot"style={{ 
                width: '60px',
                height: '60px',
                border: '1px solid '+dotBorderColour,
                borderRadius: '50%',}}>

                <img style={charStyle} src={props.character}></img>
            
            </div>
        </div>
        
    );

}