import './App.css';
import Logo from "./images/Logon.svg";
import Ham from "./images/hamburger.png";

const Top = () => {
    return (
        <div className="App">
           <img className='Logo' src={Logo} alt="Logo" />

            <ul className="top-nav">
                <li>Blog</li>
                <li>Pricing</li>
                <li>Login</li>
                <h3>Sign Up</h3>
            </ul>
            <div className='ham'>
            <img className='Ham' src={Ham} alt="Logo" />
            </div>
        </div>
        
      );
}
 
export default Top