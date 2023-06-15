import React, { useState } from 'react';
import FileService from "../services/file-service";
import PictureService from "../services/picture-service";
import {Photo} from "../models/Picture";
import { useNavigate } from 'react-router-dom';

export default function AddPage() {

    const navigate = useNavigate();
    const [caption, setCaption] = useState("");
    const [file, setFile] = useState(null);


    async function onFormSubmit(e){
        e.preventDefault();

        //make sure the inputs are valid 
        if (!file || !caption){
            console.log('Inputs not valid. Returning early');
            return;
        }

        try {
            //upload the file - call the file service
            const downloadUrl = await FileService.uploadImage(file, (progress) => {
              console.log('upload progress: ', progress);
            });
      
            //once uploaded, save the movie to firebase firestore - call movie service
           // save Movie to firebase firestore
            await PictureService.createPicture(new Photo(null, caption, downloadUrl));
      
            //navigate to view pictures
            navigate('/view-photos');

            setCaption("");
            setFile(null);
      
          } catch (err) {
            console.log(err);
          }
    }

    function onFileChange(e){
        if (e.target.files){
            setFile(e.target.files[0]);
        } else {
            setFile(null);
        }
    }

  return (
    <div className = 'container p-4'>
        <div className='d-flex justify-content-end mb-4'>
            <a href="/view-photos" className="btn btn-primary" role="button" aria-disabled="false">View Uploaded Photos</a>
        </div>

        <div className = 'card card-body'>
            <h1>Add Photos</h1>
            <hr></hr>

            <form onSubmit = {onFormSubmit}>
                <div className = 'mb-4'>
                    <label className = 'form-label'>Picture Upload</label>
                    <input type='file' multiple className = 'form-control' onChange = {onFileChange}></input>
                </div>

                <div className = 'mb-4'>
                    <label className = 'form-label'>Input Caption</label>
                    <input type='text' className = 'form-control' value = {caption} onChange = {(e) => setCaption(e.target.value)}></input>
                </div>

                <div className = 'd-flex justify-content-center'>
                    <button className = 'btn btn-outline-success' type = 'submit'>Submit!</button>
                </div>
                
            </form>

        </div>
    </div>
  )
}
