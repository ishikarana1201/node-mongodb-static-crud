const dbConnect = require('./mongodb');

const deleteData = async()=>{
    console.log("Delete Function");
    let data = await dbConnect();
    // Delete single record
    // data = await data.deleteOne({name:"data"});
    // Delete multiple records
    data = await data.deleteMany({name:"sfdsfes"});
    console.log(data);
}
deleteData();