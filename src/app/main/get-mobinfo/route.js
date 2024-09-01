
"use server"

import { NextResponse  } from 'next/server'
import excuteQuery from '../../lib/db'

export async function GET( req, res ) {
    try {

        let req_mobid = req.nextUrl.searchParams.get("id");

        let _sql_query = `SELECT
            CAST(npc.id AS CHAR) AS mobId,
            npc.name AS mobName,
            npc.level AS mobLevel,
            npc.type AS mobType,
            CAST(npc.hp AS CHAR) AS mobHp,
            CAST(npc.mp AS CHAR) AS mobMp,
            CAST(npc.str AS CHAR) AS mobStr,
            CAST(npc.con AS CHAR) AS mobCon,
            CAST(npc.dex AS CHAR) AS mobDex,
            CAST(npc.int AS CHAR) AS mobInt,
            CAST(npc.wit AS CHAR) AS mobWit,
            CAST(npc.men AS CHAR) AS mobMen,
            CAST(npc.patk AS CHAR) AS mobPAtk,
            CAST(npc.pdef AS CHAR) AS mobPDef,
            CAST(npc.matk AS CHAR) AS mobMAtk,
            CAST(npc.mdef AS CHAR) AS mobMDef,
            
            CAST(droplist.itemId AS CHAR) AS dropItemId,
            CAST(droplist.min AS CHAR) AS dropMin,
            CAST(droplist.max AS CHAR) AS dropMax,
            CAST(droplist.category AS CHAR) AS dropCategory,
            CAST(droplist.chance AS CHAR) AS dropChance,
            
            COALESCE(weapon.name,armor.name,etcitem.name) AS itemName,
            COALESCE(weapon.iconname,armor.iconname,etcitem.iconname) AS itemIcon

            FROM npc

            LEFT JOIN droplist ON npc.id=droplist.mobId
            LEFT JOIN weapon   ON droplist.itemId=weapon.item_id
            LEFT JOIN armor    ON droplist.itemId=armor.item_id
            LEFT JOIN etcitem  ON droplist.itemId=etcitem.item_id

            WHERE npc.id=${req_mobid}`;

        const result = await excuteQuery( _sql_query );

        //console.log(result);
        //console.log( NextResponse.json({ mobinfo:result }).json() );

        return NextResponse.json({ mobinfo:result });

    } catch ( e ) {
        console.error( '\n GET ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ rboss: e.message });
    }
}
