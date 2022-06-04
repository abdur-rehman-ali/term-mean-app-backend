
const myLogger=(req,res,next)=>{
    console.log('Logged in module');
    next()
}

module.exports = myLogger