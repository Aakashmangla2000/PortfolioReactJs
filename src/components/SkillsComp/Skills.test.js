const Skills = require("./Skills")

// @ponicode
describe("hoverElement", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Jean-Philippe", "Pierre Edouard"], ["Pierre Edouard", "Pierre Edouard", "George"], ["George", "Pierre Edouard", "Pierre Edouard"]]
        inst = new Skills.Skills(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.hoverElement("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.hoverElement("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.hoverElement("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.hoverElement("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.hoverElement("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.hoverElement(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
