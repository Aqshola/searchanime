import React,{Component} from 'react';
import './App.css';
import SearchBox from './search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './cardlist';
import Choose from './switch'
import Axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state={
        input:'',
        data:[],
        info:"Anime"
    }
  }
  searchChange=(e)=>{
    this.setState({input: e.target.value})
  }
  searchClick=()=>{
    // fetch(`https://api.jikan.moe/v3/search/${this.state.info.toLowerCase()}?q=${this.state.input}&page=1`).then(res => res.json())
    //   .then(el => 
    //     this.setState({
    //       data: el.results
    //     }))

    Axios.get(`https://api.jikan.moe/v3/search/${this.state.info.toLowerCase()}?q=${this.state.input}&page=1`)
          .then(el => 
            this.setState({
              data: el.data.results
            }))
  }
  chooseSearch=(e)=>{
    this.setState({info:e.target.innerHTML})
  }
  render(){
    return(
      <div className="content">
      <h1 className="mx-auto mt-5">Manganime</h1>
        <div className="searchBox">
          <SearchBox info={this.state.info} change={this.searchChange} click={this.searchClick} />
          <Choose clicked={this.chooseSearch} />
        </div>
        <CardList info={this.state.info}data = {this.state.data}/>
      </div>
    )
  }
}

export default App;
