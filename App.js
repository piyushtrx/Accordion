// import logo from './logo.svg';
// import './App.css';
// import User from './User';
// import API from "./api.json"
import Details from "./Deatils"
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
      </header> */}
      {/* <User/> */}
      {/* {
        API.map((record)=>{
          return(<div>
            {record.email}
          
          <div>{record.dob}</div>
          </div>) 

})
      } */}
      <Details/>
    </div>
  );
}

export default App;
