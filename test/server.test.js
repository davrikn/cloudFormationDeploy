const app = require("../src/server.js")
const supertest = require("supertest")

const requestWithSupertest = supertest(app)

describe("Server is running", () => {
    it("GET / should return hello world message", async ()=> {
        const response = await requestWithSupertest.get("/");
        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("hello world")
    })
})