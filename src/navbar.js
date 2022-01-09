import { Link } from "react-router-dom";


const Navbar = ()=>{

    return(
    
        <div className="columns max-height sidebar is-multiline  is-vcentered">
            <div className="column is-full p-5 ">
                <img src="images/test.png" alt="logo"  />
            </div>

            <div className="column ">
            <ul className=" section p-2 is-size-4">
                     <li className="p-4 mb-2 has-background-primary rounded-links">
                         <Link to="/">Character Build</Link>
                     </li>

                     <li className="p-4 mb-2 has-background-primary rounded-links">
                         <Link to="/teamcomp">Team Comp</Link>
                     </li>
                     
                 </ul>
            </div>
            <div className="column is-full"></div>
            <div className="column is-full"></div>
            <div className="column is-full"></div>
            <div className="column is-full"></div>
            <div className="column is-full"></div>

            <div className="column is-full has-text-grey p-5 mt-auto">
                <p>This site is not affiliated with or endorsed by miHoYo.</p>
            </div>
            
        </div>
        
    )
}

export default Navbar;