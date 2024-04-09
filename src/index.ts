import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

const MONGO_URL = 'mongodb+srv://osee:2001@cluster0.uf1zzkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // DB URI

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error: Error) => {
  console.log('Failed to connect to MongoDB:', error);
});

