import {useState, useEffect} from 'react';


const Itemframe = ({frameImage,name,rarity}) => {

    const [isRarity] = useState(rarity)
    const [backgroundColor,setBackgroundColor] =  useState("grey") 

    const [isSelected,setIsSelected] = useState(false)

    const userSelected = ()=>{
        console.log(name)
        setIsSelected(true)
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