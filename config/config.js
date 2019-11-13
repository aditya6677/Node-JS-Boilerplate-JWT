module.exports = () => {
    let env = process.env.NODE_ENV || 'development';
    switch(env){
        case 'development':
            return {
                HOST : '',
                PORT : '',
                DB_USERNAME : '',
                DB_PASSWORD : '',
                DB_NAME : '',
                DB_DIALECT : 'mysql',
                JWT_SECRET : 'worldisfullofdevelopers'
            }
        case 'production':
            return {
               /*  HOST : '',
                PORT : '',
                DB_USERNAME : '',
                DB_PASSWORD : '',
                DB_NAME : '',
                JWT_SECRET : 'worldisfullofdevelopers' */
            }
    }
}