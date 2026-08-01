import Dexie, { type Table } from "dexie";
import type { Expense } from "../models/Expense";
import type { Category } from "../models/Category";
import type { PaymentMethod } from "../models/PaymentMethod";
export class ExpenseDatabase extends Dexie {
  expenses!: Table<Expense, number>;
  categories!: Table<Category, number>;
  paymentMethods!: Table<PaymentMethod, number>;

  constructor() {
    super("ExpenseTrackerDB");

    this.version(2).stores({
      expenses: "++id,date,categoryId,paymentMethodId",

      categories: "++id,name",

      paymentMethods: "++id,name",
    });
  }
}
export const db = new ExpenseDatabase();
