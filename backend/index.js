import express from 'express';
import dbConnection from './db/connection.js';
import jobs from './db/schemas/jobs.js';

const app = express()
const port = 3000;

dbConnection().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log('Error connecting to database', err);
    process.exit(1);
})
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To JobNest Backend!',
    })
});
app.get("/create-sample-job", async (req, res) => {
    try {
        const job = await jobs.create({
            title: 'Sample Job',
            company: 'Sample Company',
            location: 'Sample Location',
            type: 'Full-time',
            salary: 100000,
            description: 'Sample Job Description',
            tags: ['Sample Tag'],
            logo: 'Sample Logo',
            rating: 0,
        })
        res.json({
            message: 'Sample job created successfully',
            job,
        })
    } catch (error) {
        console.log('Error creating sample job', error);
        res.status(500).json({
            message: 'Error creating sample job',
            error: error.message,
        })
    }
})
