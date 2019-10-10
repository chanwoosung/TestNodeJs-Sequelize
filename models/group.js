module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('g5_group',{
        gr_id:{
         type: DataTypes.STRING(10),
         allowNull:false,
         primaryKey:true,
        },
         gr_subject:{
             type: DataTypes.STRING(255),
             allowNull:false,
         },
         gr_device:{
             type: DataTypes.STRING(255),
             allowNull:true,
             defaultValue:'both'
         },
         gr_use_access:{
             type:DataTypes.INTEGER,
             allowNull:true,
             defaultValue:0
         },
         gr_order:{
            type:DataTypes.INTEGER,
            allowNull:true,
            defaultValue:0
        },
        
     },{
         freezeTableName: true,
          timestamps:false,
     })
 }