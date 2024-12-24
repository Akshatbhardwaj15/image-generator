import jwt from 'jsonwebtoken'

// userId jo controller me diye hai uskp extract krne ke liye ye middle-ware likh rahe hai

// if id mil gyi toh next() controller pe chala jayega
const userAuth = async (req, res, next) => {
    const {token} = req.headers;

    if(!token){
        return res.json({success: false, message:'Not Authorized. Login Again'})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success: false, message:'Not Authorized. Login Again'})
        }

        next(); //execute controller fxn that will return user credit 
    } catch (error) {
        res.json({success: false, message:error.message})
    }
} 

export default userAuth