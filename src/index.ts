import express from 'express';
import bodyParser from 'body-parser';
// VAR
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// INDEX
app.get('/', (req, res) => res.send("Hello Socialz!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})