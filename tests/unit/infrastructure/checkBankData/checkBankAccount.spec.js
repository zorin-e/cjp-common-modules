const { checkBankAccount } = require("@/infrastructure/checkBankData");
const { correspondentAccount, account, bik } = require("./data.json")

describe("Checking bank account", () => {
  it("Account number should be right", () => {
    expect(checkBankAccount({ account, bik })).toBeTruthy()
  })
  it("Account number should be wrong with incorrect bik", () => {
    expect(checkBankAccount({ account, bik: correspondentAccount })).toBeFalsy()
  })
  it("Account number should be wrong with incorrect account number", () => {
    expect(checkBankAccount({ account: correspondentAccount, bik })).toBeFalsy()
  })
})
