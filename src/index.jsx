import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MarkDownTrain from './components/MarkDownTrain'
import SideBar from './components/SideBar';
import MainContent from './components/MainContent'
import "./style.css"
import { useState } from 'react'
import showdown from "showdown";



const App = () => {
  const [newNote, setNewNote] = useState("")
  const [lastNotesArray, setLastNotesArray] = useState([])
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteTextarea, setNewNoteTextarea] = useState('')

  const [savingAnOldNote, setSavingAnOldNote] = useState(false)
  const [currentNoteIndex, setCurrentNoteIndex] = useState('')

  const addBrandNewNote = () => {
    setNewNoteTitle('')
    setNewNoteTextarea('')
    document.querySelector('#form').reset()
    setSavingAnOldNote(false)
  }

  useEffect(() => {

  },[setSavingAnOldNote])

  const displaySelectedNote = (e) => {
  
    e.preventDefault()

    setCurrentNoteIndex(e.target.id)
    
    let res = JSON.parse(localStorage.getItem("notes"))[e.target.id]
    console.log(res)
    setNewNoteTitle(res.title)
    setNewNoteTextarea(res.textarea)
    setSavingAnOldNote(true)

  }

  useEffect(() => {
    var conv = new showdown.Converter();
    //document.getElementById('side-bar-title').innerHTML = newNoteTitle
    //document.getElementById('side-bar-content').innerHTML = conv.makeHtml(newNoteTextarea);
  
    console.log(lastNotesArray)
   
    if (lastNotesArray !== null && lastNotesArray !== undefined) {
      for (let i = 0; i < lastNotesArray.length; i++) {
        let note = document.querySelectorAll('.side-bar-note')[i]
        //note.querySelector('h3').innerHTML = note[i].title
        note.querySelector('p').innerHTML = conv.makeHtml(lastNotesArray[i].textarea)
      }
    }
  
    
  },[lastNotesArray])

  useEffect(() => {

    var conv = new showdown.Converter();
    document.getElementById('content-title').innerHTML = newNoteTitle
    document.getElementById('content').innerHTML = conv.makeHtml(newNoteTextarea);
  }, [newNoteTitle, newNoteTextarea])

  return (
    <div className="app">

      <SideBar addBrandNewNote={addBrandNewNote}newNote={newNote} lastNotesArray={lastNotesArray} displaySelectedNote={displaySelectedNote}/>
      <MainContent currentNoteIndex={currentNoteIndex} setSavingAnOldNote={setSavingAnOldNote} savingAnOldNote={savingAnOldNote} newNote={newNote} setNewNote={setNewNote} setLastNotesArray={setLastNotesArray} setNewNoteTextarea={setNewNoteTextarea} setNewNoteTitle={setNewNoteTitle} newNoteTitle={newNoteTitle} newNoteTextarea={newNoteTextarea}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));