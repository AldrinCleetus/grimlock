import { useState } from 'react';
import CharacterModal from './components/CharacterModal';


const Testing = () => {


    const [characterSelecter,setCharacterSelecter] = useState(false)

    const characterSelecterClicked = ()=>{
        setCharacterSelecter(!characterSelecter)
    }

    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>

                    <div className={'has-background-black ' + (characterSelecter ? 'is-active': '')} onClick={characterSelecterClicked}>
                        Hello
                    </div>

                    <CharacterModal toggle={characterSelecter} close={characterSelecterClicked}></CharacterModal>

                    

            </div>
        </div>
    )
}
 
export default Testing;
