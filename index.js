import express from 'express';
import userRoutes from './users.js';
import postRoutes from './posts.js';
import commentRoutes from './comments.js';


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const posts = [
        {
            id: 1,
            title: 'Sample Post',
            content: 'This is a sample post.',
            userName: 'Alice',
            comments: [{ userName: 'Bob', comment: 'Great post!' }],
        },
    ]; 
    res.send(posts);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).send('Something went wrong! Please try again later.');
});

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})