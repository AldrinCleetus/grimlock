import Itemframe from './components/Itemframe'

const CharacterBuild = ()=>{

    const test  = {
        frameImage: "images/72.png", 
        frameTitle : "select"
    }

    const artifactType  = {
        frameImage: "images/timepiece.png", 
        frameTitle : "select"
    }

    const artifact  = {
        frameImage: "images/artifact.png", 
        frameTitle : "select"
    }

    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className="test is-fullwidth has-text-centered is-size-1">
                    <div>
                    <h1 className="">Character Build</h1>
                    </div>


                    

                    <div className="character-build container p-2">
                        <div className="p-1 is-size-3">
                        <input className=" build-name has-text-info p-2 is-size-2" type="text" placeholder="Enter Build Name: "/>
                        </div>

                        <div className="horizontal-bar"></div>

                        

                        

                        <div className="columns p-2">

                            <div className="character-splash column is-5">
                                <img className="character-splash-img" src="https://api.genshin.dev/characters/bennett/gacha-splash" alt="error" />

                                <h6 className="is-size-4">Team Synergy</h6>
                                <div className="columns is-centered my-auto">
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe {...test}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe  {...test}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe  {...test}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe  {...test}></Itemframe>
                                    </div>  
                                </div>
                                        
                            </div>

                            <div className="column px-0">
                                <div className="bar">

                                </div>
                            </div>
                            


                            <div className="column is-7">

                            <h6 className="is-size-4 ">Weapons</h6>
                                
                                <div className="columns is-centered">
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                        

                                </div>


                                <h6 className="is-size-4 ">Artifact Stat</h6>
                                
                                <div className="columns is-centered">
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifactType}></Itemframe>
                                    </div>
                                        

                                </div>
                                
                                <h6 className="is-size-4 ">Artifact Type</h6>
                                <div className="columns is-centered">
                                   
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifact}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifact}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                        <Itemframe {...artifact}></Itemframe>
                                    </div>   

                                </div>

                                

                                
                                

                                <div className="columns">
                                    <div className="artifact-effect column ml-3 testtext">
                                        <p className="is-size-4 has-text-left mb-2">
                                            2 piece: Elemental Burst DMG +20% placeholder
                                        </p>
                                        <p className="is-size-4 has-text-left">
                                            4 piece: something something somethingsomething
                                             something somethingsomething something somethingsomething 
                                             something somethingsomething something somethingsomething 
                                             something somethingsomething something somethingsomething
                                             something somethingsomething something somethingsomething
                                             something somethingsomething something somethingsomething 
                                             something somethingsomething something somethingsomething 
                                             something somethingsomething something something
                                        </p>
                                    </div>
                                    
                                </div>


                                
                                </div>


                                


                        </div>


                    </div>

                   
            </div>
        </div>
    )
}

export default CharacterBuild;