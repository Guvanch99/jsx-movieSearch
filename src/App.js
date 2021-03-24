import React,{useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Results from './components/Result';
import Popup from './components/Popup';

function App() {
  const url='http://www.omdbapi.com/?i=tt3896198&apikey=5e6393e9';
  const [state, setstate] = useState({
    s:'',
    results:[],
    selected:{}
  })
  const search=(e)=>{
    if(e.key==="Enter"){
      axios(url+"&s="+state.s).then(({data})=>{
     let results=data.Search;
     setstate(prevState=>{
       return {...prevState,results:results}
     })
      })
    }
  }
  const handleInput=(e)=>{
    let s=e.target.value;
    setstate(prevState=>{
      return {...prevState,s:s}
    })
  }
  const openPopup=id=>{
    axios(url+'&i='+id).then(({data})=>{
      let result=data;
      setstate(prevState=>{
        return {...prevState,selected:result}
      })
    })
  }
  const closePopup=()=>{
    setstate(prevState=>{
      return {...prevState,selected:{}}
    })
  }
  return (
    <div>
      <header>
        <h1>Movie</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        {(typeof state.selected.Title != 'undefined')?<Popup selected={state.selected} closePopup={closePopup}/>:false}
        <Results openPopup={openPopup} results={state.results}/>
      </main>
    </div>
  );
}

export default App;
