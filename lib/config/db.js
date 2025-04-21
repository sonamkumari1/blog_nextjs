import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://sonamkumari63928:vclnh3xUQMYYijRb@cluster0.31bd6ur.mongodb.net/blog')
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(err));
}
