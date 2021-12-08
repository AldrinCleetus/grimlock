const Testing = () => {
    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>

                    <div className="columns mt-3 is-centered">
                        <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-purple">
                                <div class="card-image">
                                    <figure class="image">
                                    <img src="https://api.genshin.dev/characters/bennett/icon" alt="test" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Bennett</p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-gold">
                                <div class="card-image">
                                    <figure class="image">
                                    <img src="https://api.genshin.dev/characters/yoimiya/icon" alt="test" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Yoimia</p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-gold">
                                <div class="card-image">
                                    <figure class="image">
                                    <img src="https://api.genshin.dev/characters/tartaglia/icon" alt="404" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Childe</p>
                                </div>
                            </div>
                        </div>

                        

                        

                        
                      

                        
                    </div>

                    

                    

                


            </div>
        </div>
    )
}
 
export default Testing;
