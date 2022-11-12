import './App.css';
import { Link } from "react-router-dom";
import PlayerCard from './components/PlayerCard';
import Title from './components/Title';

const cardsS = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding:'10px',
}

const welcomeS = {
  fontSize: "4vh",
  color: "#707070",
}
const titleS={
  marginTop: "7vh",
  marginBottom: "4vh"
}

const startButton={
  marginLeft: 'auto',
  fontSize: '3vh',
  marginRight: 'auto',
  justifyContent: "center",
  border: '4px solid #F7D8FF',
  width: '150px',
  padding: '15px',
  borderRadius: '25px',
}

function App() {
  return (
    <div className="App">
      <div>
        <div style={titleS}>
          <Title></Title>   
        </div>
        <div style={welcomeS}>Welcome! Please select your player characters.</div>
        <div style={cardsS}>
          <PlayerCard num="1" color="#E6F8FF"></PlayerCard>
          <PlayerCard num="2" color="#D9FFCE"></PlayerCard>
          <PlayerCard num="3" color="#F7D8FF"></PlayerCard>
        </div>
        <div style={startButton}>
          <Link to="/game" style={{ fontSize: '1vw',textDecoration: 'none',color: '#707070'}}>⮕Start game!</Link> 
        </div>
        {/* pls make it so it gives error if 3 players arent selected :(()) */}
      </div>
    </div>
  );
}

export default App;
