const mongoose = require ("mongoose");

const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("base de datos conectada")
    }
    catch (error) {
        console.log(error)
        throw new Error ("error al iniciar la base de datos")
    }
}

module.exports={
    dbConnection
}