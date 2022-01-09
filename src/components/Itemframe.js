import { useContext} from 'react';
import { CharacterContext } from '../Helper/Context';


const Itemframe = ({frameImage,name,rarity,toggleModal,placeholder,selectedID,gacha}) => {


    const {currentCharacter, setcurrentCharacter} = useContext(CharacterContext)
 

    // its a empty frame
    if(toggleModal !== undefined){
        
        frameImage = placeholder[selectedID].frameImage
        name = placeholder[selectedID].name
        rarity = placeholder[selectedID].rarity

        
    }

    const userSelected = ()=>{
        
        setcurrentCharacter( prevState=> ({
            ...prevState,
            frameImage: frameImage,
            name: name,
            rarity: rarity,
            gachaArt: gacha
        }))


        if(toggleModal !== undefined){  

            toggleModal()
            setcurrentCharacter( prevState=> ({
                ...prevState,
                id: selectedID
            }))

        }


    }

    // Handles the background color
    let currentRarity

    switch (rarity) {
        case 4:
            currentRarity = "purple"
            break;
        case 5:
            currentRarity = "gold"
            break;
        default:
            currentRarity = "grey"
    }
    

    return ( 
        <div className={`card charactericon has-text-black characterSelector has-background-${currentRarity} is-text-overflow`} onClick={userSelected}>
                                <div className="card-image is-1">
                                    <figure className="image ">
                                        <img src={frameImage} alt='👷‍'/>
                                    </figure>
                                </div>
                                <div className=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-6">{name}</p>
                                </div>
                            </div>
     );
}
 
export default Itemframe;