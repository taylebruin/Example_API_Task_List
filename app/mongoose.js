const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLAS_CONNECTION_STRING)
    console.log("Database connected successfully")
}
/*

This file is for initializing mongoose

*/