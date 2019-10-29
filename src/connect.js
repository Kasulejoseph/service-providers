import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()
let mongodb_connection_string = process.env.LOCAL_URL
if(process.env.NODE_ENV == 'production'){
    mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL;
  }
  console.log(mongodb_connection_string);
  
mongoose.connect(mongodb_connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'service-providers'
})
.catch((error)=> console.log(error))

