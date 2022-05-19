module.exports =  (sequelize,type)=>{
	return sequelize.define("info",{
		id:{
			type:type.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		name:{
			type: type.STRING,
			allowNull: false
		},
		lastName:{
			type: type.STRING,
			allowNull: false
		},
		phone:{
			type: type.STRING,
			allowNull: false,
			unique: true
		},
		type:{
			type:type.STRING,
			allowNull:false,
		},
		id_city:{
			type: type.INTEGER,
			references:{
				model:"city",
				key:"id"
			}	
		}
	},{
		timestamps:false,
		freezeTableName:true	
	});
}