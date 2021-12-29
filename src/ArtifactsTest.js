import GetArtifacts from "./api/GetArtifacts";



const ArtifactTest = () => {



    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Artifacts</h1>
                    </div>

                    <div className="columns mt-3 is-centered is-multiline">
                        
                        <GetArtifacts></GetArtifacts>

                    </div>
            </div>
        </div>
    )
}
 
export default ArtifactTest;
