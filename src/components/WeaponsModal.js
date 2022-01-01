import GetWeapons from "../api/GetWeapons";




const WeaponsModal = ({toggle,close}) => {
    return ( 
        <div className={'has-background-black modal ' + (toggle ? 'is-active': '')} >
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <div className="columns m-3 is-centered is-multiline " >
                                <GetWeapons close={close}></GetWeapons>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={close}></button>
                    </div>
     );
}
 
export default WeaponsModal;