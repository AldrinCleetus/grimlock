import { useState } from 'react';
import GetCharacters from './api/GetCharacters'


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

                    <div className={'has-background-black modal' + (characterSelecter ? 'is-active': '')} >
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <div className="columns m-3 is-centered is-multiline " >
                                <GetCharacters></GetCharacters>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={characterSelecterClicked}></button>
                    </div>

            </div>
        </div>
    )
}
 
export default Testing;
