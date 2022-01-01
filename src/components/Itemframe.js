import {useState, useEffect, useContext} from 'react';
import { CharacterContext } from '../Helper/Context';


const Itemframe = ({frameImage,name,rarity,toggleModal,placeholder,selectedID}) => {


    const {currentCharacter, setcurrentCharacter} = useContext(CharacterContext)

    const [isRarity] = useState(rarity)
    const [backgroundColor,setBackgroundColor] =  useState("grey") 


    // its a empty frame
    if(toggleModal !== undefined){
        
        frameImage = placeholder[selectedID].frameImage
        name = placeholder[selectedID].name
    }

    const userSelected = ()=>{
        setcurrentCharacter( prevState=> ({
            ...prevState,
            frameImage: frameImage,
            name: name,
            rarity: rarity
        }))

        if(toggleModal !== undefined){    
            toggleModal()
            setcurrentCharacter( prevState=> ({
                ...prevState,
                id: selectedID
            }))
        }


    }

    useEffect(() =>{
        
        switch (isRarity) {
            case 4:
                setBackgroundColor("purple")
                break;
            case 5:
                setBackgroundColor("gold")
                break;
            default:
                setBackgroundColor("grey")
        }
        
    },[isRarity])
    

    return ( 
        <div className={`card charactericon has-text-black characterSelector has-background-${backgroundColor} is-text-overflow`} onClick={userSelected}>
                                <div className="card-image is-1">
                                    <figure className="image ">
                                        <img src={frameImage} alt="404" />
                                    </figure>
                                </div>
                                <div className=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-6">{name}</p>
                                </div>
                            </div>
     );
}
 
export default Itemframe;