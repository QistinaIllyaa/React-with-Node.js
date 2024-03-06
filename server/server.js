const express = require('express')

const app = express()

app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]}) //response that will be display in UI
})

app.listen(5000, () => {console.log("Server started on port 500")}) // to display which port does the server listen to