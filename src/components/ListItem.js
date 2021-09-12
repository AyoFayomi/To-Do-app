import React from 'react'
import { Link } from 'react-router-dom';

let getTitle = (note) => {
    //split up by new lines and get only the first line
    //split will nmake a new list of each line and will only pull on the first line by index zero
    const title = note.body.split('\n')[0]
    if ( title.length > 35) {
        return title.slice(0, 45)
    }
    return title
}

let getContent = (note) => {
    //get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 35){
        return content.slice(0, 45) + '...'
    }else {
        return content
    }
}

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span> {getContent(note)} </p>
            </div>
        </Link>
    )
        
}

export default ListItem;