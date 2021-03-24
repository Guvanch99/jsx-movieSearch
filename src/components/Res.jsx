import React from 'react'

function Result({result,openPopup}) {
    return (
        <div onClick={()=>openPopup(result.imdbID)} className='result'>
            <img src={result.Poster}/>
             <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
