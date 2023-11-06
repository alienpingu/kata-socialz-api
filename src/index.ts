import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import Core from './module/core';
import authenticateToken from './utils/authMiddleware';
// VAR
dotenv.config();
const app = express()
const port = process.env.PORT;
const core = new Core();
const secret = process.env.SECRET || "default-secret";
// app use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(secret));

// INDEX
app.get('/', (req, res) => res.send("Hello Socialz!"));

app.post('/register', (req, res) => {
  if (core.register(req.body.username, req.body.password)) {
    const payload = {
      username: req.body.username
    };
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.cookie('jwt', token, { signed: true, httpOnly: true });
    res.status(200).json({ message: 'Accesso riuscito' });
  } else {
    res.status(409).json({ message: "L' username esiste già, provane un'altro" });
  }
});

app.post('/login', (req, res) => {
  if (core.login(req.body.username, req.body.password)) {
    const payload = {
      username: req.body.username
    };
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.cookie('jwt', token, { signed: true, httpOnly: true });
    res.status(200).json({ message: 'Accesso riuscito' });
  } else {
    res.status(401).json({ message: "Accesso negato" });
  }
});


app.post('/post', authenticateToken, (req, res) => {
  if (core.submitPost(req.body)) {
    res.status(200).json({ message: 'Post pubblicato' });
  } else {
    res.status(500).json({ message: 'Errore del server' });
  }
});

app.post('/delete', authenticateToken, (req, res) => {
  if (core.deletePost(req.body.id)) {
    res.status(200).json({ message: 'Post Cancellato' });
  } else {
    res.status(500).json({ message: 'Errore del server' });
  }
});

app.post('/get', authenticateToken, (req, res) => {
  const feed = core.getPost(req.body.authorID, req.body.public);
  if (feed) {
    if (feed.length > 0) {
      res.status(200).json({ feed: feed });
    } else {
      res.status(201).json({ message: "Non ci sono post" });
    }
  } else {
    res.status(202).json({ message: "Non ci sono post"  });
  }
});

app.post('/feed', authenticateToken, (req, res) => {
  const feed = core.getFeed();
  if (feed) {
    if (feed.length > 0) {
      res.status(200).json({ feed: feed });
    } else {
      res.status(201).json({ message: "Non ci sono post" });
    }
  } else {
    res.status(202).json({ message: "Non ci sono post"  });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})