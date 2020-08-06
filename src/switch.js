import  React,{Component}  from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'




class Choose extends Component{
    constructor(){
        super()
        this.state={
            btn1:"active",
            btn2:""
        }
    }
    secondbtn=()=>{
        this.setState({btn1:null,btn2:"active"})
    }
    firstbtn=()=>{
        this.setState({btn1:"active",btn2:""})
    }
    
    render(){
        return (
        <ButtonGroup aria-label="Basic example" className="choose-grp">
            <Button 
                onClick={(e)=>{
                    this.firstbtn()
                    this.props.clicked(e)
                    }
                }
                variant="secondary"
                className= {this.state.btn1}
            >Anime</Button>
            <Button
                onClick={(e)=>{
                    this.secondbtn()
                    this.props.clicked(e)
                    }}
                className={this.state.btn2}
                variant="secondary">Manga</Button>
        </ButtonGroup>
        );
    }
}

export default Choose