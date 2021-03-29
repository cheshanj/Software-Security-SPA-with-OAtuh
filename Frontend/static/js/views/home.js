import Abstract from "./Abstract.js";


export default class extends Abstract{

    constructor(){

        super();

        this.setTitle("Home");
    }

    async getHtml(){

        return `
        
        <h1>welcome back</h1>
        
        <p>
        <a href="/posts" data-link> Go to posts</a>
        </p>
        `;
    }
}