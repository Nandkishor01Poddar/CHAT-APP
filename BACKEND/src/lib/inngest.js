// src/lib/inngest.js
const { Inngest } = require('inngest');
const { connectToDB } = require('../DB/db');
const User = require('../models/User');

// Create a client to send and receive events
const inngest = new Inngest({ id: "chat-app" });

// Your functions:
const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        await connectToDB();

        const { id, email_addresses, first_name, last_name, image_url } = event.data;

        const newUser = {
            clerkId: id,
            // NOTE: clerk uses "email_address" (singular) on each entry
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`.trim(),
            profileImage: image_url
        };

        try {
            await User.create(newUser);
        } catch (error) {
            console.error('Failed to create user:', error);
            throw error; // Re-throw to let Inngest handle retry logic
        }

        // todo: do something else
        return { message: "User synced" };
    }
)


const deleteUserFromDB = inngest.createFunction(
    async ({ event }) => {
        await connectToDB();

        const { id } = event.data;

        try {
            await User.deleteOne({ clerkId: id });
        } catch (error) {
            console.error('Failed to delete user:', error);
            throw error; // Re-throw to let Inngest handle retry logic
        }

        // todo: do something else
        return { message: "User deleted" };

    }
);

// Export the client AND the functions array for the express middleware
const functions = [syncUser, deleteUserFromDB];

module.exports = { inngest, functions };
