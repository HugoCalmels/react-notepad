import { useEffect } from 'react'


const TopContent = (props) => {


  useEffect(() => {


  },[props.newNoteTitle])

  return (
    <div className="top-content">
      <h3 id='content-title'>{props.newNoteTitle}</h3>
      <p id="content">{props.newNoteTextarea}</p>
    </div>
  )
}


export default TopContent