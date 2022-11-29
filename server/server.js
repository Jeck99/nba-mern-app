const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
require('./DB')
const teamsRouter = require('./routes/teams-router');
const usersRouter = require('./routes/user-router')
const passport = require('passport');
require('./config/passport')(passport);
const app = express();
const port = 8080;

app.use(passport.initialize())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/teams',passport.authenticate('jwt', { session: false }), teamsRouter);
app.use('/users',usersRouter);

app.get('/', (req, res) => {
    res.send({ massage: "success" })
})
app.listen(port, () => {
    console.log(process.env.CONNECTION_STRING);
    console.log(`server listen on port: ${port}`);
})