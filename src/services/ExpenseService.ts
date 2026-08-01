import { db } from "../db/database";
import type { Expense } from "../models/Expense";
class ExpenseService {
  async add(expense: Expense) {
    return await db.expenses.add(expense);
  }

  async getAll() {
    return await db.expenses.orderBy("date").reverse().toArray();
  }

  async delete(id: number) {
    return await db.expenses.delete(id);
  }
}
export default new ExpenseService();
