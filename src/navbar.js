import { Link } from "react-router-dom";


const Navbar = ()=>{

    return(
        <div className="column max-height is-2"> 
            <nav className="menu">
                <div className="navbar-brand is-size-4 column">
                    <a href="/">
                        <img src="images/test.png" alt="test" />
                    </a>
                </div>

                <ul className="section p-2 is-size-4">
                    <li className="py-4 ">
                        <Link to="/">Character Build</Link>
                    </li>
                </ul>
            </nav>

            
        </div>
        
    )
}

export default Navbar;