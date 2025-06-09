const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/test";
main()
.then(()=>{
    console.log("conneted to db");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);

}
const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj, owner: "683d4bac7adac769819c090f"}));
    await Listing.insertMany(initData.data);
    console.log("data was initalized");
};
initDB();
