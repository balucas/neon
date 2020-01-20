var db = require('./db').db

async function authenticate(email, password) {
    console.log('attempting authenticate: ' + email + ' ' + password);

    //Find user
    return(
        db.one('SELECT id, first_name, last_name, email FROM users WHERE email = $1 AND password = crypt($2, password)',
            [email, password])
            .then(function (data){  //User & password matched
                console.log('data ret: ' + data);
                return data
            })
            .catch(function (error) {
                console.log(error);
                return null;
            })
    );
    
}

async function find(email){

    return(
        db.oneOrNone('SELECT FROM users WHERE email = $1', 
            email)
            .then(function (data) {  //User found
                return data;
            }).catch(function (error) {
                console.log('find err ' + error);
                return null
            })
    )
}


async function findOne(email){
    console.log('findone ' + email);
    //Create user
    return(
        db.one('SELECT id FROM users WHERE email = $1', 
            [email])
            .then(function (data) {  //User found
                console.log('findone ' + data);
                return data;
            })
            .catch(function (error) {
                console.log('findone err ' + error);
                return null;
            })
    )
}

async function create(user) {

    //Create user
    return(
        db.any('INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, crypt($4, gen_salt(\'bf\')))', 
            [user.email, user.firstname, user.lastname, user.password])
            .then(function (data) {  //User created
                return data
            }).catch(function (error) {
                console.log('create err ' + error);
                return null
            })
    )
}


module.exports = {
    authenticate, 
    create,
    find,
    findOne
}