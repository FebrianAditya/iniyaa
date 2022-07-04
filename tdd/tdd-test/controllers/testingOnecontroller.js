const { createUserWithEmailAndPassword } = require("firebase/auth")
const { auth } = require("../services/firebase");

class TestingOneController {

    static getHomePage(req, res) {
        res.status(200).json({ message: "berhasil"})
    }

    static async registerUser(req, res) {
        const {email, password} = req.body
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            res.status(201).json({ message: response._tokenResponse.email })
        } catch (error) {
            console.log(error, "==> ERROR2");
        }
    }

}

module.exports = TestingOneController