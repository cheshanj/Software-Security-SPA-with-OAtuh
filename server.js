const express = require("express");
const path = require("path");

const app = express();

app.disable("etag");

app.use("/static", express.static(path.resolve(__dirname,"Frontend", "static")));

app.get("/*", (req,res) => {

res.sendFile(path.resolve(__dirname,"Frontend", "index.html"));

})



app.listen(process.env.PORT || 4800, () => console.log("Server started and running!!"));

