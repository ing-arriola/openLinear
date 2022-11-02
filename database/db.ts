import mongoose from 'mongoose'

 const mongooConnection = {
     isConnected: 0
 }

 export const connect = async () =>{
    if(mongooConnection.isConnected){
        console.log('Connection was already successfull')
        return
    }
    if(mongoose.connections.length>0){
        mongooConnection.isConnected = mongoose.connections[0].readyState
        if(mongooConnection.isConnected === 1){
            console.log('using previous connection')
            return
        }
        await mongoose.disconnect()
    }
    await mongoose.connect(process.env.MONGO_URL || '')
    mongooConnection.isConnected =1
    console.log('connected to MongoDB :)', process.env.MONGO_URL)
 }

 export const discconect = async() => {
    if(mongooConnection.isConnected ===0) return
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB :(')
 }