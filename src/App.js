import React,{Component} from 'react';
import './App.css';
import SearchBox from './search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './cardlist';

class App extends Component {

  constructor(){
    super();
    this.state={
        input:'',
        data:[],
    }
  }
  searchChange=(e)=>{
    this.setState({input: e.target.value})
  }
  searchClick=()=>{
    fetch(`https://api.jikan.moe/v3/search/anime?q=${this.state.input}&page=1`).then(res => res.json())
      .then(el => 
        this.setState({
          data: el.results
        }))
  }
  render(){
    return(
      <div className="content">
      <h1 className="mx-auto mt-5">Manganime</h1>
        <div className="searchBox">
          <SearchBox change={this.searchChange} click={this.searchClick} />
        </div>
        <CardList data = {this.state.data}/>
      </div>
    )
  }
}

export default App;
