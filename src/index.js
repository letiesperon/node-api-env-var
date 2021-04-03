const app = require('express')();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.get('/', (req, res ) =>
  res.json({ message: `HOLA! Env var NAME is ${process.env.NAME}` })
);

const port = 8080;

app.listen(port, () => console.log(`App listening on http://localhost:${port}`) );
