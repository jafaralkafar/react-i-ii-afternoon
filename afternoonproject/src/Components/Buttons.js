import React from 'react'

export default function(props) {
    
    // let previous=()=> {
    //     (props.count = props.count - 1})
    // }
    
    // let next=()=> {
    //     props.setState({count:props.count + 1})
    // }

    return (
        
        <div className="buttons">
            <button className="prenext" onClick={props.previous}>{`< Previous`}</button>
            {/* <button></button>
            <button></button>
            <button></button> */}
            <button className="prenext" onClick={props.next}>{`Next >`}</button>
        </div>
        
    )
} 