import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';    
import { paymentOrders, paymentVerify } from '../controller/paymentController';
const routes=express.Router();
routes.post('./orders',paymentOrders);
routes.post('./verify',paymentVerify);
module.exports=routes;