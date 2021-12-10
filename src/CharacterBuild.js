const CharacterBuild = ()=>{

    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className="test is-fullwidth has-text-centered is-size-1">
                    <div>
                    <h1 className="">Character Build</h1>
                    </div>


                    

                    <div className="character-build container p-2">
                        <div className="mt-2 ">
                        <input class="input is-rounded" type="text" placeholder="Enter Build Name: "/>
                        </div>

                        <div className="horizontal-bar"></div>

                        

                        

                        <div className="columns p-2">

                            <div className="character-splash p-1 column is-5">
                                <img className="character-splash-img" src="https://api.genshin.dev/characters/bennett/gacha-splash" alt="error" />
                            </div>

                            <div className="column is-2 ">
                                        <h6 className="is-size-4">Weapons</h6>
                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                <img src="images/48.png" alt="test" />
                                                </figure>
                                            </div>
                                            <div class=" is-text-overflow has-background-link rounded-corner">
                                                <p className="is-size-7">Select</p>
                                            </div>
                                        </div>

                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                <img src="images/48.png" alt="test" />
                                                </figure>
                                            </div>
                                            <div class=" is-text-overflow has-background-link rounded-corner">
                                                <p className="is-size-7">Select</p>
                                            </div>
                                        </div>

                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                <img src="images/48.png" alt="test" />
                                                </figure>
                                            </div>
                                            <div class=" is-text-overflow has-background-link rounded-corner">
                                                <p className="is-size-7">Select</p>
                                            </div>
                                        </div>

                                        

                                        

                                        
                            </div>
                            

                            <div className="column px-0 ">
                                <div className="bar">

                                </div>
                            </div>


                            <div className="column is-5">
                                <h6 className="is-size-4 ">Artifacts</h6>
                                <div className="columns">
                                    <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/goblet.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/timepiece.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-4 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/circlet.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
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