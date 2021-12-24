import { useState, useEffect } from 'react/cjs/react.development'
import Itemframe from './components/Itemframe'
import useFetch from './useFetch'

const Testing = () => {
    
    const test  = {
        frameImage: "https://api.genshin.dev/characters/bennett/icon", 
        name : "bennet"
    }


    const [characterData, setcharacterData] = useState([]);
    const [characters, setcharacters] = useState([]);

    console.log("initial value")
    console.log(characterData)


    const characterArray = [
        "albedo",
        "aloy",
        "amber",
        "arataki-itto",
        "ayaka",
        "barbara",
        "beidou",
        "bennett",
        "chongyun",
        "diluc",
        "diona",
        "eula",
        "fischl",
        "ganyu",
        "hu-tao",
        "jean",
        "kaeya",
        "kazuha",
        "keqing",
        "klee",
        "kokomi",
        "lisa",
        "mona",
        "ningguang",
        "noelle",
        "qiqi",
        "raiden",
        "razor",
        "rosaria",
        "sara",
        "sayu",
        "sucrose",
        "tartaglia",
        "thoma",
        "traveler-anemo",
        "traveler-electro",
        "traveler-geo",
        "venti",
        "xiangling",
        "xiao",
        "xingqiu",
        "xinyan",
        "yanfei",
        "yoimiya",
        "zhongli"
      ]


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
            //setcharacterData([...characterData,data])
            // setcharacterData( hmmm =>{
            //     return [...hmmm,data]
            // })
            data.frameImage = `https://api.genshin.dev/characters/${characterArray[index]}/icon`
            data.uniqueKey = index + 2
            tempData.push(data)
            
        }

        console.log(tempData)

        setcharacterData(tempData)
        
    }





    useEffect(() => {
        getAllCharacters()
    }, []);


    console.log(characterData)
   
    
    
    return(
        <div className="column max-height has-background-primary has-text-info">
            <div className=" is-fullwidth has-text-centered is-size-1 ">
                    <div>
                    <h1 className="">Characters!</h1>
                    </div>

                    <div className="columns mt-3 is-centered is-multiline">
                        <div className="column is-1">
                            <Itemframe {...test}></Itemframe>
                        </div>

                        

                        {/* {
                            Object.values(allCharacters).map( character =>(
                                <div className="column is-1" key={character.uniqueKey}>
                                    <Itemframe {...character}></Itemframe>
                                </div>
                            ))
                        } */}

                        {
                            characterData.map( character =>(
                                <div className="column is-1" key={character.uniqueKey}>
                                    <Itemframe {...character}></Itemframe>
                                </div>
                            ))
                        }


                       

                      

                        {/* <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-purple">
                                <div class="card-image">
                                    <figure class="image">
                                        <img src="https://api.genshin.dev/characters/bennett/icon" alt="test" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Bennett</p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-gold">
                                <div class="card-image">
                                    <figure class="image">
                                    <img src="https://api.genshin.dev/characters/yoimiya/icon" alt="test" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Yoimia</p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-1">
                            <div class="card charactericon has-text-black characterSelector has-background-gold">
                                <div class="card-image">
                                    <figure class="image">
                                    <img src="https://api.genshin.dev/characters/tartaglia/icon" alt="404" />
                                    </figure>
                                </div>
                                <div class=" is-text-overflow has-background-link rounded-corner">
                                    <p className="is-size-7">Childe</p>
                                </div>
                            </div>
                        </div> */}

                        

                        

                        
                      

                        
                    </div>

                    

                    

                


            </div>
        </div>
    )
}
 
export default Testing;
