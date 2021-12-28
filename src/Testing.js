import GetCharacters from './api/GetCharacters'

const Testing = () => {



    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>

                    <div className="columns mt-3 is-centered is-multiline">
                        
                        <GetCharacters></GetCharacters>

                    </div>
            </div>
        </div>
    )
}
 
export default Testing;
