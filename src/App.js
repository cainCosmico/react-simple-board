import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import { Aforo } from "./aforo/Aforo";
import Album from './Album/Album'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          <Hello title='Hello from props'/>
        </p> */}

        {/* <div>
          <Aforo title='Hola soy aforo'/>
        </div> */}

        {/* <Text 
        arrayOfNumbers={[2,45,8]}
        objectWithInfo={ {key:'value', key2:'otherValue'} }
        number={2} 
        text='Texto en string' 
        boolean={true}
        isActivate/> */}

        {/* <Aforo 
        
        actual={38}
        disponible={12}
        estado={true}
        alphaTiempo='12 min apox'

        /> */}

        <Album value={10}/>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lee la doc prro
        </a> */}
      </header>
    </div>
  );
}

// function Hello(props)
// {
// return <h1>Bienvenidos a React App, { props.title }</h1>
// }

// class Hello extends Component
// {
//   render () 
//   {
//     return <h1>Bienvenidos a React App, { this.props.title }</h1>
//   }
// }

// class Text extends Component {
//   render () {
//     const textoSegundoBool = this.props.isActivate ? 'On' : 'Off';
//     const mappedNumbers = this.props.arrayOfNumbers.map( n=> n*2 );

//     return (
//       <div>
//         <p> { this.props.text } </p> 
//         <p> { this.props.number } </p>
//         <p> { JSON.stringify(this.props.boolean) } </p>
//         <p> { this.props.isActivate } </p>
//         <p> { textoSegundoBool } </p>
//         <p> { this.props.arrayOfNumbers.join(', ') } </p>
//         <p> { mappedNumbers.join(', ') } </p>
//         <p> { this.props.objectWithInfo.key } </p>
//       </div>
//     )
//   }
  
// }

// class Aforo extends Component {

//   // this.state = {

//   // }


//   render() {

//     const {
//       estado,
//       actual,
//       disponible,
//       alphaTiempo,      
//     } = this.props;

//     const estadoCli = estado ? 'Siga' : 'Espere'

//      return (
//       <div>
//           <h2> { actual } </h2>
//           <h2> { disponible } </h2>
//           <h2> { alphaTiempo } </h2>
//           <h2> { estadoCli } </h2>
//       </div>

//      )
//   }
// }


export default App;
