const mongoose = require("mongoose")
mongoose.connect('mongoodb://localhost/Accounts',{
    useNewPlarser:true,
    useUnifiedTopology:true
});

const searchSchema = new mongoose.Schema({
  username:String,
  password:String,
  age:Number,
  salary:Number

},{
    collation:''
});

module.exports = mongoose.model("search",searchSchema)

searchSchema.create({
    username:'student2',
    password:'123456',
    age:21,
    salary:1000
},{
    username:'student3',
    password:'123457',
    age:22,
    salary:1000
},{
    username:'student4',
    password:'123458',
    age:23,
    salary:1000
},{
    username:'student5',
    password:'123459',
    age:24,
    salary:1000
},{

})