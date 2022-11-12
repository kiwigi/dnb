import { Link } from "react-router-dom";
import { useState } from "react";
import cat from '../assets/meow.png'
import dog from '../assets/woof.png'
import unicorn from '../assets/neigh.png'


//visuals 
const dotStyle = {
    width: '60px',
    height: '60px',
    border: '1px solid #B5B5B5',
    borderRadius: '50%',
}

const charStyle = {
    objectFit: "cover",
    width: '60px',
}


//logic

// let adjMatrix = [
//                 [0,0,0,0], //r1
//                 [0,0,0,0], //r2
//                 [0,0,0,0], //r3
//                 [0,0,0,0]  //r4
//                 ]


function getCurrTurn(){
    console.log(sessionStorage.getItem("currTurn"))
    return sessionStorage.getItem("currTurn")

}

// function getNextTurn(){
//     let currPlayer= getCurrTurn()
//     let nextPlayer = currPlayer

//     if(currPlayer==2){
//         nextPlayer=0
//     }
//     else{
//         nextPlayer ++
//     }

//     sessionStorage.setItem("currTurn",nextPlayer)
//     console.log("next player is: "+nextPlayer)
//     return nextPlayer
// }
// function checkIfAdj(x1,y1,x2,y2){
    
//     return (x2 == x1+1 || x2 == x1-1) || (y2 == y1+1 || y2==y1-1)
    
// }

// function updateMatrix(x,y){ 
//     adjMatrix[x][y]= 1
//     console.log(adjMatrix)
// }


export default function Dot(props){
    
    const [playerAvi, updateState] = useState('') //

    function selectDot() {
        if (getCurrTurn()==0){
            updateState(sessionStorage.getItem(1))

        }
        else if (getCurrTurn()==1) {
            updateState(sessionStorage.getItem(2))
        }
        else{
            updateState(sessionStorage.getItem(3))
        }

    }


    return(
        <div>
            <div onClick={ ()=> selectDot()} className="dot" style={dotStyle}>

                <img  style={charStyle} src={playerAvi}></img>
            
            </div>
        </div>
        
    );

}