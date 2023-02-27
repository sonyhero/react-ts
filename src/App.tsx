import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function hello() {
    debugger;
    alert('Hello Anton');
}

/*hello();*/

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My Friends'}/>
            Article-1
            <Rating value={3}/>
            <Accordion title={'Accordion title-1'}/>
            <Accordion title={'Accordion title-2'}/>
            Article-2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
