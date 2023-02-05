import express from 'express';
import projectForm from '../controller/projectForm.js';

// const express=require('express');
// const projectForm=require('../controller/projectForm')
const routes = express.Router();
routes.post('./form');
routes.post('/projectForm', projectForm);
// module.exports=routes;
export default routes;