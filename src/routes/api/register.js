const router = require('express').Router();
const {User,Info,City,Department,Country} = require('../../database/object_model');

router.post('/', async(req,res)=>{	
	const info = await Info.create(req.body);
	const city = await City.create(req.body);
	const department = await Department.create(req.body);
	const country = await Country.create(req.body);

	if(req.body.type == "user") {
		const user = await User.create(req.body);
		info.setUser(user);
	}

	city.setInfo(info);
	department.setCity(city);
	country.setDepartment(department);
	res.status(200).send({mensaje:"sucess"})

});

module.exports = router;