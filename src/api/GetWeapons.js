import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'
import ProgressBar from '../components/ProgressBar';


const GetWeapons = ({close}) => {

    const [weapons, setWeapons] = useState([]);
    const [weaponsDetails, setWeaponsDetails] = useState([]);

    const [Loading,setLoading] = useState(false)

    let controller = new AbortController();

    const getWeaponArray = async ()=>{
        const response = await fetch(`https://api.genshin.dev/weapons`,{
            signal: controller.signal
          })
        const data = await response.json()

       
        setWeapons(data)
        
    }


    


    const getWeaponDetails = async ()=> {

        if (weapons.length === 0) {
            return
        }


        console.log("Fetching!")
        setLoading(true)

        const res = await Promise.all(weapons.map(u => fetch(`https://api.genshin.dev/weapons/${u}`,{signal: controller.signal})))
        const jsons = await Promise.all(res.map(r => r.json()))

        let index = 0
        const data = jsons.map(e =>{
            
            let formattedName = weapons[index]
            formattedName = formattedName.replace(/\s+/g, '-')
            index++

            return{
                ...e,
                frameImage : `https://api.genshin.dev/weapons/${formattedName}/icon`,
                uniqueKey : index
            }
        })

        setLoading(false)
        setWeaponsDetails(data)

        sessionStorage.setItem("weaponDetails", JSON.stringify(data));
        
    }



    useEffect(() => {
        getWeaponArray().catch(err =>{
            console.log(err)
        })

        return ()=>{
            //cleanup
            controller.abort()
        }
    }, []);

    useEffect(() => {

        if(sessionStorage.getItem("weaponDetails") === null)
        {
            getWeaponDetails().catch(err =>{
                console.log(err)
            })
        }else{
            setWeaponsDetails(JSON.parse(sessionStorage.getItem("weaponDetails")))
        }

        console.log("rendering")

        return ()=>{
            //cleanup
            controller.abort()
        }
    }, [weapons]);



    return ( 
        <>
            { Loading && <ProgressBar></ProgressBar> }
            {
                weaponsDetails.map( weapon =>(
                    <div className="column is-1" key={weapon.uniqueKey} onClick={close}>
                        <Itemframe {...weapon}></Itemframe>
                    </div>
                ))
            }
        </>
     );

    


}
 
export default GetWeapons;