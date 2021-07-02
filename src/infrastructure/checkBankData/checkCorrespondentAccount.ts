import { CheckAccount } from "./CheckAccount"
import { bankDataParams } from "./types"

export function checkCorrespondentAccount ({ account, bik }: bankDataParams) {
  return new CheckAccount('0' + bik.substr(4,2) + account).isRight()
}
