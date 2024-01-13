const express = require("express");
const morgan = require("morgan")
const app = express();

const port = process.env.PORT || 3000;

const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Nguyen Dats"
    }
]

app.use(morgan("combined"))



app.post("/users",(req, res)=>{
    const userName = req.body.userName
    const user = users.find(u=>u.name===userName);
    console.log("🚀 ~ user:", user)
    
})
app.get("/",(req, res)=> res.send('Hello World!'));

app.listen(port, () => console.log(`App listening at http:://localhost:${port}`))