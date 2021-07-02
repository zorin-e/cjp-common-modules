export class CheckAccount {
	private weightCoefficients: Array<number> = [7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1];
	private account: string
	private weightCoefficientsSize: number

	constructor (account: string) {
		this.account = account
		this.weightCoefficientsSize = this.weightCoefficients.length
	}

	private calculate (): number {
		if (isNaN(Number(this.account))) throw new Error('Account is not a number')

		let sum = 0
		for (let i: number = 0; i < this.weightCoefficientsSize; i++) {
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
