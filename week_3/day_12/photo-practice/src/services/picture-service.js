import {collection, query, getDocs, addDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';
import {Photo} from '../models/Picture';

class PictureService {
    constructor (){
        this.collection = 'photos';
    }

    //make picture
    async createPicture(photo){
        const collectionRef = collection(db, this.collection);
        const docRef = await addDoc (collectionRef, photo.toJson());

        //sets the photo id to the document id
        photo.id = docRef.id;
        return photo;
    } 


    //fetch pictures
    async fetchPictures(){
        const collectionRef = collection(db, this.collection);

        //use a query 
        const querySnapshot = await getDocs(query(collectionRef));
        const photos = [];

        querySnapshot.forEach((doc) => {
            //add photos to a list
            photos.push(Photo.fromFirebase());
        });

        return photos;
    }

}

const service = new PictureService();
export default service;