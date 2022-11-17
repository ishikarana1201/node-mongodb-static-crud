const dbConnect = require("./mongodb");
const getData = async () => {
  let data = await dbConnect();
  // Get all the data from collection
  data = await data.find({}).toArray();
  // Get filtered data
  // data = await data.find({name:'mobile1'}).toArray();

  console.log(data);
};
getData();
