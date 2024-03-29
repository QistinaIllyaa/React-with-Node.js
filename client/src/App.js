// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useEffect, useState} from 'react'

function App(){

const [backendData, setBackendData] = useState([{}]) //to fetch backend data

useEffect(() => {
  fetch("/api").then(
    response => response.json() // to get the response in json
  ).then(
    data => {
      setBackendData(data) //get the backend data
    }
  )
}, []) // adding the empty array will make it run only the first render of the component

  return(
    <div>
      <ol><b> Success on creating first react+Node.js</b> </ol>
          
      {/* if statement */}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p> //give a loading message when trying to fetch the data
      ) : (
        backendData.users.map((user, i) => (
          <ul key={i}>{user}</ul> //getting user from the backend
        ))
      )}

    </div>
  )
}

export default App