module.exports = (sequelize,type)=>{
	return sequelize.define("country",{
		id:{
			type:type.INTEGER,
			primaryKey:true,
			autoIncrement: true
		},
		country:{
			type:type.STRING,
			allowNull:false

		}
	},{
		timestamps:false,
		freezeTableName:true
	});
}