let db = require('../database/db');
let Schema = mongoose.Schema;

let user = new Schema ({
    userId : ObjectId,
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    status : {
        type : String,
        enum :['0','1','2'],
        default : '0'
    }
});

module.exports = {
    user
}