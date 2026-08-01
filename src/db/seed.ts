import { db } from "./database";
export async function seedDatabase() {
  if ((await db.categories.count()) === 0) {
    await db.categories.bulkAdd([
      {
        name: "Food",
        icon: "🍔",
        color: "#EF5350",
        isActive: true,
      },
      {
        name: "Fuel",
        icon: "⛽",
        color: "#42A5F5",
        isActive: true,
      },
      {
        name: "Shopping",
        icon: "🛒",
        color: "#AB47BC",
        isActive: true,
      },
      {
        name: "Bills",
        icon: "🏠",
        color: "#66BB6A",
        isActive: true,
      },
      {
        name: "Medical",
        icon: "🏥",
        color: "#EC407A",
        isActive: true,
      },
    ]);
  }

  if ((await db.paymentMethods.count()) === 0) {
    await db.paymentMethods.bulkAdd([
      { name: "Cash", isActive: true },
      { name: "UPI", isActive: true },
      { name: "Credit Card", isActive: true },
      { name: "Debit Card", isActive: true },
      { name: "Bank Transfer", isActive: true },
    ]);
  }
}
