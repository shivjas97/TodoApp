import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="nav">
                {/* <button><Link to="Home">Home</Link></button> */}
                    <button ><Link to="Multipleinput">Signup</Link></button>
                    <button ><Link to="Login1">Login</Link></button>
                    <button  ><Link to="Todos"> Todos</Link> </button>
                </div>
            </nav>
        </div>
    );
}
export default Header;