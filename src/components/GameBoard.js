import Dot from './Dot'
import cat from '../assets/meow.png'
import dog from '../assets/woof.png'
import unicorn from '../assets/neigh.png'
import LineH from './LineH'
import LineV from './LineV'
import { useState, useEffect } from 'react'

const boardStyle = {
    width : "700px",
    margin: "0",
    backgroundColor: "#E6F8FF",
    marginLeft: "auto",
    marginRight: "auto",
    
}

const row = {
    backgroundColor: "#FFFFFF",
    display: 'flex',
    flexDirection: 'row',

}

const lineDivStyle = {
    maxWidth: '150px'
}
const lineDivVStyle = {
    maxWidth: '35px'
}

const lineStyleH = {
    width: '150px',
    maxWidth: '150px',
    height: '35px',
    marginTop: 'auto',
    marginBottom:'auto',
    borderRadius: '25px',

}

const lineStyleV = {
    width: '35px',
    height: '30vh',
    maxHeight: '100px',
    borderRadius: '25px',
    marginLeft: "auto",
    marginRight: "auto"
}

// index 0 = player1, index 1 = player 2..
let playerColours = ["#E6F8FF","#D9FFCE","#F7D8FF"] 
let playerScores = [0,0,0]
let playerAvis = [sessionStorage.getItem(1),sessionStorage.getItem(2),sessionStorage.getItem(3)]


let adjMatrix = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 ]


function getCurrTurn(){
    return sessionStorage.getItem("currTurn")
}

function getNextTurn(completedSquare){
    let currPlayer= getCurrTurn()
    let nextPlayer = currPlayer

    if (completedSquare){
        nextPlayer = currPlayer
    }
    else if(currPlayer==2){
        nextPlayer=0
    }
    else{
        nextPlayer ++
    }

    sessionStorage.setItem("currTurn",nextPlayer)
    console.log("next player is: "+nextPlayer)
    return nextPlayer
}

let isLine = false
function checkIfAdj(x1,y1,x2,y2){
    isLine = (x2 == x1+1 || x2 == x1-1) || (y2 == y1+1 || y2==y1-1)
    return isLine

}



function updateMatrix(x,y){ 
    adjMatrix[x][y]= 1
    console.log(adjMatrix)
}
let turnCoords = []

function handleClick (coord) {
    // if(turnCoords.length>=2){
    //     turnCoords = []
    // }else if(turnCoords.length==1){
    //     turnCoords.push(coord)
    //     console.log(checkIfAdj(turnCoords[0][0],turnCoords[0][1],turnCoords[1][0],turnCoords[1][1]))
    //     turnCoords = []
    //     getNextTurn()    
    // }
    // else{
    //     turnCoords.push(coord)

        
    // }
    // console.log(turnCoords)
}

function mapToNode(coord){
    let map = {
        '(0,0)': 0,
        '(1,0)': 1,
        '(2,0)': 2,
        '(3,0)': 3,
        '(0,1)': 4,
        '(1,1)': 5,
        '(2,1)': 6,
        '(3,1)': 7,
        '(0,2)': 8,
        '(1,2)': 9,
        '(2,2)': 10,
        '(3,2)': 11,
        '(0,3)': 12,
        '(1,3)': 13,
        '(2,3)': 14,
        '(3,3)': 15,

    }
    return map[coord]

}

function checkIfSquare(n1,n2){
    let r1 = n1-5
    let r2 = n1+5
    if(r1 < 0) {r1 = 0}
    if(r1==0){r1=1}
    if(r2 > 15) {r2=15}
    const uniqueNodes = new Set()
    uniqueNodes.add(n1)
    uniqueNodes.add(n2)

    let adjNodes = [n1,n2]

    while(r1<r2){
        if(adjMatrix[r1][n2] || adjMatrix[r1][n1]){
            adjNodes.push(r1)
            uniqueNodes.add(r1)
            // adjNodes = Set(adjNodes)
            console.log('node:'+r1)
        }
        // if(adjMatrix.length==3){
        //     if(adjMatrix[r1+2][n2] || adjMatrix[r1+2][n1] == 1){}
        // }
        console.log('adj nodes: '+adjNodes)
        r1++
    }
    if(r1+2<=15){
        uniqueNodes.add(r1+2)

    }if(r1)
    if(uniqueNodes.size==4){
        alert('SQUARE DETECTED!')
        return true
    }
    else{
        return false
    }
    // return (adjMatrix[x1][y1] && adjMatrix[x2][y2] && adjMatrix[x3][y3] && adjMatrix[x4][y4]) == 1
}

function drawLine (coord1,coord2) {
    let currPlayer = getCurrTurn()
   let strCoord1 = '('+coord1[0]+','+coord1[1]+')'
   let strCoord2 = '('+coord2[0]+','+coord2[1]+')'
   console.log(strCoord1)
   let n1 = mapToNode(strCoord1)
   let n2 = mapToNode(strCoord2)
    let completedSquare = false

   updateMatrix(n1,n2)
   if(checkIfSquare(n1,n2)){
        playerScores[currPlayer]++
        completedSquare = true
        console.log(playerScores)
   }
   checkIfSquare(n1,n2)
   getNextTurn(completedSquare)
    
}




export default function GameBoard(){
  const [imgOpacity, showOrHide] = useState('0')

  function showImg() {
    showOrHide('100')
}

  const imgS = {
    width:"100px",
    height: "100px",
    paddingLeft: '30px',
    paddingRight: '30px',
    opacity: {imgOpacity}
    }  

 


  const [score, updateScore] = useState([0,0,0])

    useEffect(() =>{
        updateScore(playerScores)
    }, playerScores)

    return(
        <div>
        <div className='score'>
                <img  src={playerAvis[0]}></img>
                <p>{score[0]} &nbsp; </p>
                <img  src={playerAvis[1]}></img>
                <p>{score[1]} &nbsp; </p>
                <img  src={playerAvis[2]}></img>
                <p>{score[2]} </p>
        </div>

        <div style={boardStyle}>
            <div style={row}>
                <div onClick={ ()=> handleClick([0,0])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([0,0],[1,0])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([0,1])}><Dot ></Dot></div> 
                <div style = {lineStyleH}onClick={ ()=> drawLine([1,0],[2,0])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([0,2])}><Dot ></Dot></div> 
                <div style = {lineStyleH}onClick={ ()=> drawLine([2,0],[3,0])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([0,3])}><Dot ></Dot></div>
            </div>
            <div style={row}> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([0,0],[0,1])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([1,0],[1,1])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={dog}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([2,0],[2,1])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={unicorn}></img>  
                <div style = {lineStyleV}onClick={ ()=> drawLine([3,0],[3,1])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
            </div>
            <div style={row}>
                <div onClick={ ()=> handleClick([1,0])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([0,1],[1,1])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([1,1])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([1,1],[2,1])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([1,2])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([2,1],[3,1])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([1,3])}><Dot ></Dot></div>

            </div>
            <div style={row}> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([0,1],[0,2])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([1,1],[1,2])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([2,1],[2,2])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img>  
                <div style = {lineStyleV}onClick={ ()=> drawLine([3,1],[3,2])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
            </div>
            <div style={row}>
                <div onClick={ ()=> handleClick([2,0])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([0,2],[1,2])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([2,1])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([1,2],[2,2])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([2,2])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([2,2],[3,2])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([2,3])}><Dot ></Dot></div>

            </div>
            <div style={row}> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([0,2],[0,3])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([1,2],[1,3])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img> 
                <div style = {lineStyleV}onClick={ ()=> drawLine([2,2],[2,3])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
                <img style={imgS}src={cat}></img>  
                <div style = {lineStyleV}onClick={ ()=> drawLine([3,2],[3,3])}><LineV color={playerColours[getCurrTurn()]}></LineV> </div>
            </div>
            <div style={row}>
                <div onClick={ ()=> handleClick([3,0])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([0,3],[1,3])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([3,1])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([1,3],[2,3])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([3,2])}><Dot ></Dot></div>
                <div style = {lineStyleH}onClick={ ()=> drawLine([2,3],[3,3])}><LineH color={playerColours[getCurrTurn()]}></LineH> </div>
                <div onClick={ ()=> handleClick([3,3])}><Dot ></Dot></div>
            </div>
        </div>
        </div>
    )
}