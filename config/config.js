module.exports = () => {
    let env = process.env.NODE_ENV || 'development';
    switch(env){
        case 'development':
            return {
                HOST : '35.154.43.115',
                PORT : '8007',
                DB_USERNAME : 'test',
                DB_PASSWORD : 'Test@12345',
                DB_NAME : 'grindkey',
                DB_DIALECT : 'mysql',
                JWT_SECRET : 'worldisfullofdevelopers'
            }
        case 'production':
            return {
               /*  HOST : '35.154.43.115',
                PORT : '8007',
                DB_USERNAME : 'test',
                DB_PASSWORD : 'Test@12345',
                DB_NAME : 'grindkey',
                JWT_SECRET : 'worldisfullofdevelopers' */
            }
    }
}