
import {NextResponse} from "next/server";
import excuteQuery from "../../lib/db";

export async function GET( req, res ) {
    try {

        const sql_ = "UPDATE raidboss_spawnlist SET respawn_time=0";

        const result = await excuteQuery( sql_ );
        console.log( "result >>>>>> " + result );

        return NextResponse.json({ rbreset: result });

    }  catch (e) {
        console.error( '\n GET ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ rbreset: e.message });
    }
}
