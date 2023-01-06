const express = require('express');
require('dotenv').config();
// const Auth = require('./middleware/Auth');
const app = express();
const userRoutes = require('./routers/user-router');
const auth = require('./middleware/Auth');
const {getUserbyId} = require('./controllers/user-controller');
const logger = (req,res,next)=>{
  console.log('logging....');
   next();
}
const authication = (req,res,next)=>{
  console.log('Authenicated');
   next();
}
app.use(express.json());
app.use([authication,logger]);
// app.use(auth);

app.use('/api/users',userRoutes);

// app.get('/users/:userName', (req, res) => {
//   console.log(req.params);
//   const {userName} = req.params;
//   console.log(userName);
//   res.status(200).json('get user successfully');
// })

app.get('/',(req,res)=>{
  res.status(200).send('home page');
})
app.get('/products',(req,res)=>{
  res.status(200).send('products');
})



// app.put('/users', (req, res) => {
//   res.status(200).json('User updated');
// })


// app.delete('/users/1', (req, res) => {
//   res.status(200).json('user deleted');
// })

// function Auth(req, res, next) {
//   const { name, age } = req.body;
//   if (name && age) {
//     console.log(name, age);
//     // res.status(200).json('add user successfully');
//   } else {
//     res.status(200).json('please enter name and age');
//   }
//   next();
// }

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}........`)
})







/// controler
//router
//























// ////auth///////
// console.log('hello');
// const user={
//             name:"User 1",
//             age:23,
//             email:"adasdfs@gnmail.com",
//             number:123456789,
//             parent:{
//               name:"user parent",
//               email:"sdasdasd@gmail,com"
//             }
//           }

//           const user3={...user}
// // console.log(user)
// // console.log(user3) // copy user
// user.parent.name="user grandparent"
// console.log("after update",user3) // copy user
// console.log(user)

