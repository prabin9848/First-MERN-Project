import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;


// router.get("/", (req, res)=> {
//     res.status(200).send("You just fetched the nots")
// })

// router.post("/", (req,res)=>{
//     res.status(201).json({message: "note created successfully!"})
// })
// router.put("/:id", (req,res)=>{
//     res.status(200).json({message: "note updated successfully!"})
// })
// router.delete("/:id", (req,res)=>{
//     res.status(200).json({message: "note deleted successfully!"})
// })