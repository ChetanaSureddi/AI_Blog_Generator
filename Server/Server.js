import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

await connectDB()

//Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // ✅ frontend origin
  credentials: true                 // ✅ allow cookies
}))
app.use(express.json())
app.use(cookieParser());

// Needed when using ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Serve favicon explicitly (not required if using express.static)
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

//Routes
app.get('/', (req, res)=> res.send("API is working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('server is running on port ' + PORT)
})

