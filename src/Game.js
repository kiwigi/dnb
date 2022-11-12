import Dot from './components/Dot'
import cat from './assets/meow.png'
import dog from './assets/woof.png'
import unicorn from './assets/neigh.png'
import Title from './components/Title'
import LineH from './components/LineH'
import LineV from './components/LineV'
import GameBoard from './components/GameBoard'

const player1Color = "#E6F8FF"
const player2Color = "#D9FFCE"
const player3Color = "#F7D8FF"

let player1Score = 0;
let player2Score = 0;
let player3Score = 0;

let player1Avi = sessionStorage.getItem(1)
let player2Avi = sessionStorage.getItem(2)
let player3Avi = sessionStorage.getItem(3)

function getNextTurn(currPlayer){
        let nextPlayer = 0
        if(currPlayer===3){
            nextPlayer=1
        }
        else{
            nextPlayer ++
        }
    return nextPlayer
}



export default function Game(){
    return(
        <div>
            <div className='titleS'> Dots• & Boxes☐</div>
            
            <GameBoard></GameBoard>

        </div>
       

    )
}