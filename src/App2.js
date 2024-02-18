import React , {useState} from 'react'
import MovieCard from './Movie/MovieCard'
import Navbar1 from './Movie/Navbar';

const App = () => {
  const [mode , setMode] = useState(false);
  const [text , setText] = useState("Light Mode");

  const changeMode = () =>{
    
    if(mode == false){
      setText("Dark Mode");
      setMode(true);
      document.body.style = 'background : #121212'
      
    }
    else{
      setText("Light Mode");
      setMode(false);
      document.body.style = 'background : white'
    }
  }
  return (
    <div>
      <Navbar1 text={text} changeMode={changeMode} mode={mode} />
      <MovieCard mode={mode} />
    </div>
  )
}

export default App
