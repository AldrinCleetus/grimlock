const CharacterBuild = ()=>{

    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className="test is-fullwidth has-text-centered is-size-1">
                    <div>
                    <h1 className="">Character Build</h1>
                    </div>

                    <div className="character-build container p-2">
                        <div className="m-1">
                        <input class="input is-rounded" type="text" placeholder="Enter Build Name: "/>
                        </div>

                        

                        <div className="columns p-2">

                            <div className="character-splash p-1">
                                <img className="character-splash-img" src="https://api.genshin.dev/characters/bennett/gacha-splash" alt="error" />
                            </div>


                        </div>



                    </div>

                   
            </div>
        </div>
    )
}

export default CharacterBuild;