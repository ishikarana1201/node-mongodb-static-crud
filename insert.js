const dbConnect = require("./mongodb");

const insertData = async () => {
  console.log("Insert function");
  let data = await dbConnect();

  //   This insert function is deprecated so we can not use use use "insertOne" instade
  //   data = await data.insert({name:"data",brand:"data",category:"mobile",price:100})

  // Insert Single data
  // data = await data.insertOne({"name":"testtt","brand":"test","category":"mobile","price":233})

  //   Insert Multiple data
  //   data = await data.insertMany([
  //     { name: "mobile1", brand: "sfefr", category: "mobile", price: 1000 },
  //     { name: "sfdsfes", brand: "test", category: "mobile", price: 2000 },
  //   ]);
};
insertData();
