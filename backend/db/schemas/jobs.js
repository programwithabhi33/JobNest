import mongoose from 'mongoose';
const { Schema } = mongoose;

const jobSchema = new Schema({
    title: String,
    company: String,
    location: String,
    type: String,
    salary: Number,
    posted: { type: Date, default: Date.now },
    description: String,
    tags: [String],
    requirements: [String],
    benefits: [String],
});

export default mongoose.model('Job', jobSchema);