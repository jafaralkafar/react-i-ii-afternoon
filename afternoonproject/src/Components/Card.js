import React from 'react'

export default function Card(props) {
    
    let movieList=() => {
        let movieArray = []
        for (let i=0; i<props.people[props.count].favoriteMovies.length; i++) {
            movieArray.push(<li key={i} className='ilist'>{props.people[props.count].favoriteMovies[i]}</li>)
        }
        return movieArray
    }
    

    return (
        <div className="card">
            <h2 className='inumber'>{`${props.count+1}/${props.people.length}`}</h2>
            <h2 className='iname'>
            {`${props.people[props.count].name.first} ${props.people[props.count].name.last}`}</h2>
            <p className='iinfo'><b>From: {`${props.people[props.count].city}, ${props.people[props.count].country}`}</b> </p>
            <p className='iinfo'><b>Job Title: {props.people[props.count].title}</b> </p>
            <p className='iinfo'><b>Employer: {props.people[props.count].employer}</b> </p>
            <br className='iinfo' />
            <p className='iinfo'><b>Favorite Movies:</b></p>
            <ol className='iinfo'>
                {movieList()}
            </ol>
        </div>
    )
}