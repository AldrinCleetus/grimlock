const ProgressBar = ({currValue,maxValue}) => {
    return ( 
        <div className='column '>
                <div>
                <img src="../images/256.png" alt="404" />
                </div>

                <progress class="progress is-link " value={currValue} max={maxValue}></progress>
            </div>
     );
}
 
export default ProgressBar;