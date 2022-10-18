import React from 'react'
import { useCallback, useState, useEffect } from 'react';
// import Dropzone from 'react-dropzone';
import axios from 'axios'

function Workspace() {

    const [selectedFile, setSelectedFile]= useState(null)
    const [loaded, setLoaded]= useState(0)

    useEffect(()=> {
      console.log(selectedFile)
    }, [selectedFile])

    const onChangeHandler=event=>{
      setSelectedFile(event.target.files[0])
      setLoaded(0)
    }

    const onClickHandler = () => {
      const data = new FormData() 
      data.append('file', selectedFile)
      axios.post("http://localhost:8000/upload", data, { 
      // receive two    parameter endpoint url ,form data
      })
      .then(res => { // then print response status
      console.log(res.statusText)
    })
    }
  

  return (
    <div className='workspace'>
        <button className='previous-btn'>[</button>
          <div>
          <input type="file" name="file" onChange={onChangeHandler}/>
          <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
          </div>

        <button className='next-btn'>]</button>
    </div>
  )
}

export default Workspace
