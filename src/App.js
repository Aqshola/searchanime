import React,{Component} from 'react';
import './App.css';
import SearchBox from './search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardCom from './card';

class App extends Component {

  constructor(){
    super();
    this.state={
        input:'',
        data:'',
            
    }
  }
  searchChange=(e)=>{
    this.setState({input: e.target.value})
  }
  searchClick=()=>{
    fetch(`https://api.jikan.moe/v3/search/anime?q=${this.state.input}&page=1`).then(res => res.json())
      .then(el => 
        this.setState({
          data: el.results[1]
        }))
    console.log(this.state.data)
  }
  render(){
    return(
      <div className="content">
        <div className="searchBox">
          <SearchBox change={this.searchChange} click={this.searchClick} />
        </div>
        <div>
          <CardCom data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
