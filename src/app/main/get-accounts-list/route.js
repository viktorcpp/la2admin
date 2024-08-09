
import { NextResponse  } from 'next/server'
import excuteQuery from '../../lib/db'

export async function GET( req, res ) {
    //console.log( '11111111111111111111111111' );
    try {

        const result = await excuteQuery( 'SELECT * FROM accounts' );

        //console.log( '>>>>>>>>>> ' );
        //console.log( result );

        return NextResponse.json({ products: result });

    } catch ( e ) {
        console.error( '\n GET ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ products: e.message });
    }
}
