import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import Modals from './modals'


class CardCom extends Component{
    constructor(){
        super()
        this.state={
            show:false,
            dataDetail:''
        }
    }

    showModal=()=>{
        this.setState({show:true})
        fetch(`https://api.jikan.moe/v3/${this.props.info.toLowerCase()}/${this.props.data.mal_id}`)
        .then(res=>res.json())
        .then(el=>{
            this.setState({dataDetail:el})})
    }
    closeModal=()=>{
        this.setState({show:false})
        
    }

    render(){
        return (
            <div className="cardplace">
                <div className="card-img">
                    <img src={this.props.data.image_url} alt="img" />
                </div>
                <div className="card-desc">
                    <div className="card-title">
                        <h6>{this.props.data.title}</h6>
                    </div>
                    <div className="card-text">
                        <p><b>{this.props.data.type}</b></p>
                    </div>
                    <div div className = "card-btn" >
                        <Button onClick={this.showModal}>Detail</Button>
                    </div>
                    
                    <Modals show={this.state.show} hide={this.closeModal} data={this.state.dataDetail}/>
                </div>
            </div>
        );
    }
}

export default CardCom;