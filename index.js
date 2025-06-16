import express from 'express';
import userRoutes from './users.js';
import postRoutes from './posts.js';
import commentRoutes from './comments.js';


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);




app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})