const app = require('express')();

app.get('/', (req, res ) =>
  res.json({ message: `HOLA! Env var NAME is ${process.env.NAME}` })
);

const port = 8080;

app.listen(port, () => console.log(`App listening on http://localhost:${port}`) );
