
"use client"

import PageNavbar           from '../components/navbar.js';
import ButtonExit           from "../components/button-exit";
import CharacterBuffs       from "../components/character-buffs";
import ResetRaidbossesSpawn from "../components/reset-raidbosses-spawn";


export default function Main() {
    return (
        <div className="content__wrap">
            <div className="content__title">Admin Panel</div>
            <div className="group">
                <PageNavbar/>
            </div>
            <div className="group">
                <CharacterBuffs />
            </div>
            <div className="group">
                <ResetRaidbossesSpawn />
            </div>
            <ButtonExit />
        </div>
    );
}