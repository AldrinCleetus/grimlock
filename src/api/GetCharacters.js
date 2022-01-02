import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'


const GetCharacters = ({close}) => {

    const [characterData, setcharacterData] = useState([]);
    const [characterArray, setcharacterArray] = useState([]);

    const [Loading,setLoading] = useState(false)
    const [loadingValue,setLoadingValue] = useState(0)
    const [loadingMaxValue,setLoadingMaxValue] = useState(100)


    let controller = new AbortController();

    const getCharacterArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/characters`,{
            signal: controller.signal
          })
        const data = await response.json()

        
        setcharacterArray(data)
        console.log(characterArray)
        
        
    }


    


    const getAllCharacters = async ()=> {



        if (characterArray.length === 0) {
            console.log("No characters!")
            return
        }
        console.log(characterArray.length)
        setLoadingMaxValue(characterArray.length)

        
        


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
            setLoadingValue(prevState =>{
                return prevState + 1
            })
            
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
            { Loading && 
            <div className='column '>
                <div>
                <img src="../images/256.png" alt="404" />
                </div>

                <progress class="progress is-link " value={loadingValue} max={loadingMaxValue}>90%</progress>
            </div> }
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