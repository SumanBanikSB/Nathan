var mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://Nathanqwerty:zxcvb@cluster0.o1yonv1.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log('MONGoDB connected!!');
  }
);
 
var schema = mongoose.Schema({
  u: String,
  p: String,
});
module.exports = mongoose.model('cluster0', schema);
