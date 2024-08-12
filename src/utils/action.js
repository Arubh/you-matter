'use server'
import { signIn, signOut, auth } from "@/utils/auth"
import { User } from "@/utils/models/User"
import { connectToDB } from "@/utils/dbConnect"
const bcrypt = require('bcryptjs')


export const handleLogout = async () => {
    'use server'
    await signOut()
}

export const handleLogin = async (formData) => {
    console.log("formData",formData);

    try {
        const res = await signIn("credentials", { 
            username: formData.get("username"), 
            password: formData.get("password"),  
            redirect: false, });
        return res;
    } catch (err) {
        console.log("5555555555555555"+err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" }; 
        }
        throw err;
    }
};

export const updateQuizScores = async (quizScores) => {
    'use server'
    try {
        // Connect to the database
        await connectToDB();

        // Fetch the current session
        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            throw new Error('User not authenticated');
        }

        // Find the user by email (or username if you prefer)
        const user = await User.findOne({ username: session.user.username });
        if (!user) {
            throw new Error('User not found');
        }

        // Update or create quiz scores
        const updatedUser = await User.findOneAndUpdate(
            { username: session.user.username },
            { $set: { scores: quizScores } },
            { new: true} // `upsert` creates a new document if one doesn't exist
        );

        console.log("Quiz scores updated:", updatedUser);

        return { success: true };
    } catch (err) { 
        console.error("Error updating quiz scores:", err);
        return { error: err.message };
    }
};
