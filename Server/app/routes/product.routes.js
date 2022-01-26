const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productBlesson = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productBlesson.create);
  
    // Retrieve all Tutorials
    router.get("/", productBlesson.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productBlesson.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productBlesson.findOne);
    // Update a Tutorial with id
    router.put("/:id", productBlesson.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productBlesson.delete);
  
    // Delete all Tutorials
    router.delete("/", productBlesson.deleteAll);
  
    app.use('/api/productBlessons', router);
  };