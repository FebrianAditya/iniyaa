// const base = require("../controllers/testingApi.js")
// const base2 = require("../controllers/testingApiPost.js")
// const mockRequest = (body = {}) => ({body})
// const mockResponse = () => {
//     const res = {} 
//     res.json = jest.fn().mockReturnValue(res)
//     res.status = jest.fn().mockReturnValue(res)
//     return res
// }



// describe("COBAIN TESTING GET", () => {
//     test("INI CEK STATUS", done => {
//         const req = mockRequest()
//         const res = mockResponse()
//         base.index(req, res)
//         // console.log(res, "==> APA HAHA");
//         expect(res.status).toBeCalledWith(200)
        

//         done()
//     })

//     test("INI CEK MESSAGE", done => {
//         const req = mockRequest()
//         const res = mockResponse()
//         base.index(req, res)
//         expect(res.json).toBeCalledWith({
//             status: true,
//             message: "Hello World"
//         })

//         done()
//     })
// })


// describe("COBAIN TESTING POST", () => {
//     test("INI CEK PENAMBAHAN X & Y", done => {
//         const req = mockRequest({x: 5, y: 10})
//         const res = mockRequest()
//         const expectedResult = req.body.x + req.body.y
//         base2.index(req,res)

//         expect(res.json).toBeCalledWith({
//             status: true,
//             message: "Parameters Summarized!",
//             data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y}
//         })
//         done()
//     })
// })

