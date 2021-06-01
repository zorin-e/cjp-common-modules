const { checkCorrespondentAccount } = require("@/infrastructure/checkBankData");
const { account, bik, correspondentAccount } = require("./data.json")

describe("Checking bank account", () => {
  it("Correspondent account number should be right", () => {
    expect(checkCorrespondentAccount({ account: correspondentAccount, bik })).toBeTruthy()
  })
  it("Correspondent account number should be wrong with incorrect data", () => {
    expect(checkCorrespondentAccount({ account, bik })).toBeFalsy()
  })
})
