import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()
const mongodb_connection_string = process.env.LOCAL_URL
if(process.env.OPENSHIFT_MONGODB_DB_URL){
    mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
  }

mongoose.connect(mongodb_connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'service-providers'
})
.catch((error)=> console.log(error))

