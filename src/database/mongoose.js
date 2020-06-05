const mongoose = require('mongoose')
const config = require('config')
const assetDB = process.env.MONGO_DB_CONNECTION_ASSET_MANAGER

mongoose.connect(assetDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})