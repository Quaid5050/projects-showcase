require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const mongoose = require("mongoose");
async function run() {
  await mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  const withImg = await mongoose.connection.db.collection("menuitems").find({ image: { $exists: true, $ne: "" } }).toArray();
  console.log(`Items with images: ${withImg.length}`);
  withImg.slice(0, 10).forEach(i => console.log(` - ${i.name} -> ${i.image}`));
  await mongoose.disconnect();
  process.exit(0);
}
run().catch(e => { console.error(e.message); process.exit(1); });
