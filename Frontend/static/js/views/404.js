import Abstract from "./Abstract.js";



export default class extends Abstract{

    constructor(){

        super();

        this.setTitle("404 | Not Found");
        
    }

    async getHtml(){

        return `

        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="404.css">
            <title>404 | Not Found!</title>
        </head>
        <body>
            <div id="main">
                <div class="fof">
                        <h1>Error 404</h1>
                </div>
        </div>
        </body>
        </html>

        `;
    }

    
}