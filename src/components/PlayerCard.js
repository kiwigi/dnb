import DotSelect from './DotSelect'
import cat from '../assets/meow.png'
import dog from '../assets/woof.png'
import unicorn from '../assets/neigh.png'
import {useState} from 'react';



const pStyle = {
    fontSize: "3vh"

}
const dotsS = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
}
const dt={
    padding:'10px',

}



function setPlayer(playerNum,playerCharacter,color){
    
    
    window.sessionStorage.setItem(playerNum, playerCharacter);
    console.log(sessionStorage)
    




}


export default function PlayerCard(props){

    const [selected,notSelected ] = useState(false);
    

    const cardStyle={
        margin: "10px",
        backgroundColor: props.color,
        width: '80%',
        maxWidth: '400px',
        height: '200px',
        borderRadius: '40px',
        justifyContent: 'center',
        padding: '10px'
    }
    return(
  
        <div style={cardStyle}>
        <p style={pStyle}>Player {props.num}</p>
            <div style={dotsS}>
                <div id="cat"  onClick={ ()=> setPlayer(props.num,cat,props.color)}style={dt}>
                    <DotSelect character={cat}></DotSelect>
                </div>
                <div id="dog" onClick={ ()=> setPlayer(props.num,dog,props.color)} style={dt}>
                    <DotSelect character={dog}></DotSelect>
                </div>
                <div id="unicorn" onClick={ ()=> setPlayer(props.num,unicorn,props.color)} style={dt}>
                    <DotSelect character={unicorn}></DotSelect>
                </div>
            </div>
            
        </div>
    )
}