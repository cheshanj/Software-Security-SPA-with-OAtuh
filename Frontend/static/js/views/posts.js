import Abstract from "./Abstract.js";


export default class extends Abstract{

    constructor(){

        super();

        this.setTitle("Posts");
    }

    async getHtml(){

        return `
        
        <h1>Posts</h1>
        
        <p>
        <a href="/" data-link> Go to home</a>
        </p>
        `;
    }
}