import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import cookieParser from 'cookie-parser';
// import path from 'path';
// import { fileURLToPath } from 'url';

const app = express();

await connectDB()


// --- CORS (put FIRST) ---
const allowedOrigins = (process.env.CORS_ORIGINS ??
  'https://ai-blog-generator-frontend-3rc9.onrender.com,http://localhost:5173'
).split(',').map(s => s.trim());

const corsOptions = {
  origin(origin, cb) {
    if (!origin) return cb(null, true); // allow server-to-server/curl
    return allowedOrigins.includes(origin)
      ? cb(null, true)
      : cb(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: false, // you use Bearer token (NOT cookies)
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
// make Express handle preflight with proper headers + 204
app.options('*', cors(corsOptions));


// //Middleware
// app.use(cors({
//   origin: 'https://ai-blog-generator-frontend-3rc9.onrender.com',  // ✅ frontend origin
//   credentials: true                 // ✅ allow cookies
// }))
//  Body & misc 
app.use(express.json())
app.use(cookieParser());



//Routes
app.get('/', (req, res)=> res.send("API is working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', ()=>{
    console.log('server is running on port ' + PORT)
})



