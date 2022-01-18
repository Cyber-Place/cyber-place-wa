import { useSelector } from "react-redux";
import { accountService } from "../../services/account/accountService";


const Home = () => {
  const state = useSelector(state => state);
  const access = state.account;
  
  let accServ = accountService();
  const logoutUser = accServ.useLogout();
  

  const handleLogout = (e) =>{
    logoutUser();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenido a Cyber Place
        </p>
        <a
          className="App-link"
          href="https://bit.ly/3n9qNeK"
          target="_blank" rel="noreferrer"
        >
          Comencemos
        </a>
        <p>Logueado: {JSON.stringify(access)}</p>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  )
}

export default Home;
