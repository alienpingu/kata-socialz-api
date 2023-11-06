import Core from '../src/module/core';

let core: Core;
const postMockup = {
    id: 'example',
    authorID: 'example',
    public: 'all',
    date: 'example',
    content: 'example',
}

core = new Core();


describe("Database", () => {
    it("Should return userDB as an Array", () => expect(core.userDB).toStrictEqual(expect.any(Array)))
    it("Should return postDB as an Array", () => expect(core.postDB).toStrictEqual(expect.any(Array)))
});

describe("Submit Post", () => {
    it("Should return submitted post", () => expect(core.submitPost(postMockup)).toBe(postMockup))
    it("Should return submitted post from DB as last item", () => expect(core.postDB[core.postDB.length-1]).toStrictEqual(postMockup))
});

describe("Delete Post", () => {

    it("Should return post from DB", () => expect(core.postDB[core.postDB.length-1]).toBe(postMockup))
    it("Should delete post by post id", () => expect(core.deletePost('example')).toBe(true))
    it("Should return undefined on getPost", () => expect(core.getPost('example', 'all')).toBe(undefined))
});

describe("Get Feed", () => {
    it("Should return submitted Post", () => expect(core.submitPost(postMockup)).toBe(postMockup))
    it("Should return Array of post with public: 'all'", () => expect(core.getFeed()).toStrictEqual(expect.any(Array)))
});

describe("Get Post", () => {
    it("Should return submitted Post", () => expect(core.submitPost(postMockup)).toBe(postMockup))
    it("Should return Array of post", () => expect(core.getPost('example', 'all')).toStrictEqual(expect.any(Array)))
});

describe("Register", () => {
    it("Should return true if register complete", () => expect(core.register("admin", "admin")).toBe(true))
    it("Should return false if user already exists", () => expect(core.register("admin", "admin")).toBe(false))
});

describe("Login", () => {
    it("Should return true if login complete", () => expect(core.login("admin", "admin")).toBe(true))
    it("Should return true if login complete", () => expect(core.login("nimda", "nimda")).toBe(false))
});