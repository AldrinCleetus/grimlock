import { useEffect, useState, createRef, useRef } from 'react';
import ArtifactModal from './components/ArtifactModal';
import ArtifactStatModal from './components/ArtifactStatModal';
import CharacterModal from './components/CharacterModal';
import Itemframe from './components/Itemframe';
import WeaponsModal from './components/WeaponsModal';
import { CharacterContext } from './Helper/Context';
import CharacterGacha from './components/CharacterGacha';
import html2canvas from 'html2canvas'




const CharacterBuild = () => {

    // Activates the character modal
    const [characterSelecter,setCharacterSelecter] = useState(false)
    // Activated the artifact modal
    const [artifactSelecter,setArtifactSelecter] = useState(false)
    // Activated the weapons modal
    const [weaponSelecter,setWeaponSelecter] = useState(false)
    // Activated the artifactStat modal
    const [artifactStatSelecter,setartifactStatSelecter] = useState(false)
    const [artifactStatSelecterGoblet,setartifactStatSelecterGoblet] = useState(false)
    const [artifactStatSelecterCirclet,setartifactStatSelecterCirclet] = useState(false)


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
            frameImage: "images/72.png", 
            name : "select"
        },
        {
            id: 4,
            frameImage: "images/weapon.png", 
            name : "select"
        },
        {
            id: 5,
            frameImage: "images/weapon.png", 
            name : "select"
        },
        {
            id: 6,
            frameImage: "images/weapon.png", 
            name : "select"
        },
        {
            id: 7,
            frameImage: "images/timepiece.png", 
            name : "select"
        },
        {
            id: 8,
            frameImage: "images/goblet.png", 
            name : "select"
        },
        {
            id: 9,
            frameImage: "images/circlet.png", 
            name : "select"
        },
        {
            id: 10,
            frameImage: "images/artifact.png", 
            name : "select"
        },
        {
            id: 11,
            frameImage: "images/artifact.png", 
            name : "select"
        },
        {
            id: 12,
            frameImage: "images/artifact.png", 
            name : "select",
            gachaArt: "https://api.genshin.dev/characters/bennett/gacha-splash"
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

    //Weapons Toggle
    const ArtifactStatClicked = ()=>{
        setartifactStatSelecter(!artifactStatSelecter)
    }

    const ArtifactStatClickedGoblet = ()=>{
        setartifactStatSelecterGoblet(!artifactStatSelecterGoblet)
    }

    const ArtifactStatClickedCirclet = ()=>{
        setartifactStatSelecterCirclet(!artifactStatSelecterCirclet)
    }

    //image stuff
    const imageRef = useRef()
    const handleDownloadImage = async () => {
        const element = imageRef.current;
        const canvas = await html2canvas(element,{allowTaint:true,letterRendering: 1,useCORS: true,backgroundColor:"#262626",});
    
        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'image.jpg';
    
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
      };
  

    useEffect(() => {
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
        <CharacterContext.Provider value={{currentCharacter, setcurrentCharacter}}  >
        
        <div className="column max-height has-background-primary has-text-info"  >
            <div className="test is-fullwidth has-text-centered is-size-1" >
                    <div>
                    <h1 className="">Character Build</h1>
                    </div>

                    { characterSelecter && <CharacterModal toggle={characterSelecter} close={characterSelecterClicked} ></CharacterModal>}

                    { artifactSelecter && <ArtifactModal toggle={artifactSelecter} close={ArtifactSelecterClicked} ></ArtifactModal>}

                    { weaponSelecter && <WeaponsModal toggle={weaponSelecter} close={WeaponSelecterClicked} ></WeaponsModal>}

                    { artifactStatSelecter && <ArtifactStatModal toggle={artifactStatSelecter} close={ArtifactStatClicked} type={"sands"} ></ArtifactStatModal>}
                    { artifactStatSelecterGoblet && <ArtifactStatModal toggle={artifactStatSelecterGoblet} close={ArtifactStatClickedGoblet} type={"goblet"} ></ArtifactStatModal>}
                    { artifactStatSelecterCirclet && <ArtifactStatModal toggle={artifactStatSelecterCirclet} close={ArtifactStatClickedCirclet} type={"circlet"} ></ArtifactStatModal>}

                    <div className="character-build container p-2 " ref={imageRef}>
                        <div className="p-1 is-size-3">
                            <h2 className=" build-name has-text-info p-2 is-size-2" contentEditable={true} spellCheck={false}>Build name here</h2>
                        </div>

                        <div className="horizontal-bar"></div>

                        

                        

                        <div className="columns p-2">

                            <div className="character-splash column is-5">
                                {/* <img className="character-splash-img" src={selectedCharacter[12].gachaArt} alt="error" onClick={characterSelecterClicked} /> */}
                                <CharacterGacha gachaArt={selectedCharacter[12].gachaArt} toggle={characterSelecterClicked} selectedID={12}></CharacterGacha>    

                                <h6 className="is-size-4">Team Synergy</h6>
                                <div className="columns is-centered my-auto">
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={0}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={1}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={2}></Itemframe>
                                    </div>  
                                    <div className="column is-2 mx-auto p-0">
                                        <Itemframe toggleModal={characterSelecterClicked} placeholder={selectedCharacter} selectedID={3}></Itemframe>
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
                                    <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={4}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={5}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={WeaponSelecterClicked} placeholder={selectedCharacter} selectedID={6}></Itemframe>
                                    </div>
                                        

                                </div>


                                <h6 className="is-size-4 ">Artifact Stat</h6>
                                
                                <div className="columns is-centered">
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={ArtifactStatClicked} placeholder={selectedCharacter} selectedID={7}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={ArtifactStatClickedGoblet} placeholder={selectedCharacter} selectedID={8}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={ArtifactStatClickedCirclet} placeholder={selectedCharacter} selectedID={9}></Itemframe>
                                    </div>
                                        

                                </div>
                                
                                <h6 className="is-size-4 ">Artifact Type</h6>
                                <div className="columns is-centered">
                                   
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={ArtifactSelecterClicked} placeholder={selectedCharacter} selectedID={10}></Itemframe>
                                    </div>
                                    <div className="column is-2 mx-auto">
                                    <Itemframe toggleModal={ArtifactSelecterClicked} placeholder={selectedCharacter} selectedID={11}></Itemframe>
                                    </div>

                                </div>
                                
                                </div>


                                


                        </div>


                    </div>

                    <div className='mt-6 '>
                        <button class="button is-info is-rounded is-outlined is-large " onClick={handleDownloadImage}>Download Build</button>
                    </div>    
            </div>


            

        </div>
        </CharacterContext.Provider>
    )
}
 
export default CharacterBuild;
