const Sequelize = require('sequelize');
const sequelize = require('./connect');

const User = require('../models/user')(sequelize,Sequelize);
const Info = require('../models/info')(sequelize,Sequelize);
const City = require('../models/city')(sequelize,Sequelize);
const Department = require('../models/department')(sequelize,Sequelize);
const Country = require('../models/country')(sequelize,Sequelize);

Info.hasMany(User,{foreignKey:"id_info",as:"User",onDelete:"cascade",onUpdate:"cascade"});
City.hasMany(Info,{foreignKey:"id_city", as:"Info", onDelete: "cascade", onUpdate: "cascade"});
Department.hasMany(City,{foreignKey:"id_department", as:"City", onDelete: "cascade", onUpdate: "cascade"});
Country.hasMany(Department,{foreignKey:"id_country", as:"Department", onDelete: "cascade", onUpdate: "cascade"});

module.exports = {
	User,
	Info,
	City,
	Department,
	Country
}