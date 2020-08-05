import React,{Component} from 'react';
import './App.css';
import SearchBox from './search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './cardlist';
import Choose from './switch'
import Axios from 'axios';
import PaginationBasic from './pagenation';

class App extends Component {

  constructor(){
    super();
    this.state={
        input:'',
        data:[],
        info:"Anime",
        postPerPage:10,
        currentPage:1
    }
  }
  searchChange=(e)=>{
    this.setState({input: e.target.value})
  }
  searchClick=()=>{
    Axios.get(`https://api.jikan.moe/v3/search/${this.state.info.toLowerCase()}?q=${this.state.input}&page=1`)
          .then(el => 
            this.setState({
              data: el.data.results,
              currentPage:1
            }))
    

  }
  chooseSearch=(e)=>{
    this.setState({info:e.target.innerHTML})
  }
  filterPost=()=>{
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    
    let postperPage= []
    postperPage = this.state.data.slice(indexOfFirstPost, indexOfLastPost);
    return postperPage;
  }
  switchPage=(e)=>{
    this.setState({currentPage:e.target.innerHTML})
  }
  render(){
    return(
      <div className="content">
      <h1 className="mx-auto mt-5">Manganime</h1>
        <div className="searchBox">
          <SearchBox info={this.state.info} change={this.searchChange} click={this.searchClick} />
          <Choose clicked={this.chooseSearch} />
        </div>
        <CardList info={this.state.info}data = {this.filterPost()}/>
        <PaginationBasic 
          postPerPage={this.state.postPerPage}
          totalPost={this.state.data.length}
          paginate={this.switchPage}
          page={this.state.currentPage}
        />
      </div>
    )
  }
}

export default App;
