function Login() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mainText">Login</h1>
        <form className="form">
          <input type="email" name="email" placeholder="Email"></input>
          <input type="password" name="name" placeholder="Password"></input>
        </form>
        <button type="submit" className="btn">
          Entrar
        </button>
      </div>
    </div>
  );
}
