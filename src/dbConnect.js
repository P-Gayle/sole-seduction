import mongoose from 'mongoose';
import environmentConfig from './environmentConfig.js';

environmentConfig;

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true
            // }
        
        );
    
            console.log('MongoDB connection established successfully');
            } catch (error) {
                console.log('Unable to connect to MongoDB');
       
        process.exit(1);
            };
    };


export default dbConnect; 