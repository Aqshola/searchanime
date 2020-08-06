import React, { Component } from "react"
import { Button } from "react-bootstrap"
import Modals from "./modals"

class CardCom extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      dataDetail: "",
      loading: false,
    }
  }

  showModal = () => {
    this.setState({ show: true, loading: true })
    fetch(
      `https://api.jikan.moe/v3/${this.props.info.toLowerCase()}/${
        this.props.data.mal_id
      }`
    )
      .then((res) => res.json())
      .then((el) => {
        this.setState({ dataDetail: el, loading: false })
      })
  }
  closeModal = () => {
    this.setState({ show: false })
  }

  render() {
    const { image_url, title, type } = this.props.data
    const { show, dataDetail, loading } = this.state

    return (
      <div className="cardplace">
        <div className="card-img">
          <img src={image_url} alt="img" />
        </div>
        <div className="card-desc">
          <div className="card-title">
            <h6>{title}</h6>
          </div>
          <div className="card-text">
            <p>
              <b>{type}</b>
            </p>
          </div>
          <div div className="card-btn">
            <Button variant="primary" onClick={this.showModal}>
              Detail
            </Button>
          </div>

          <Modals
            loading={loading}
            show={show}
            hide={this.closeModal}
            data={dataDetail}
          />
        </div>
      </div>
    )
  }
}

export default CardCom
