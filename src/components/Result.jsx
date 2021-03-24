import React from 'react'
import Result from './Res'
function Results(props) {
    return (
        <section className='results'>
            {props.results.map(res=> {
                console.log(res)
                return <Result openPopup={props.openPopup} key={res.imdbID}  result={res}/>
            } )}
        </section>
    )
}

export default Results
