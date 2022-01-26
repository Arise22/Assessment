
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryBlesson=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryBlesson.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryBlesson.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryBlesson.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryBlesson.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryBlesson.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryBlesson.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryBlesson.deleteAll);
  
    app.use('/api/categoryBlessons', router);
  };