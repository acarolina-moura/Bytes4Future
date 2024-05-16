import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mainText">Login</h1>
        <form className="form">
         <label></label> 
        <input className="inpt" type="email" name="email" placeholder="Email"></input>
        <label></label> 
        <input className="inpt" type="password" name="name" placeholder="Password"></input>
        </form>
        <button type="submit" className="btn">Entrar</button>
      </div>
    
    </div>
  );
}

export default App;
