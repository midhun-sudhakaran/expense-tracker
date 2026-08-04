export interface RecurringBill {
  id?: number;
  description: string;
  amount: number;
  dueDay: number;
  category: string;
  isActive: boolean;
  createdAt: Date;
}
