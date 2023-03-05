import Project from '../models/productModel.js';
// const Project=require('../models/productModel')

const projectForm= async (req,res)=>{
    const form=req.body;
    console.log(form);
    try {
        const products = await Project.create(form);;
        res.json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
export default projectForm;