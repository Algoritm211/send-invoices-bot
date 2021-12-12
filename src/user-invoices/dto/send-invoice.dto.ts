export class SendInvoiceDto {
  readonly userId: string;
  readonly orderedCoin: string;
  readonly amountOfCoin: number;
  readonly ethWallet: string;
}
