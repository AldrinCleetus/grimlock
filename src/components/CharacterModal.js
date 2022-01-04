import GetCharacters from "../api/GetCharacters";


const CharacterModal = ({toggle,close}) => {
    return ( 
        <div className={'modal ' + (toggle ? 'is-active': '')} >
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <div className="columns m-0 is-centered is-multiline " >
                                <GetCharacters close={close}></GetCharacters>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={close}></button>
                    </div>
     );
}
 
export default CharacterModal;