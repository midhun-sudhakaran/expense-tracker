export interface RecurringBill {
  id: string;
  description: string;
  amount: number;
  dueDay: number;
  category: string;
  isPaid: boolean;
  paidDate?: string;
}
