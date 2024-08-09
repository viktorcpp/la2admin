import mysql from 'mysql2/promise';

export default async function excuteQuery( query ) {
    try {

        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "l2jdb",
            port: 43777,
            user: "AdmRunOFF",
            password: "RunOFF",
            multipleStatements: true,
        });
        const values = [];
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();

        return results;

    } catch (error) {
        console.log( 'MYSQL ERROR >>>> ' + error.message );
    }
}