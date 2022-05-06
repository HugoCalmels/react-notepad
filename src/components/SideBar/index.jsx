import { useEffect} from 'react'

const SideBar = (props) => {



  let notes

  useEffect(() => {
    notes = JSON.parse(localStorage.getItem('notes'));
    console.log('////////////')
    console.log('1st init ')
    console.log(notes)
    console.log('////////////')

  }, [])

  

  useEffect(() => {
    console.log('---------')
    let notes = JSON.parse(localStorage.getItem('notes'));
    console.log(notes)
    console.log('---------')
    cutArray(notes)
  }, [props.lastNotesArray])

 



  



  /*
   {notes !== null ? notes.map((note) => (
        <div className="side-bar-note">
        <h3>{note.title}</h3>
        <p>{note.textarea}</p>
        </div>
      )) : ""}
  */

  return (
    <div className="side-bar">
      <button onClick={props.addBrandNewNote}>Ajouter une note</button>
      {props.lastNotesArray !== null ? props.lastNotesArray.map((note, index) => (
        <div className="side-bar-note" id={index}
          onClick={(e) =>props.displaySelectedNote(e)}
        >
        <h3 id={index}>{note.title}</h3>
        <p className="side-bar-content" id={index}>{note.textarea}</p>
        </div>
      )) : ""}
    </div>
  )
}


function cutArray(array) {
  if (array !== null) {
    array.forEach((note) => {
      let contentLength = note.textarea.split('').length
      console.log(contentLength)
    })
  }
}


export default SideBar 