import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { User } from "../models/user.model.js"
import { generateToken } from "../middlewares/jwt.middlewares.js";

const registerUser = asyncHandler( async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const checkUser = await User.findOne({ email: email });

        if (checkUser) {
            return res.status(401).json({ error: 'Email already exists' });
        }

        const newUser = new User({ username, email, password });
        const response = await newUser.save();

        const payload = {
            id: response.id,
            username: response.username
        }

        const token = generateToken(payload);

        const { password: _, ...userWithoutPassword } = response.toObject();
        res.status(200).json({response: response, token: token});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const loginUser = asyncHandler( async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email })

        if( !user || !(await user.isPasswordCorrect(password))){
            return res.status(401).json({error: 'Invalid username or password'});
        }

        const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload);

        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(200).json({response: userWithoutPassword, token: token});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const getCurrentUser = asyncHandler(async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export { registerUser, loginUser, getCurrentUser, logoutUser };