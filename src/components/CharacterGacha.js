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
        <div className='gachaImage'>
            <img className="m-auto character-splash-img gacha-size " src={gachaArt} alt="error" onClick={clicked} />
        </div>
     );
}
 
export default CharacterGacha;