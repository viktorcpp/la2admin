
import { NextResponse  } from 'next/server';
import excuteQuery from '../../lib/db';

import { charBuffsAdd, charBuffsAddValues, charBuffsRemove } from "./sql-templates";

export async function GET( req, res ) {

    const charId = req.nextUrl.searchParams.get("charid");

    if( charId != 'all' ) {
        const sql_buffs_remove = charBuffsRemove.replaceAll("%charId%", charId);
        const sql_buffs_add    = `${charBuffsAdd}
                                  ${charBuffsAddValues.replaceAll("%charId%", charId)}`;

        const result1 = await excuteQuery(sql_buffs_remove);
        const result2 = await excuteQuery(sql_buffs_add);
    }
    else {
        const result1 = await excuteQuery( "SELECT obj_Id FROM characters" );
        let sql_delete = "DELETE FROM character_skills_save WHERE char_obj_id IN (";
        result1.forEach( (charId, index) => {
            sql_delete += charId.obj_Id;
            if( index != result1.length-1 ) {
                sql_delete += `,`;
            }
        } );
        sql_delete += ")";
        const result2 = await excuteQuery( sql_delete );

        let sql_buffs = charBuffsAdd;
        result1.forEach( (charId, index) => {

            sql_buffs += charBuffsAddValues.replaceAll("%charId%", charId.obj_Id);

            if( index != result1.length-1 )
                sql_buffs += ',';

        });
        sql_buffs += ';';

        const result3 = await excuteQuery( sql_buffs );
    }

    return NextResponse.json({ result: "OK" });

}
