
import { NextResponse  } from 'next/server'
import excuteQuery from '../../lib/db'

export async function GET( req, res ) {
    const sql_ =
       `SELECT 
        castle.id AS castleId, 
        castle.name AS castleName,
        castle.taxPercent,
        castle.siegeDate,
        castle.siegeDayOfWeek,
        castle.siegeHourOfDay,
        
        clan_data.clan_id AS clanId,
        clan_data.clan_name AS clanName,
        clan_data.clan_level AS clanLevel,
        clan_data.hasCastle,
        clan_data.ally_id AS allyId,
        clan_data.ally_name AS allyName,
        clan_data.leader_id AS leaderId
         
        FROM castle 
        LEFT JOIN clan_data ON clan_data.hasCastle=castle.id`;

        const result = await excuteQuery( sql_ );

        return NextResponse.json({ result });

    try {

        const result = await excuteQuery( sql_ );
        console.log( result );
        return NextResponse.json({ result });

    } catch ( e ) {
        console.error( '\n GET ERROR >>>>> ' + e.message + '\n' );
        return NextResponse.json({ products: e.message });
    }
}
