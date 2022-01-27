const express = require('express');
const router = express.Router();
const estudiantes = require('../models/database')


router.get('/', async (req ,res)=>{
    const db = await estudiantes.find();
    res.json(db);
})

router.post('/', async(req,res)=>{
    
    const db = new estudiantes(req.body);
    await db.save()
    .then(()=>{res.json({ estado: 'tarea recivida'})})
    .catch((err)=>{console.error(err)})
   
})

router.delete('/:id',async (req,res)=>{

    await estudiantes.findByIdAndDelete(req.params.id)
    .then(()=>{ res.json({ estado: 'tarea borrada'})})
    .catch((err)=>{console.error(err)})
   
   })
 
router.put('/:id', async (req,res)=>{
     await estudiantes.findByIdAndUpdate(req.params.id, req.body)
     .then(()=>{res.json({estado: 'tarea actualizada'})})
     .catch((err)=>{console.error(err)})
 })  
   
module.exports = router;