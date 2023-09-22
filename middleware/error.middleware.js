const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    if(process.env.NODE_ENV === "development"){
      res.json({
        message: err.message,
        stack: err.stack 
      });
    }else{
      res.json({
        message: err.message,
      });
    }
  };
 
  export default errorHandler;
  