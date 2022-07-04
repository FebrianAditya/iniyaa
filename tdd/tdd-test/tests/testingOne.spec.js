const request = require("supertest")
const app = require("../app")
// const { auth } = require("../services/firebase")

describe("GET /", () => {
    test("/", done => {
        request(app)
        .get("/")
        .then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty("message", "berhasil")
        })
        done()
    })
})

describe("POST /", () => {
    test("ini /register", done => {
        request(app)
        .post("/register")
        .send({
            email: "abdul1@mail.com",
            password: "qweqwe"
        })
        .then(res => {
            expect(res.statusCode).toBe(201)
            expect(res.body).toHaveProperty("message", "abdul1@mail.com")
            done()
        })
    })
})