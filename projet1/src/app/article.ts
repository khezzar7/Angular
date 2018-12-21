export class Article {
    constructor(
        public title: string,
        public content: string,
        public author: string,
        public like: number,
        public unlike: number,
        public dateCreated: Date){
            this.title = title;
            this.content = content;
            this.author = author;
            this.like = like;
            this.unlike= unlike;
            this.dateCreated = new Date();
        };
}
