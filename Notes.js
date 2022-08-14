const express = require('express')

const router = express.Router()

const model = require("./model")

//Getting all Notess
router.get('/',async (req, res)=>{
    try {
        const list  = await model.find()
        res.send(list)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

//Getting one Notes
router.get('/:id',(req, res)=>{
    res.send(req.params.id)
})

//Creating a Notes
router.post('/',async (req, res)=>{
    console.log(req.body)
    // res.send(req.body)
    // const newNote = new model({
    //     Topic: req.body.Topic,
    //     Text: req.body.Text,
    //     createdAt: req.body.createdAt
    // },)

    // try {
    //     const note  = await newNote.save()
    //     res.status(201).send(note)
    // } catch (error) {
    //     res.status(400).json({message: error})
    // }
})


//Updating a Notes
router.patch('/:id',(req, res)=>{
    
})

//Deleting a Notes

router.delete('/:id',(req, res)=>{
    
})


module.exports = router