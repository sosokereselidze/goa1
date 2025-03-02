import express from 'express';
const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
    res.json({email: "Register", pass: "1234"})
});

userRouter.post('/login', (req, res) => {
    res.json({email: "Login", pass: "asdasdasd"})
})

export default userRouter;