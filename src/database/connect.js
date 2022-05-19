const Sequelize = require('sequelize');

const sequelize = new Sequelize('positive_life','root','',{
	host:'localhost',
	dialect:'mysql'
});


sequelize.sync({force:false}).then(()=>{
	console.log('tables synchronized')
})
module.exports = sequelize;