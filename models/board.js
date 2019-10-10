module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('g5_board',{
        bo_table:{
         type: DataTypes.STRING(20),
         allowNull:false,
         primaryKey:true,
        },
         bo_subject:{
             type: DataTypes.STRING(255),
             allowNull:false,
         },
         bo_mobile_skin:{
             type: DataTypes.STRING(255),
             allowNull:true,
         },
         bo_list_level:{
             type:DataTypes.INTEGER,
             allowNull:false,
         },
         bo_read_level:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        bo_write_level:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        bo_reply_level:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        bo_comment_level:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
         bo_use_sns:{
             type:DataTypes.INTEGER,
             allowNull:false,
         },
         bo_use_search:{
             type:DataTypes.INTEGER,
             allowNull:false
         },
         bo_order:{
            type:DataTypes.INTEGER,
            allowNull:false
         },
         gr_id:{
             type:DataTypes.STRING(255),
             defaultValue:'custom',
             allowNull:false
         }
     },{
         freezeTableName: true,
          timestamps:false,
     })
 }