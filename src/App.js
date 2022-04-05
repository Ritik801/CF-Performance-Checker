
import './App.css';
import Header from './component/header';
import Form from './component/form';
import React from "react";

function App() {
  const [theme,settheme]=React.useState(true)
  function toggler(){
    settheme(!theme)

  }
  return (
    <div className='Main-box'>
   
    <Header theme={theme} toggle={toggler}/>
    <Form theme={theme}/>
    </div>
  )
}

export default App;
