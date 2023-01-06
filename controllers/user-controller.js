// const users = [{
//     id:1,
//     name:'Ali',
//     email:'ali@gmail.com',
//     password:12345,
//     phone:03000000
// },{
//   id:2,
//   name:'dani',
//   email:'dani@gmail.com',
//   password:1234567,
//   phone:0300000000
// }]
const {pool} = require('../db.config');

const getUsers = (req, res) => {
  console.log('db')
     pool.query("select * from students",(error,result)=>{
     if(error){
      throw error
     }
    //  console.log(result);
      res.status(200).json(result);
     
    })
    // const {name,age} = req.body;
    // console.log(name,age);
    // const userdata = users.filter(item =>item.id == req.query.id);
    // res.json(userdata);
    // res.status(200).json('add user successfully');
  }

  module.exports = {getUsers};