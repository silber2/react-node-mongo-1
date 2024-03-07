import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {console.log('db connected')})
    .catch(err => console.error(err + 'db connection failed'))