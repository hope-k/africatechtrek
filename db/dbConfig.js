import mongoose from 'mongoose';
import CustomError from '../utils/CustomError';


const connect = async () => {
    try {
        console.log('Connecting to MongoDB...', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw new CustomError(error.message, 500);
    }
}

export default connect;