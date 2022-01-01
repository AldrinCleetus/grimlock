import { useEffect, useState } from 'react';
import ArtifactModal from './components/ArtifactModal';
import CharacterModal from './components/CharacterModal';
import Itemframe from './components/Itemframe';
import WeaponsModal from './components/WeaponsModal';
import { CharacterContext } from './Helper/Context';







const Testing = () => {

    // Activates the character modal
    const [characterSelecter,setCharacterSelecter] = useState(false)
    // Activated the artifact modal
    const [artifactSelecter,setArtifactSelecter] = useState(false)
    // Activated the weapons modal
    const [weaponSelecter,setWeaponSelecter] = useState(false)


    // global state
    const [currentCharacter, setcurrentCharacter] = useState(null);


    const [selectedCharacter, setselectedCharacter] = useState([{
            id: 0,
            frameImage: "images/72.png", 
            name : "select"
        },
        {
            id: 1,
            frameImage: "images/72.png", 
            name : "select"
        },
        {
            id: 2,
            frameImage: "images/72.png", 
            name : "select"
        },
        {
            id: 3,
            frameImage: "images/timepiece.png", 
            name : "select"
        },
        {
            id: 4,
            frameImage: "images/goblet.png", 
            name : "select"
        },
        {
            id: 5,
            frameImage: "images/circlet.png", 
            name : "select"
        }]

    );

    //Character Modal toggle

    const characterSelecterClicked = ()=>{
        setCharacterSelecter(!characterSelecter)
    }


    //Artifact Toggle
    const ArtifactSelecterClicked = ()=>{
        setArtifactSelecter(!artifactSelecter)
    }

    //Weapons Toggle
    const WeaponSelecterClicked = ()=>{
        setWeaponSelecter(!weaponSelecter)
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

                    { artifactSelecter && <ArtifactModal toggle={artifactSelecter} close={ArtifactSelecterClicked} ></ArtifactModal>}

                    { weaponSelecter && <WeaponsModal toggle={weaponSelecter} close={WeaponSelecterClicked} ></WeaponsModal>}


                    

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

                    <div className="columns is-centered">
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={ArtifactSelecterClicked} placeholder={selectedCharacter} selectedID={3}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={ArtifactSelecterClicked} placeholder={selectedCharacter} selectedID={4}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={ArtifactSelecterClicked} placeholder={selectedCharacter} selectedID={5}></Itemframe>
                        </div>
                    </div>

                    <div className="columns is-centered">
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={3}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={4}></Itemframe>
                        </div>
                        <div className="column is-2 mx-auto">
                            <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={5}></Itemframe>
                        </div>
                    </div>

                    

                    

                    

                    

            </div>
        </div>
        </CharacterContext.Provider>
    )
}
 
export default Testing;
