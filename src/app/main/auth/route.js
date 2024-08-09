
import {NextRequest, NextResponse} from "next/server";
import excuteQuery from '../../lib/db';
import crypto from "crypto";

export async function POST( req, res ) {
    try {
        const { login, pass } = await req.json();
        const pass_encoded    = crypto.createHash('sha1').update( pass ).digest( "Base64" );
        const result          = await excuteQuery( `SELECT password FROM accounts WHERE login='${login}'` );

        if( result == '' ) {
            return NextResponse.json({ auth: "ERROR" });
        } else {
            if( {res:result}.res[0].password == pass_encoded )
                return NextResponse.json({ auth: "OK" });
        }

        return NextResponse.json({ auth: "ERROR" });

    }  catch (e) {
        console.error( '\n POST ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ auth: e.message });
    }
}
