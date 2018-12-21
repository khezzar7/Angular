export class Serie {
    constructor(
        public id : number,
        public img : string,
        public title : string,
        public categorie : string,
        public content:string){
            this.id=id;
            this.img=img;
            this.title=title;
            this.categorie=categorie;
            this.content=content;
        }
}
