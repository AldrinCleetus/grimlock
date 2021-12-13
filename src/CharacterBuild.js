const CharacterBuild = ()=>{

    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className="test is-fullwidth has-text-centered is-size-1">
                    <div>
                    <h1 className="">Character Build</h1>
                    </div>


                    

                    <div className="character-build container p-2">
                        <div className="p-1 is-size-3">
                        <input class=" build-name has-text-info p-2 is-size-2" type="text" placeholder="Enter Build Name: "/>
                        </div>

                        <div className="horizontal-bar"></div>

                        

                        

                        <div className="columns p-2">

                            <div className="character-splash p-1 column is-5">
                                <img className="character-splash-img" src="https://api.genshin.dev/characters/bennett/gacha-splash" alt="error" />
                            </div>

                            <div className="column is-2 ">
                                        <h6 className="is-size-4">Weapons</h6>
                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-5 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                    <img src="images/weapon.png" alt="test" />
                                                </figure>
                                            </div>
                                            <div class=" is-text-overflow has-background-link rounded-corner">
                                                <p className="is-size-7">Select</p>
                                            </div>
                                        </div>

                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-5 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                <img src="images/weapon.png" alt="test" />
                                                </figure>
                                            </div>
                                            <div class=" is-text-overflow has-background-link rounded-corner">
                                                <p className="is-size-7">Select</p>
                                            </div>
                                        </div>

                                        <div class="card charactericon has-text-black characterSelector has-background-grey my-5 mx-auto is-size-2">
                                            <div class="card-image">
                                                <figure class="image">
                                                    <img src="images/weapon.png" alt="test" />
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
                                <h6 className="is-size-4 ">Artifact Stat</h6>
                                
                                <div className="columns is-centered">
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/goblet.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/timepiece.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2  mx-auto is-size-2">
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
                                
                                <h6 className="is-size-4 ">Artifact Type</h6>
                                <div className="columns is-centered">
                                   
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/artifact.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2 mx-auto is-size-2">
                                                <div class="card-image">
                                                    <figure class="image">
                                                    <img src="images/artifact.png" alt="test" />
                                                    </figure>
                                                </div>
                                                <div class=" is-text-overflow has-background-link rounded-corner">
                                                    <p className="is-size-7">Select</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div class="card charactericon has-text-black characterSelector has-background-grey my-2  mx-auto is-size-2">
                                                    <div class="card-image">
                                                        <figure class="image">
                                                        <img src="images/artifact.png" alt="test" />
                                                        </figure>
                                                    </div>
                                                    <div class=" is-text-overflow has-background-link rounded-corner">
                                                        <p className="is-size-7">Select</p>
                                                    </div>
                                                </div>
                                        </div>


                                        

                                </div>
                                

                                <div className="columns">
                                    <div className="artifact-effect column ml-3 testtext">
                                        <p className="is-size-4 has-text-left mb-2">
                                            2 piece: Elemental Burst DMG +20% placeholder
                                        </p>
                                        <p className="is-size-4 has-text-left">
                                            4 piece: When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing.
(This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses).
Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time.
This effect can still be triggered even when the character who is using this artifact set is not on the field.
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