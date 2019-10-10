module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('g5_menu',{
        me_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
            primaryKey:true,
        },
         me_code:{
             type: DataTypes.STRING(20),
             allowNull:false,
             unique:true,
         },
         me_name:{
             type: DataTypes.STRING(255),
             allowNull:false,
         },
         me_link:{
             type:DataTypes.STRING(255),
             allowNull:false,
         },
         me_target:{
             type:DataTypes.STRING(255),
             allowNull:false,
         },
         me_use:{
            type:DataTypes.INTEGER,
            allowNull:false,
         },
         me_mobile_use:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
         
     },{
         freezeTableName: true,
          timestamps:false,
     })
 }