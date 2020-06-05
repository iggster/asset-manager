const mongoose = require('mongoose')
const config = require('config')
const mongoDbURI = config.get('MONGO_ATLAS_DB')
const assetDB = process.env.MONGO_DB_CONNECTION_ASSET_MANAGER

mongoose.connect(mongoDbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})