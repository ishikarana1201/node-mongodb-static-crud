const dbConnect = require('./mongodb');

const updateData =async ()=>{
    console.log("Update function")
    let data = await dbConnect();
    // Update single data
    data = await data.updateOne({name:"data"},{$set:{price:2022}})
    // Update multiple data
    data = await data.updateMany({name:"data"},{$set:{price:2022}})
}
updateData();