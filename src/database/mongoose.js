const mongoose = require('mongoose')
const assetDB = process.env.MONGO_DB_CONNECTION_ASSET_MANAGER


//Monggose connect to Mongo.
mongoose.connect(assetDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true

})