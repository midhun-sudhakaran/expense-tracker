export interface Expense {
  id?: number;
  amount: number;
  categoryId: number;
  paymentMethodId: number;
  description: string;
  date: Date;
  createdAt: Date;
}
