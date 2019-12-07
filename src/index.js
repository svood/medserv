require('dotenv').config();

const chalk = require('chalk');
const { app, apolloServer } = require('./app');
const connectToDb = require('./db');

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(
    `\nApp started on ${chalk.cyan(`http://${process.env.HOST}:${process.env.PORT}${apolloServer.graphqlPath}`)}`
  );
});
