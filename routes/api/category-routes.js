const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:{
      model: Product
    }
  })
  .then(categorys=> res.json(categorys))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id: req.params.id
    },
    include:{
      model: Product
    }
  })
  .then(categorys=>{
    if(!categorys){
      res.status(404).json({message: "no category found"})
    }
    res.json(categorys)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(categorys=>res.json(categorys))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(categorys=>{
    if(!categorys){
      res.status(404).json({message: "no category found"})
    }
    res.json(categorys)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(categorys=>{
    if(!categorys){
      res.status(404).json({message: "no category found"})
    }
    res.json(categorys)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
