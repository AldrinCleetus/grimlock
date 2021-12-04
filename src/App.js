import Navbar from "./navbar";
import CharacterBuild from "./CharacterBuild";
import Testing from "./Testing";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


const App = ()=>{

    return(
        <Router>
        <section className="hero is-fullheight">
            <div className="columns m-0 p-0">
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<CharacterBuild/>} />

                    <Route exact path="/test" element={<Testing/>} />
                </Routes>
            </div>  
        </section>
        </Router>
    )
}

export default App;