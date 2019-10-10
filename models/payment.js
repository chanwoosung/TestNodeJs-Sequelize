module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('payment',{
        idx:{
         type: DataTypes.INTEGER,
         allowNull:true,
         primaryKey:true,
        },
         mb_id:{
             type: DataTypes.STRING(20),
             allowNull:false,
         },
         mb_name:{
            type: DataTypes.STRING(50),
            allowNull:true,
         },
         product_id:{
             type: DataTypes.STRING(20),
             allowNull:false,
         },
         p_type:{
             type:DataTypes.STRING(1),
             allowNull:false,
         },
         p_name:{
             type:DataTypes.STRING(20),
             allowNull:true,
         },
         p_number:{
            type:DataTypes.STRING(50),
            allowNull:true,
         },
         p_charge:{
            type:DataTypes.STRING(50),
            allowNull:true,
         },
         p_status:{
            type:DataTypes.STRING(1),
            allowNull:true,
         },
         p_agree:{
             type:DataTypes.STRING(1),
             allowNull:true,
         },
         wdate:{
            type:'TIMESTAMP',
            defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:true,
         },
         wip:{
            type:DataTypes.STRING(15),
            allowNull:true,
         },
         rdate:{
            type:'TIMESTAMP',
            defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:true,
         },
     },{
         freezeTableName: true,
          timestamps:false,
     })
 }