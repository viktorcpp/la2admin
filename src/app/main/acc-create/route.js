
import {NextResponse} from "next/server";
import crypto         from "crypto";
import excuteQuery from "../../lib/db";

export async function POST( req, res ) {
    try {

        const { login, pass } = await req.json();
        const pass_encoded    = crypto.createHash('sha1').update( pass ).digest( "Base64" );
        const sql_ = `INSERT INTO accounts ( login, password, lastactive, access_level, lastIP, lastServer ) VALUES 
                                           ( '${login}', '${pass_encoded}', 0, 0, '', 0 )`;
        //console.log(sql_);
        const result          = await excuteQuery( sql_ );

        return NextResponse.json({ newacc: "OK" });

    }  catch (e) {
        console.error( '\n POST ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ auth: e.message });
    }
}
