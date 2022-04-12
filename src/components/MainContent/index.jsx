import { useEffect, useState } from 'react'
import TopContent from '../TopContent'
import BottomContent from '../BottomContent'

const MainContent = (props) => {

  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteTextarea, setNewNoteTextarea] = useState('')
  

  const [notesArray, setNotesArray] = useState([])





  const saveNewNote = () => {
    console.log('hi??')
    console.log(props.newNoteTitle)
    props.setNewNoteTitle('')
    props.setNewNoteTextarea('')
    document.querySelector('#form').reset()
    props.setNewNote({title: props.newNoteTitle, textarea: props.newNoteTextarea})

  }

  useEffect(() => {
    let oldNotes = JSON.parse(localStorage.getItem('notes'))

    // je fais quoi pour la currently opened note ? comment je la recupere pour la pousser.
    // je veux juste la recup et la changer

    if (props.newNote.title !== '' && props.newNote.title !== undefined) {
      if (oldNotes !== null) {

        if (props.savingAnOldNote === false) {
          let array = [];
          oldNotes.forEach((note) => {
            array.push(note)
          })
          array.push(props.newNote)
          localStorage.setItem("notes", JSON.stringify(array))
        
        } else if (props.savingAnOldNote === true) {
          
          oldNotes[props.currentNoteIndex] = props.newNote
          let array = [];
          localStorage.setItem("notes", JSON.stringify(oldNotes))
          props.setSavingAnOldNote(false)
        }
        

        
      } else {
        localStorage.setItem("notes", JSON.stringify([props.newNote]))
      }
    } 

    props.setLastNotesArray(JSON.parse(localStorage.getItem("notes")))
   
  },[props.newNote])



  useEffect(() => {

   console.log('hello?')
    
  }, [props.newNoteTitle, props.newNoteTextarea])



 

  return (
    <div className="main-content">
      <TopContent
        newNoteTitle={props.newNoteTitle}
        newNoteTextarea={props.newNoteTextarea}
      />
      <BottomContent
        newNoteTitle={props.newNoteTitle}
        newNoteTextarea={props.newNoteTextarea}
        setNewNoteTitle={props.setNewNoteTitle}
        setNewNoteTextarea={props.setNewNoteTextarea}
        saveNewNote={saveNewNote}
      />

    </div>
  )
}

export default MainContent