
"use server"

import {NextResponse} from "next/server";

import excuteQuery from "../../lib/db";

export async function GET(req, res ) {

    try {

        let req_mobid = req.nextUrl.searchParams.get("id");

        const sql_ = `
            SELECT spawnlist.npc_templateid AS mobId,
                   spawnlist.locx           AS posX,
                   spawnlist.locy           AS posY,
                   spawnlist.locz           AS posZ

            FROM spawnlist
            WHERE spawnlist.npc_templateid=${req_mobid} 

            UNION ALL

            SELECT raidboss_spawnlist.boss_id AS mobId,
                   raidboss_spawnlist.loc_x   AS posX,
                   raidboss_spawnlist.loc_y   AS posY,
                   raidboss_spawnlist.loc_z   AS posZ

            FROM raidboss_spawnlist
            WHERE raidboss_spawnlist.boss_id=${req_mobid} 
            `;

        const result = await excuteQuery( sql_ );

        console.log(result);

        return NextResponse.json({ result });

    } catch ( e ) {
        console.error( '\n GET MOBLOC ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ rboss: e.message });
    }
}
