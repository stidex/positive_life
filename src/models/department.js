module.exports = (sequelize,type)=>{
	return sequelize.define("department",{
		id:{
			type: type.INTEGER,
			primaryKey:true,
			autoIncrement:true,
		},
		department:{
			type:type.STRING,
			allowNull: false
		},
		id_country:{
			type:type.INTEGER,
			references:{
				model:"country",
				key:"id"
			}
		}
	},{
		timestamps: false,
		freezeTableName: true

	});
};