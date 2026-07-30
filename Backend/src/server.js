import express from "express"
import notesRoutes from "./Routes/notesRoutes.js";
// const express = require('express') if type in package.json is common

const app = express();


app.use("/api/notes", notesRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})