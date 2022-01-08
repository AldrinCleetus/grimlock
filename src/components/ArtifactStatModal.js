import Itemframe from "./Itemframe";

const ArtifactStats = {
    sands:[
        {
            name: "HP%",
            uniqueKey: 0,
            frameImage: "images/timepiece.png",
            rarity: 5

        },
        {
            name: "ATK%",
            uniqueKey: 1,
            frameImage: "images/timepiece.png",
            rarity:5

        },
        {
            name: "DEF%",
            uniqueKey: 3,
            frameImage: "images/timepiece.png",
            rarity:5

        },
        {
            name: "ER%",
            uniqueKey: 4,
            frameImage: "images/timepiece.png",
            rarity:5

        },
        {
            name: "EM",
            uniqueKey: 5,
            frameImage: "images/timepiece.png",
            rarity:5

        },
    ],
    goblet:[
        {
            name: "HP%",
            uniqueKey: 6,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "ATK%",
            uniqueKey: 7,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "DEF%",
            uniqueKey: 8,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "PYRO %",
            uniqueKey: 9,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "ELECTRO %",
            uniqueKey: 10,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "CRYO %",
            uniqueKey: 11,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "HYDRO %",
            uniqueKey: 12,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "ANEMO %",
            uniqueKey: 13,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "GEO %",
            uniqueKey: 14,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "PHYSICAL %",
            uniqueKey: 15,
            frameImage: "images/goblet.png",
            rarity:5

        },
        {
            name: "EM",
            uniqueKey: 16,
            frameImage: "images/goblet.png",
            rarity:5

        },
    ],
    circlet:[{
        name: "HP%",
        uniqueKey: 17,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "ATK%",
        uniqueKey: 18,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "DEF%",
        uniqueKey: 19,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "CRIT RATE%",
        uniqueKey: 20,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "CRIT DMG%",
        uniqueKey: 21,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "HEALING%",
        uniqueKey: 22,
        frameImage: "images/circlet.png",
        rarity:5
    },
    {
        name: "EM",
        uniqueKey: 23,
        frameImage: "images/circlet.png",
        rarity:5
    },]
}




const ArtifactStatModal = ({toggle,close,type}) => {
    return ( 
        <>
        <div className={' modal ' + (toggle ? 'is-active': '')} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="columns m-3 is-centered is-multiline " >
                    {
                        ArtifactStats[type].map( artifactStat =>(
                            <div className="column is-1" key={artifactStat.uniqueKey} onClick={close}>
                                <Itemframe {...artifactStat}></Itemframe>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
        
        </>
     )
}
 
export default ArtifactStatModal;