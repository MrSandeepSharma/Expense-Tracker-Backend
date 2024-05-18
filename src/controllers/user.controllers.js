import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { User } from "../models/user.model.js"

const registerUser = asyncHandler( async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const checkUser = await User.findOne({ email: email });

        if (checkUser) {
            return res.status(401).json({ error: 'Email already exists' });
        }

        const newUser = new User({ username, email, password });
        const response = await newUser.save();

        const { password: _, ...userWithoutPassword } = response.toObject();
        res.status(201).json(userWithoutPassword);

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

        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

export { registerUser, loginUser };