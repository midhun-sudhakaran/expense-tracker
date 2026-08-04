import { db } from "../db/database";
import type { RecurringBill } from "../models/RecurringBill";
class RecurringBillService {
async getAll() {
    return await db.recurringBills
        .orderBy("dueDay")
        .toArray();
}

async add(bill: RecurringBill) {
    return await db.recurringBills.add(bill);
}

async update(bill: RecurringBill) {

    if (!bill.id)
        return;

    return await db.recurringBills.put(bill);
}

async delete(id: number) {
    return await db.recurringBills.delete(id);
}

}
export default new RecurringBillService();