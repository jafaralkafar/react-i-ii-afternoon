import React, {Component} from 'react'
import Card from './Card'
import Buttons from './Buttons'
import Data from './data'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            people: Data,
        }
    }

    

    previous=()=> {
        if (this.state.count <= 0) {
            return this.setState({count:0})
        } else {
        return this.setState({count:this.state.count - 1})
        }
    }
    
    next=()=> {
        if (this.state.count > this.state.people.length ) {
            return this.setState({count:this.state.count})
        } else {
            return this.setState({count:this.state.count + 1})
        }
    }

    
    render() {
        
        // console.log(this.state.people.length)
        return (
            <div className="Home">
                <nav className="navbar">
                    Home
                </nav>
                <Card people={this.state.people} count={this.state.count}/>
                <Buttons previous={this.previous} next={this.next}/>
            </div>
        )
    }
}