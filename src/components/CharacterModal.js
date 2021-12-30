import GetCharacters from "../api/GetCharacters";


const CharacterModal = ({toggle,close}) => {
    return ( 
        <div className={'has-background-black modal' + (toggle ? 'is-active': '')} >
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <div className="columns m-3 is-centered is-multiline " >
                                <GetCharacters></GetCharacters>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={close}></button>
                    </div>
     );
}
 
export default CharacterModal;