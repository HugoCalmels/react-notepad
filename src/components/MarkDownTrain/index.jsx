import showdown from "showdown";

import { useState, useEffect } from 'react'

const MarkDownTrain = () => {

  const [test, setTest] = useState('')


  useEffect(() => {

    var conv = new showdown.Converter();
    var txt = document.getElementById('content').innerHTML;
    console.log(txt);
    document.getElementById('content').innerHTML = conv.makeHtml(txt);

  },[])

console.log(test)


  return (
    <div id="content">
      ## Welcome

      Hello.  Welcome to my **website**.
    </div>
  )
}

export default MarkDownTrain