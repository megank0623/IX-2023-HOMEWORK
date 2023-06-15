import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../firebase/firebase';

class FileService {

    uploadImage(file, onUploadProgress){
        return new Promise((resolve, reject) => {
            
            //make a file reference using the storage
            const fileRef = ref(storage, 'images/' + file.name);

            //start an uploadTask
            const uploadTask = uploadBytesResumable(fileRef, file);
            uploadTask.on('state_changed', 
                (snapshot) => {
                    //handle the update
                    //listen to updates
                    this.handleProgressUpdate(snapshot, onUploadProgress);

                },
                (err) => {
                    //handle the error by rejecting the promise
                    reject(err.message);
                },
                () => {
                    //get the download url for completed upload
                    //resolve the promise
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        //resolve the promise and send the url to the promise resolution
                        resolve(downloadUrl);
                    });
                }
            );
        });
    }

    handleProgressUpdate(snapshot, onUploadProgress){
        if (onUploadProgress) {
            //if the user asked for the progress
            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            onUploadProgress(progress);
        }
    }
}

const service = new FileService();
export default service;