
import { NextResponse  } from 'next/server'
import excuteQuery from '../../lib/db'

export async function GET( req, res ) {
    try {

        let req_level_from = req.nextUrl.searchParams.get("rblvl");
            req_level_from = req_level_from == null ? 20 : req_level_from;
            req_level_from = Math.max( 20, req_level_from );
            req_level_from = Math.min( 80, req_level_from );
        let req_level_upto = parseInt(req_level_from) + 10;

        let _sql_query = `SELECT 
            npc.id, npc.level, npc.name, 
            droplist.itemId, 
            COALESCE(weapon.name,armor.name,etcitem.name) AS itemname,
            droplist.min, droplist.max, 
            droplist.chance 
            FROM npc 
            LEFT JOIN droplist ON npc.id=droplist.mobid 
            LEFT JOIN weapon   ON droplist.itemId=weapon.item_id 
            LEFT JOIN armor    ON droplist.itemId=armor.item_id 
            LEFT JOIN etcitem  ON droplist.itemId=etcitem.item_id 
            
            WHERE npc.type='L2RaidBoss' AND level>=${req_level_from} AND level<${req_level_upto} 
            ORDER BY npc.level, npc.name, itemname ASC
            `;

        const result = await excuteQuery( _sql_query );

        return NextResponse.json({ rboss: result });

    } catch ( e ) {
        console.error( '\n GET ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ rboss: e.message });
    }
}
