
import React      from "react";
import ButtonLink from "./ButtonLink";

export default function ResetRaidbossesSpawn() {

    async function HandleLink(href, ref_) {

        if( ref_ != null )
            ref_.current.classList.add('btn-link--loading');

        const response = await fetch( '/main/reset-rb-spawns', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        } );

        if( ref_ != null )
            ref_.current.classList.remove('btn-link--loading');

    }

    return (
        <div className="reset_rb_spawn">
            <h3>Raid Bosses</h3>
            <ButtonLink href="#" onClick={HandleLink} label="Reset RB Spawns" />
        </div>
    )
}
