import express from "express"

// const express = require('express') if type in package.json is common

const app = express();

app.get("/api/notes", (req,res)=>{
    //sends the notes
    res.send("you got 10 notes");
})

app.post("/api/notes", (req,res)=>{
    res.status(201).json({message: "note created successfully!"})
})

app.put("/api/notes/:id", (req,res)=>{
    res.status(200).json({message: "note updated successfully!"})
})

app.delete("/api/notes/:id", (req,res)=>{
    res.status(200).json({message: "note updated successfully!"})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})