import { useState, useEffect } from 'react/cjs/react.development'
import Itemframe from './components/Itemframe'
import useFetch from './useFetch'

const Testing = () => {
    
    // const test  = {
    //     frameImage: "https://api.genshin.dev/characters/bennett/icon", 
    //     name : "bennet"
    // }


    const [characterData, setcharacterData] = useState([]);
    const [characterArray, setcharacterArray] = useState([]);

    const [Loading,setLoading] = useState(true)

    console.log("initial value")
    console.log(characterData)


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

        console.log(tempData)
        setLoading(false)
        setcharacterData(tempData)
        
    }



    useEffect(() => {
        getCharacterArray()
    }, []);

    useEffect(() => {
        getAllCharacters()
    }, [characterArray]);


    console.log(characterData)
   
    
    
    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>

                    <div className="columns mt-3 is-centered is-multiline">
                        {/* <div className="column is-1">
                            <Itemframe {...test}></Itemframe>
                        </div> */}

                        

                        { Loading && <h3>Loading...</h3>}
                       

                        {
                            characterData.map( character =>(
                                <div className="column is-1" key={character.uniqueKey}>
                                    <Itemframe {...character}></Itemframe>
                                </div>
                            ))
                        }

                    </div>
            </div>
        </div>
    )
}
 
export default Testing;
