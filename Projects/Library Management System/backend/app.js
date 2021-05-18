const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const books = ["kotPYEqx7kMC","FzVjBgAAQBAJ"];

app.get("/getBooks", function(req,res){
    res.send(books);
});

app.post("/viewBooks", function(req, res){
    const {book} = req.body;
    books.push(book);
    console.log(book);

    
})

app.listen(3001, function(){
    console.log("Server is now running on port 3001.");
});