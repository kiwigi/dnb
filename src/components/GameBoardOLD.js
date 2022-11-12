import Dot from './Dot'
import cat from '../assets/meow.png'
import dog from '../assets/woof.png'
import unicorn from '../assets/neigh.png'
import LineH from './LineH'
import LineV from './LineV'

const gameStyle = {
    width : "800px",
    height : "50%",
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
const col = {
    display: 'flex',
    flexDirection: 'column',
}

const imgS = {
    width:"10px",
    height: "10px"
}

export default function GameBoard(){
    return(
        <div style={gameStyle}>
            <div style={col}>
                <div style={row}>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>  
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV> 
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>  
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV> 
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>  
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV> 
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        <LineV color="#D9FFCE"></LineV>
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <Dot></Dot>
                          
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        
                    </div>
                    <LineH color="#D9FFCE"></LineH>
                    <div style={col}>
                        <Dot></Dot>
                        
                    </div>
                </div>

            </div>
            
        </div>
    )
}