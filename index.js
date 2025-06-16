import express from 'express';
import userRoutes from './users.js';


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/users', userRoutes);


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})