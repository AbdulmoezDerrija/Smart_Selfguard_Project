const mysql = require('mysql');
const app = require("./App");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database',
});

app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // check if email is already in use
    const emailQuery = `SELECT * FROM users WHERE email = '${email}'`;
    connection.query(emailQuery, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            // email is already in use
            res.send({ error: 'Email is already in use' });
        } else {
            // email is not in use, add new user to database
            const addUserQuery = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${password}')`;
            connection.query(addUserQuery, (error) => {
                if (error) throw error;
                res.send({ message: 'Successfully added new user' });
            });
        }
    });
});