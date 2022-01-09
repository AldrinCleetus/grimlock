import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'
import ProgressBar from '../components/ProgressBar';


const GetArtifacts = ({close}) => {

    const [artifacts, setArtifacts] = useState([]);
    const [artifactDetails, setArtifactDetails] = useState([]);

    const [Loading,setLoading] = useState(false)

    let controller = new AbortController();

    const getArtifactArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/artifacts`,{
            signal: controller.signal
          })
        const data = await response.json()

       
        setArtifacts(data)
        
    }


    


    const getArtifactDetails = async ()=> {

        if (artifacts.length === 0) {
            return
        }

        console.log("Fetching!")
        setLoading(true)

        const res = await Promise.all(artifacts.map(u => fetch(`https://api.genshin.dev/artifacts/${u}`,{signal: controller.signal})))
        const jsons = await Promise.all(res.map(r => {
            
            if(!r.ok){
                return "null"
            }
            
            return r.json()
        }))


        const filteredjsons = jsons.filter(value => {
            if(value !== "null") return true
        })


        let index = 0
        const data = filteredjsons.map(e =>{
            
            let formattedName = e.name.toLowerCase()
            formattedName = formattedName.replace(/[^a-zA-Z ]/g, "-")
            formattedName = formattedName.replace(/\s+/g, '-')
            index++

            return{
                ...e,
                frameImage : `https://api.genshin.dev/artifacts/${formattedName}/flower-of-life`,
                uniqueKey : index,
                rarity : e.max_rarity

            }
        })

        const finalData = data.filter(value => {
            if(value !== "null") return true
        })


        setLoading(false)
        setArtifactDetails(finalData)

        sessionStorage.setItem("artifactDetails", JSON.stringify(finalData));
        
    }



    useEffect(() => {
        getArtifactArray().catch(err =>{
            console.log(err)
        })

        return ()=>{
            //cleanup
            controller.abort()
        }
    }, []);

    useEffect(() => {

        if(sessionStorage.getItem("artifactDetails") === null)
        {
            getArtifactDetails().catch(err =>{
                console.log(err)
            })
        }else{
            setArtifactDetails(JSON.parse(sessionStorage.getItem("artifactDetails")))
        }


        return ()=>{
            //cleanup
            controller.abort()
        }
    }, [artifacts]);



    return ( 
        <>
            { Loading && <ProgressBar></ProgressBar> }
            {
                artifactDetails.map( artifact =>(
                    <div className="column is-1" key={artifact.uniqueKey} onClick={close}>
                        <Itemframe {...artifact}></Itemframe>
                    </div>
                ))
            }
        </>
     );

    


}
 
export default GetArtifacts;