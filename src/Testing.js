import { useEffect, useState } from 'react';
import CharacterModal from './components/CharacterModal';
import Itemframe from './components/Itemframe';
import { CharacterContext } from './Helper/Context';





const Testing = () => {

    // Activates the character modal
    const [characterSelecter,setCharacterSelecter] = useState(false)


 
    const [currentCharacter, setcurrentCharacter] = useState(null);


    const [selectedArtifact, setSelectedArtifact] = useState([{
            id: 0,
            frameImage: "images/timepiece.png", 
            name : "select"
        },
        {
            id: 1,
            frameImage: "images/timepiece.png", 
            name : "select"
        },
        {
            id: 2,
            frameImage: "images/timepiece.png", 
            name : "select"
        }]

    );


    const characterSelecterClicked = ()=>{
        setCharacterSelecter(!characterSelecter)
    }

    useEffect(() => {
        console.log(currentCharacter)
    }, [currentCharacter]);

    return(
        <CharacterContext.Provider value={{currentCharacter, setcurrentCharacter}}>
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>
                    
                    
                    { characterSelecter && <CharacterModal toggle={characterSelecter} close={characterSelecterClicked} ></CharacterModal>}

                    <div className="columns is-centered">
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedArtifact} selectedID={0}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedArtifact} selectedID={1}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedArtifact} selectedID={2}></Itemframe>
                        </div>
                        
                            

                    </div>

                    

                    

                    

            </div>
        </div>
        </CharacterContext.Provider>
    )
}
 
export default Testing;
