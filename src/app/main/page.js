
"use client"

import PageNavbar           from '../components/PageNavbar.js';
import ButtonExit           from "../components/ButtonExit";
import CharacterBuffs       from "../components/CharacterBuffs";
import ResetRaidbossesSpawn from "../components/ResetRaidbossesSpawn";
import AccountCreate        from "../components/AccountCreate";
import SearchBar            from "../components/SearchBar";


export default function Main() {
    return (
        <div className="content__wrap">
            <div className="content__title">Admin Panel</div>
            <div className="group">
                <PageNavbar/>
            </div>
            <div className="group">
                <SearchBar />
            </div>
            <div className="group">
                <CharacterBuffs/>
            </div>
            <div className="group">
                <ResetRaidbossesSpawn/>
            </div>
            <div className="group">
                <AccountCreate />
            </div>
            <ButtonExit/>
        </div>
    );
}