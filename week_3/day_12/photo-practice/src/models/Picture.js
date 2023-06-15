
export class Photo {

    constructor (id, caption, downloadUrl) {
        this.id = id;
        this.caption = caption;
        this.downloadUrl = downloadUrl;
    }

    toJson () {
        return {
            caption: this.caption, 
            downloadUrl: this.downloadUrl
          }
    }

    static fromFirebase (doc) {
        //pull data from the document
        const data = doc.data();
        return new Photo({
            id: doc.id, 
            caption: doc.caption,
            downloadUrl: data.downloadUrl
        });
    }
}