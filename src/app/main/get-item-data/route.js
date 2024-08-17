
"use server"

import excuteQuery from "../../lib/db";
import {NextResponse} from "next/server";

export async function GET( req, res ) {

    const itemId = req.nextUrl.searchParams.get("itemid");

    const sql_ =`
        SELECT
            weapon.item_id         AS itemId,
            weapon.name            AS itemName,
            weapon.weight          AS itemWeight,
            weapon.crystal_type    AS crystalType,
            weapon.crystal_count   AS crystalCount,
            weapon.price           AS price,
            weapon.iconname        AS iconName,

            ''                    AS pDef,
            ''                    AS mDef,
            ''                    AS mpBonus,

            CAST(weapon.soulshots       AS CHAR) AS soulCount,
            CAST(weapon.spiritshots     AS CHAR) AS spirCount,
            CAST(weapon.critical        AS CHAR) AS critValue,
            CAST(weapon.shield_def      AS CHAR) AS shieldDef,
            CAST(weapon.shield_def_rate AS CHAR) AS shieldDefRate,
            CAST(weapon.atk_speed       AS CHAR) AS atkSpeed,
            CAST(weapon.p_dam           AS CHAR) AS pDam,
            CAST(weapon.m_dam           AS CHAR) AS mDam,
            CAST(weapon.mp_consume      AS CHAR) AS mpConsume

        FROM weapon
        WHERE weapon.item_id=${itemId}

        UNION ALL

        SELECT
            etcitem.item_id       AS itemId,
            etcitem.name          AS itemName,
            etcitem.weight        AS itemWeight,
            etcitem.crystal_type  AS crystalType,
            etcitem.crystal_count AS crystalCount,
            etcitem.price         AS price,
            etcitem.iconname      AS iconName,

            ''                    AS pDef,
            ''                    AS mDef,
            ''                    AS mpBonus,

            ''                    AS soulCount,
            ''                    AS spirCount,
            ''                    AS critValue,
            ''                    AS shieldDef,
            ''                    AS shieldDefRate,
            ''                    AS atkSpeed,
            ''                    AS pDam,
            ''                    AS mDam,
            ''                    AS mpConsume

        FROM etcitem
        WHERE etcitem.item_id=${itemId}

        UNION ALL

        SELECT
            armor.item_id       AS itemId,
            armor.name          AS itemName,
            armor.weight        AS itemWeight,
            armor.crystal_type  AS crystalType,
            armor.crystal_count AS crystalCount,
            armor.price         AS price,
            armor.iconname      AS iconName,

            CAST(armor.p_def    AS CHAR) AS pDef,
            CAST(armor.m_def    AS CHAR) AS mDef,
            CAST(armor.mp_bonus AS CHAR) AS mpBonus,

            ''                    AS soulCount,
            ''                    AS spirCount,
            ''                    AS critValue,
            ''                    AS shieldDef,
            ''                    AS shieldDefRate,
            ''                    AS atkSpeed,
            ''                    AS pDam,
            ''                    AS mDam,
            ''                    AS mpConsume
        FROM armor
        WHERE armor.item_id=${itemId}
    `;

    const result = await excuteQuery( sql_ );
    console.log( result );

    return NextResponse.json({ itemInfo:result });
}
