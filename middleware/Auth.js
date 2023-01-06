 const Auth = (req,res,next)=>{
    const {name,age} = req.body;
    if(name && age){
      console.log(name,age);
      // res.status(200).json('add user successfully');
    }else{
      res.status(200).json('please enter name and age');
    }
    next();
  }

  module.exports = Auth;
 

 