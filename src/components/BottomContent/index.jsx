import { useEffect } from "react"

const BottomContent = (props) => {

  useEffect(() => {
    console.log('hi?')
    console.log(props.newNoteTextarea)
  },[props.newNoteTitle, props.newNoteTextarea])


  return (
    <div className="bottom-content">
      {/* INPUT TITLE */}
      <form id="form">
      <div className="input-elem">
        <label>Titre</label>
        <input
          className="input-title"
          type='text'
          value={props.newNoteTitle}
          onChange={(e) => props.setNewNoteTitle(e.target.value)}
        />
      </div>
        {/* INPUT TEXTAREA */}
        <div className="input-elem">
      <label>Contenu</label>
      <textarea
        className="input-textarea"
        value={props.newNoteTextarea}
        onChange={(e) => props.setNewNoteTextarea(e.target.value)}
        
          />
          </div>
      </form>
      <div className="button-div">
        <button onClick={props.saveNewNote}>Sauvegarder</button>
        </div>
    </div>
  )
}


export default BottomContent