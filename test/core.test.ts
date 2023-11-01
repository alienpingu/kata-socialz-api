import Core from '../src/module/core';

describe("log", () => {
    let core = new Core();
    it("Should return true", () => expect(core.log()).toBe(true))
});