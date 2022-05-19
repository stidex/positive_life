module.exports = (sequelize,type)=>{
	return sequelize.define("city",{
		id:{
			type: type.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		city:{
			type:type.STRING,
			allowNull: true
		},
		id_department:{
			type:type.INTEGER,
			references:{
				model:"department",
				key:"id"
			}
		}
	},{
		timestamps: false,
		freezeTableName: true

	});
};