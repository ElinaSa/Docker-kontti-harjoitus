// A MODULE FOR ACCESSING PORTGRESQL DATABASES
// ============================================

// EXTERNAL LIBRARIES
// ------------------

//Class for creating PG-pool objects using PG library
const Pool = require('pg').Pool

//Database connection settings
const connection = {
    host: '127.0.0.1'
}