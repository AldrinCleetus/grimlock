import { useState, useEffect } from 'react/cjs/react.development'
import Itemframe from './components/Itemframe'
import useFetch from './useFetch'

const Testing = () => {
    
    const test  = {
        frameImage: "https://api.genshin.dev/characters/bennett/icon", 
        name : "bennet"
    }

    // console.log("reseting")
    // const [allCharacters,setallCharacters] = useState([]);

    // const temp = []

    // const { data } = useFetch('https://api.genshin.dev/characters')

    

    //const [characterData, setcharacterData] = useState(null);

    // useEffect(()=>{


    //     if (data === null) return


    //     console.log("Fetching ", data.length, " Items")

    //     for (let index = 0; index < data.length; index++) {


    //         console.log("fecting ", `https://api.genshin.dev/characters/${data[index]}`)

    //         fetch(`https://api.genshin.dev/characters/${data[index]}`)
    //             .then(res =>{
    //                 if(!res.ok){ 
    //                     throw Error("Couldnt Fetch")
    //                 }
    //                 return res.json()
    //                     .then( info =>{
                        
    //                     info.uniqueKey = index
    //                     info.frameImage = `https://api.genshin.dev/characters/${data[index]}/icon`
                        

    //                     //setallCharacters([...allCharacters,info])


    //                     temp.push(info)
    //                 }).catch(err => {
    //                     return
    //                 })
    //         })}

            
        

    //     setallCharacters(temp)
        
    //     console.log(temp)
            
        
    // },[data])

  
    

    const [characterData, setcharacterData] = useState([]);
    const [characters, setcharacters] = useState([]);

   


    useEffect(()=>{
        console.log("Fetching all the characters")
        fetch("https://api.genshin.dev/characters")
            .then(res =>{
                if (!res.ok){
                    throw Error("Crap something went wrong")
                }
    
                return res.json()
                    .then(info =>{
                        setcharacters(info)
                    })
            })


        console.log("Fetching their details")
        console.log(characters)

        characters.map(character =>{
            //console.log("Fetching: ",character)
            
            fetch(`https://api.genshin.dev/characters/${character}`)
                .then(res =>{
                    if(!res.ok){
                        throw Error("Couldnt fetch data")
                    }

                    //BUGSSSSSSSSSSSSSSSSSSSS 
                    return res.json()
                        .then( info =>{
                            setcharacterData([...characterData,info])
                            console.log(characterData)
                        })
                })

        })

        console.log("Finished Fetching data")
        console.log(characterData)




        
    },[])


    

    
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

                        {/* {
                            allCharacters.map( character =>(
                                <div className="column is-1" key={character.uniqueKey}>
                                    <Itemframe {...character}></Itemframe>
                                </div>
                            ))
                        } */}


                       

                      

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
