const mongoose = require('mongoose');

const URI = "mongodb+srv://zebsoft:KO1yATRwKBt4sJ1y@zebsoft.iyoy4go.mongodb.net/bbd3";

mongoose.connect(URI).then(()=>{
    console.log('database connected');
});