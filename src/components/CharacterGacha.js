import { useContext } from 'react';
import { CharacterContext } from '../Helper/Context';



const CharacterGacha = ({gachaArt,toggle,selectedID}) => {

    const {currentCharacter, setcurrentCharacter} = useContext(CharacterContext)
    
    const clicked = ()=>{

        toggle()
        setcurrentCharacter( prevState=> ({
            ...prevState,
            id: selectedID,
        }))
        
    }

    return ( 
        <div className='gachaImage' onClick={clicked}>
            <img className="m-auto character-splash-img gacha-size " src={gachaArt} alt="Select Character"  />
        </div>
     );
}
 
export default CharacterGacha;