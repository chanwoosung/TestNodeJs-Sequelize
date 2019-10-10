const express=require('express');

const router=express.Router();
const {User,TestMember,Menu,Board,Group,Payment}=require('../models');
const payCon=require('./paymentController');
const userCon=require('./userController');
const groupCon=require('./groupController');
const menuCon=require('./menuController');
const boardCon=require('./boardController');

router.get('/',(req,res,next)=>{
    res.render('main',{
        title:'test',
        body:'now testing'
    })
})
router.get('/test',(req,res,next)=>{
    TestMember.findAll({
        attributes:['mb_id']
    })
    .then((user)=>{
        res.status(200).json({
            message:1,
            data:user
        });
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        })
        next(error);
    })
    
})

router.get('/list',userCon.list);
router.get('/newbie',userCon.newbie);
router.post('/controlUser', userCon.controlUser);
router.delete('/deleteUser',userCon.deleteUser);

router.post('/makemenu',menuCon.makemenu);
router.delete('/deletemenu',menuCon.deletemenu);

router.post('/controlBoard',boardCon.controlBoard);

router.post('/insertGroup',groupCon.insertGroup);
router.post('/updateGroup',groupCon.updateGroup);
router.delete('/deleteGroup',groupCon.deleteGroup);

router.post('/insertPayment',payCon.insertPayment);
router.post('/updatePayment',payCon.updatePayment);
router.delete('/deletePayment',payCon.deletePayment);


module.exports=router;
