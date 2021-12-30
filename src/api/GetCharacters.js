import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'


const GetCharacters = () => {

    const [characterData, setcharacterData] = useState([]);
    const [characterArray, setcharacterArray] = useState([]);

    const [Loading,setLoading] = useState(false)

    let controller = new AbortController();

    const getCharacterArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/characters`,{
            signal: controller.signal
          })
        const data = await response.json()

       
        setcharacterArray(data)
        
    }


    


    const getAllCharacters = async ()=> {

        if (characterArray.length === 0) {
            console.log("No characters!")
            return
        }


        let tempData = []
        console.log("Fetching!")
        setLoading(true)

        for (let index = 0; index < characterArray.length; index++) {
            const response = await fetch(`https://api.genshin.dev/characters/${characterArray[index]}`,{
                signal: controller.signal
              })
            const data = await response.json()
            data.frameImage = `https://api.genshin.dev/characters/${characterArray[index]}/icon`
            data.uniqueKey = index + 2
            tempData.push(data)
            
        }

        setLoading(false)
        setcharacterData(tempData)

        sessionStorage.setItem("characterData", JSON.stringify(tempData));
        
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
            { Loading && <h3>Loading...</h3>}
            {
                characterData.map( character =>(
                    <div className="column is-1" key={character.uniqueKey}>
                        <Itemframe {...character}></Itemframe>
                    </div>
                ))
            }
        </>
     );

    


}
 
export default GetCharacters;