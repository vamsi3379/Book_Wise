class PaymentInfoRequest {
    ammount: number;
    currency: string;
    reciptEmail: string | undefined;

    constructor(amount: number, currency: string, reciptEmail: string | undefined) {
        this.ammount = amount;
        this.currency = currency;
        this.reciptEmail = reciptEmail;
    }
}

export default PaymentInfoRequest;