const { StreamChat } = require('stream-chat')

const apiKey = process.env.STREAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.log("STREAM_API_KEY or STREAM_API_SECRET is missing.")
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData) => {
    try {
        await chatClient.upsertUser(userData)
        return userData
    } catch (error) {
        console.log("Error upserting stream user: ", error)
    }
}

export const deleteStreamUser = async(userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("stream user Deleted successfully.")
    } catch (error) {
        console.log("Error deleting the stream user: ", error)
    }
}

// todo : add another method to generate token 