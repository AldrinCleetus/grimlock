import Itemframe from "./Itemframe";

const ArtifactStats = {
    sands:[
        {
            name: "HP%",
            uniqueKey: 0,
            frameImage: "images/timepiece.png"

        },
        {
            name: "ATK%",
            uniqueKey: 1,
            frameImage: "images/timepiece.png"

        },
        {
            name: "DEF%",
            uniqueKey: 3,
            frameImage: "images/timepiece.png"

        },
        {
            name: "ER%",
            uniqueKey: 4,
            frameImage: "images/timepiece.png"

        },
        {
            name: "EM",
            uniqueKey: 5,
            frameImage: "images/timepiece.png"

        },
    ],
    goblet:[
        {
            name: "HP%",
            uniqueKey: 6,
            frameImage: "images/goblet.png"

        },
        {
            name: "ATK%",
            uniqueKey: 7,
            frameImage: "images/goblet.png"

        },
        {
            name: "DEF%",
            uniqueKey: 8,
            frameImage: "images/goblet.png"

        },
        {
            name: "PYRO %",
            uniqueKey: 9,
            frameImage: "images/goblet.png"

        },
        {
            name: "ELECTRO %",
            uniqueKey: 10,
            frameImage: "images/goblet.png"

        },
        {
            name: "CRYO %",
            uniqueKey: 11,
            frameImage: "images/goblet.png"

        },
        {
            name: "HYDRO %",
            uniqueKey: 12,
            frameImage: "images/goblet.png"

        },
        {
            name: "ANEMO %",
            uniqueKey: 13,
            frameImage: "images/goblet.png"

        },
        {
            name: "GEO %",
            uniqueKey: 14,
            frameImage: "images/goblet.png"

        },
        {
            name: "PHYSICAL %",
            uniqueKey: 15,
            frameImage: "images/goblet.png"

        },
        {
            name: "EM",
            uniqueKey: 16,
            frameImage: "images/goblet.png"

        },
    ],
    circlet:[{
        name: "HP%",
        uniqueKey: 17,
        frameImage: "images/circlet.png"
    },
    {
        name: "ATK%",
        uniqueKey: 18,
        frameImage: "images/circlet.png"
    },
    {
        name: "DEF%",
        uniqueKey: 19,
        frameImage: "images/circlet.png"
    },
    {
        name: "CRIT RATE%",
        uniqueKey: 20,
        frameImage: "images/circlet.png"
    },
    {
        name: "CRIT DMG%",
        uniqueKey: 21,
        frameImage: "images/circlet.png"
    },
    {
        name: "HEALING%",
        uniqueKey: 22,
        frameImage: "images/circlet.png"
    },
    {
        name: "EM",
        uniqueKey: 23,
        frameImage: "images/circlet.png"
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