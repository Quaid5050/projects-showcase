require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const mongoose = require("mongoose");

async function run() {
  console.log("URI:", process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  const dbs = await mongoose.connection.db.admin().listDatabases();
  console.log("All DBs:", dbs.databases.map(d => `${d.name}(${d.sizeOnDisk})`).join(", "));
  const count = await mongoose.connection.db.collection("menuitems").countDocuments();
  console.log("MenuItems in current DB:", count);
  if (count > 0) {
    const samples = await mongoose.connection.db.collection("menuitems").find({}).limit(3).toArray();
    samples.forEach(s => console.log(" -", s.name));
  }
  await mongoose.disconnect();
  process.exit(0);
}
run().catch(e => { console.error(e.message); process.exit(1); });
