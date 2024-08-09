
import { NextResponse  } from 'next/server';
import excuteQuery from '../../lib/db';

export async function GET( req, res ) {

    const sql_ = 'SELECT char_name, obj_Id FROM characters';

    const result = await excuteQuery( sql_ );

    return NextResponse.json({ charsList: result });

}