import React, { Component } from "react"
import "./App.css"
import SearchBox from "../Components/search"
import "bootstrap/dist/css/bootstrap.min.css"
import CardList from "../Components/cardlist"
import Choose from "../Components/switch"
import Axios from "axios"
import PaginationBasic from "../Components/pagenation"

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      data: [],
      info: "Anime",
      postPerPage: 10,
      currentPage: 1,
      loading: false,
      error: false,
    }
  }
  searchChange = (e) => {
    this.setState({ input: e.target.value })
  }
  searchClick = () => {
    this.setState({ loading: true })
    Axios.get(
      `https://api.jikan.moe/v3/search/${this.state.info.toLowerCase()}?q=${
        this.state.input
      }&page=1`
    )
      .then((el) =>
        this.setState({
          data: el.data.results,
          currentPage: 1,
          loading: false,
        })
      )
      .catch((er) => this.setState({ error: true }))
  }
  chooseSearch = (e) => {
    this.setState({ info: e.target.innerHTML })
  }
  filterPost = () => {
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage

    let postperPage = []
    postperPage = this.state.data.slice(indexOfFirstPost, indexOfLastPost)
    return postperPage
  }
  switchPage = (e) => {
    this.setState({ currentPage: e.target.innerHTML })
  }
  render() {
    const { loading, info, data, postPerPage, currentPage, error } = this.state

    if (error) {
      return <h1 className="error mx-auto">404 Network Error :(</h1>
    }

    return (
      <div className="content">
        <h1 className="mx-auto mt-5">Manganime</h1>
        <div className="searchBox">
          <SearchBox
            info={info}
            change={this.searchChange}
            click={this.searchClick}
          />
          <Choose clicked={this.chooseSearch} />
        </div>
        <CardList loading={loading} info={info} data={this.filterPost()} />
        <PaginationBasic
          postPerPage={postPerPage}
          totalPost={data.length}
          paginate={this.switchPage}
          page={currentPage}
        />
      </div>
    )
  }
}

export default App
