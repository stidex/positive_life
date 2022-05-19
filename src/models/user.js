module.exports =  (sequelize,type)=>{
	return sequelize.define("user",{
		id:{
			type:type.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		email:{
			type: type.STRING,
			allowNull: false,
			unique:true
		},
		password:{
			type:type.STRING,
			allowNull:false
		},
		id_info:{
			type:type.INTEGER,
			references:{
				model:"info",
				key:"id"
			}
		}
	},{
		timestamps:false,
		freezeTableName:true	
	});
}