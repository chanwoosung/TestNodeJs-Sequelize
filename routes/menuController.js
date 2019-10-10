const Menu=require('../models').Menu;


exports.makemenu=(req,res,next)=>{
    
    Menu.create({ 
       me_code:req.body.code,
       me_name:req.body.name,
       me_link:req.body.link,
       me_target:'self',
       me_use:1,
       me_mobile_use:1,
   })
   .then((result)=>{
       res.status(200).json({
           message:1,
           data:result
       });
   })
   .catch((error)=>{
       console.error(error);
       res.status(500).json({
           message:0,
           data:error
       });
       next(error);
   });

};

exports.deletemenu=(req,res,next)=>{
    Menu.destroy({
       where:{
           me_code:req.body.code
       }
   }).then((result)=>{
       res.json({
           message:1,
           data:result
       });
   }).catch((error)=>{
       res.error(error);
       res.status(500).json({
           message:0,
           data:error
       });
       next(error);
      });
};
