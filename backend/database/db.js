import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@mern1.wjior8o.mongodb.net/MERN?retryWrites=true&w=majority`
    
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database connection Sucessfully');
    }
    catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;