import React from 'react'
import { useCallback, useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';

function Workspace() {

    // useEffect(()=> {
    //   console.log(files)
    // }, [files])

    const handleOnDrop= (files, rejectedFiles) => {
      console.log(files)
      console.log('test')
      console.log(rejectedFiles)

      if (files && files.length > 0){
        const currentFile= files[0]
        const currentFileType= currentFile.type

        if(currentFileType == "image/png" || currentFileType == "image/jpg" || currentFileType == "image/jpeg" ){
           alert('good file')
        }
        else{
          alert('wrong file')
        }
      }
    }

  return (
    <div className='workspace'>
        <button className='previous-btn'>[</button>
          <div>
            <Dropzone onDrop={handleOnDrop} accept='image/*' multiple={true}>
              {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
              )}
            </Dropzone>
          </div>

        <button className='next-btn'>]</button>
    </div>
  )
}

export default Workspace
