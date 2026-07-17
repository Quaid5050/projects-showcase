require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const mongoose = require("mongoose");
async function run() {
  await mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  const items = await mongoose.connection.db.collection("menuitems").find({}, { projection: { name: 1, category: 1, image: 1 } }).sort({ category: 1, name: 1 }).toArray();
  items.forEach(i => console.log(`[${i.category}] ${i.name} | img: ${i.image || "none"}`));
  await mongoose.disconnect();
  process.exit(0);
}
run().catch(e => { console.error(e.message); process.exit(1); });
