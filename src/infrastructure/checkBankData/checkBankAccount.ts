import { CheckAccount } from "./CheckAccount"
import { bankDataParams } from "./types"

export function checkBankAccount ({ account, bik }: bankDataParams) {
  return new CheckAccount(bik.substr(6,3) + account).isRight()
}
