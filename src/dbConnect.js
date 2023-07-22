import mongoose from 'mongoose';
import environmentConfig from './environmentConfig.js';

environmentConfig;

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
    
            console.log('MongoDB connection established successfully');
            } catch (err) {
                console.log('Unable to connect to MongoDB');
        console.log(err);
        process.exit(1);
            };
    };


export default dbConnect; 