const serverError = (err , req ,res ,next) => {
    res.status(500).json({
        statusCode : '500' ,
        data : {message :'Internal server error' , err}
    })
}

module.exports = serverError;
