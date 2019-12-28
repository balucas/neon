const assert = require("assert")
const pgp = require("pg-promise")()
const psqlConfig = require("./config")
var db = pgp(psqlConfig)



module.exports= {
    pgp, db
}