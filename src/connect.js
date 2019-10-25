import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()

let dbURL = process.env.LOCAL_URL

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'service-providers'
})
.catch((error)=> console.log(error))

