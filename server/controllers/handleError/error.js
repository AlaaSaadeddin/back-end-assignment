const serverError = (err , req ,res ,next) => {
    console.log('err :>> ', err);
    res.status(500).json({
        statusCode : '500' ,
        data : {message :'Internal server error' , err}
    })
}

module.exports = serverError;
