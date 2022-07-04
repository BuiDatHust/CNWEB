const { mongoose } = require('mongoose')

const connectMongoDb = () => {
  const url = process.env.MONGO_URL ;
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000
  }).then(
    () => {  console.log("connected to mongodb") },
    err => { throw new Error(err) }
  );
}

module.exports = connectMongoDb