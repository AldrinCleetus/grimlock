import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'
import ProgressBar from '../components/ProgressBar';


const GetCharacters = ({close}) => {

    const [characterData, setcharacterData] = useState([]);
    const [characterArray, setcharacterArray] = useState([]);

    const [Loading,setLoading] = useState(false)

    let controller = new AbortController();


    // Getting all the character names
    const getCharacterArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/characters`,{
            signal: controller.signal
          })
        const data = await response.json()

        
        setcharacterArray(data)
        console.log(characterArray)
        
    }


    
    // Getting all the character details

    const getAllCharacters = async ()=> {



        if (characterArray.length === 0) {
            return
        }
        
        console.log("Fetching!")


        setLoading(true)

        
        const res = await Promise.all(characterArray.map(u => fetch(`https://api.genshin.dev/characters/${u}`,{signal: controller.signal})))
        const jsons = await Promise.all(res.map(r => r.json()))

        let index = 0
        const data = jsons.map(e =>{
            
            let formattedName = characterArray[index]
            formattedName = formattedName.replace(/\s+/g, '-')
            index++

            return{
                ...e,
                frameImage : `https://api.genshin.dev/characters/${formattedName}/icon`,
                gacha : `https://api.genshin.dev/characters/${formattedName}/gacha-splash`,
                uniqueKey : index

            }
        })

        setLoading(false)
        setcharacterData(data)

        sessionStorage.setItem("characterData", JSON.stringify(data));
        
    }



    useEffect(() => {
        getCharacterArray().catch(err =>{
            console.log(err)
        })

        return ()=>{
            //cleanup
            controller.abort()
        }
    }, []);

    useEffect(() => {

        if(sessionStorage.getItem("characterData") === null)
        {
            getAllCharacters().catch(err =>{
                console.log(err)
            })
        }else{
            setcharacterData(JSON.parse(sessionStorage.getItem("characterData")))
        }

        console.log("rendering")

        return ()=>{
            //cleanup
            console.log("aborting!")
            controller.abort()
        }
    }, [characterArray]);



    return ( 
        <>
            { Loading && <ProgressBar></ProgressBar> }
            {
                characterData.map( character =>(
                    <div className="column is-1" key={character.uniqueKey} onClick={close}>
                        <Itemframe {...character}></Itemframe>
                    </div>
                ))
            }
        </>
     );

    


}
 
export default GetCharacters;