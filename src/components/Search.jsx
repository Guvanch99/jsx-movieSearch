import React from 'react'

function Search({handleInput,search}) {
    return (
        <section className='searchbox-wrap'>
            <input onKeyPress={search} onChange={handleInput} type='text' placeholder='Search for movie...' className='searchbox'/>
        </section>
    )
}

export default Search
