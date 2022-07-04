
module.exports = {
    index: async(req, res) => {
        // const  responseFromFireBase = await db.
        res.status(200).json({
            status: true,
            message: "Hello World"
        })
    }
}