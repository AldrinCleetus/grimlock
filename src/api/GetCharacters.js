import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'


const GetCharacters = () => {

    const [characterData, setcharacterData] = useState([]);
    const [characterArray, setcharacterArray] = useState([]);

    const [Loading,setLoading] = useState(true)


    const getCharacterArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/characters`)
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

        for (let index = 0; index < characterArray.length; index++) {
            const response = await fetch(`https://api.genshin.dev/characters/${characterArray[index]}`)
            const data = await response.json()
            data.frameImage = `https://api.genshin.dev/characters/${characterArray[index]}/icon`
            data.uniqueKey = index + 2
            tempData.push(data)
            
        }

        setLoading(false)
        setcharacterData(tempData)
        
    }



    useEffect(() => {
        getCharacterArray()
    }, []);

    useEffect(() => {
        getAllCharacters()
        console.log("rendering")
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