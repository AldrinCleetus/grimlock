import { useState, useEffect } from 'react'
import Itemframe from '../components/Itemframe'


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
            console.log("No characters!")
            return
        }


        let tempData = []
        console.log("Fetching!")
        setLoading(true)

        for (let index = 0; index < weapons.length; index++) {
            const response = await fetch(`https://api.genshin.dev/weapons/${weapons[index]}`,{
                signal: controller.signal
              })
            
            if (response.status >= 200 && response.status <= 299) {
                console.log("seems good")
                const data = await response.json()

                //Checking if icon exists for the weapons if not skip em...
                const ImageExists = await fetch(`https://api.genshin.dev/weapons/${weapons[index]}/icon`,{
                    signal: controller.signal
                  })

                if(ImageExists.status === 404){
                    console.log("Image doesnt exist")
                    continue;
                }

                data.frameImage = `https://api.genshin.dev/weapons/${weapons[index]}/icon`
                data.uniqueKey = index + 2
                data.rarity = data.max_rarity
                tempData.push(data)
            }
            else if ( response.status === 404){
                console.log("Error 404")
                continue;
            }

               

            
        }

        setLoading(false)
        setWeaponsDetails(tempData)

        sessionStorage.setItem("weaponDetails", JSON.stringify(tempData));
        
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
            { Loading && <h3>Loading...</h3>}
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