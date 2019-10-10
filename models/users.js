module.exports=(sequelize,DataTypes)=>{
   return sequelize.define('g5_member',{
       mb_no:{
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true,
       },
        mb_id:{
            type: DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        mb_password:{
            type: DataTypes.STRING(255),
            allowNull:true,
        },
        mb_name:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        mb_email:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        mb_level:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        mb_datetime:{
            type:'TIMESTAMP',
            defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:false,
        },
        mb_nick:{
            type:DataTypes.STRING(255),
            allowNull:true,
        },
        mb_hp:{
            type:DataTypes.STRING(255),
            allowNull:true,
        },
        mb_adult:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        mb_mailling:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },


    },{
        freezeTableName: true,
         timestamps:false,
    })
}