class AddBookRequest {
    title: String;
    author: String;
    description: string;
    copies: number;
    categories: string;
    img?: string;

    constructor(title: String, author: String, description: string, copies: number, categories: string){
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.categories = categories;
    }
}

export default AddBookRequest;