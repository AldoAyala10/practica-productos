require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }

    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:process.env.HOSTMYSQL || "bfoafarixp6xzggxrqbu-mysql.services.clever-cloud.com",
                user:process.env.USERMYSQL || "ukav921s47u8mzcx",
                password:process.env.PASSWORDMYSQL || "r5eOK6FAuWDiE93R889V",
                database:process.env.DATABASEMYSQL || "bfoafarixp6xzggxrqbu",
                port:process.env.PORTMYSQL || 3306
            });
            console.log("Conectado a MySql");
        } catch (error) {
            console.error("Error al conectar con MySql "+error);
        }
    }

    async cerrarConexion(){
        try {
            await this.conexion.end();
            console.log("Conexion de MySQL cerrada");
        } catch (error) {
            console.error("Error al desconectar de MySQL "+error);
        }
    }
}

module.exports=ConectarBD;

