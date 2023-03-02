import express from 'express';
import dotenv from 'dotenv';
import experience from './routes/experience';
import education from './routes/education';
import skills from './routes/skills';
import languages from './routes/languages';
import user from './routes/user';

const app = express();
dotenv.config();
app.get('/experience', experience);
app.get('/education', education);
app.get('/skills', skills);
app.get('/languages', languages);
app.get('/user', user);

// Initializing the router from express
const router = express.Router();

// Assigning a port that is already in use
const port = process.env.PORT || '8000';
// App listening on the below port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
