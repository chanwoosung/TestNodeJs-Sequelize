module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('testmembers2s',{
         mb_id:{
             type: DataTypes.STRING(20),
             allowNull:false,
             unique:true,
         },
         mb_password:{
             type: DataTypes.STRING(255),
             allowNull:false,
         },
        
     },{
          timestamps:false,
     })
 }