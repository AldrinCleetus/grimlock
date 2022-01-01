import { useEffect, useState } from 'react';
import CharacterModal from './components/CharacterModal';
import Itemframe from './components/Itemframe';
import { CharacterContext } from './Helper/Context';





const Testing = () => {

    // Activates the character modal
    const [characterSelecter,setCharacterSelecter] = useState(false)


    // global state
    const [currentCharacter, setcurrentCharacter] = useState(null);


    const [selectedCharacter, setselectedCharacter] = useState([{
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
        console.log(selectedCharacter)
        if(currentCharacter === null) return

        let tempState = selectedCharacter.map( character =>{
            if(character.id === currentCharacter.id){
                return (currentCharacter)
            }
            return character
        })

        setselectedCharacter(tempState)

        



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
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={0}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={1}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={2}></Itemframe>
                        </div>
                        
                            

                    </div>

                    

                    

                    

            </div>
        </div>
        </CharacterContext.Provider>
    )
}
 
export default Testing;
