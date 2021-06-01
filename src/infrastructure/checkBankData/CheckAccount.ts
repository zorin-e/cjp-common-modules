export class CheckAccount {
	private weightCoefficients: Array<number> = [7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1];
	private account: string

	constructor (account: string) {
		this.account = account
	}

	private calculate (): number {
		let sum = 0
		for (let i: number = 0; i <= 22; i++) {
			sum = sum + ( Number(this.account.charAt(i)) * this.weightCoefficients[i] ) % 10;
		}
		return sum
	}

	isRight (): boolean {
		const result = this.calculate()
		if(result % 10 === 0) return true
		return false
	}
}
