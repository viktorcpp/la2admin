
"use client"

import {useSearchParams} from "next/navigation";
import {useState} from "react";
import PageNavbar from "../../components/PageNavbar";
import SearchBar from "../../components/SearchBar";
import CharacterBuffs from "../../components/CharacterBuffs";
import ResetRaidbossesSpawn from "../../components/ResetRaidbossesSpawn";
import AccountCreate from "../../components/AccountCreate";
import ButtonExit from "../../components/ButtonExit";

export default function PageSearch() {

    const [dataResponse, setDataResponse] = useState([]);
    const search = useSearchParams().get("search");

    return (
        <div className="content__wrap">
            <div className="content__title">Admin Panel</div>
            <div className="group">
                <PageNavbar/>
            </div>
            <div className="group">
                <SearchBar/>
            </div>
            <div className="group">
                SEARCH VAL: {search}
            </div>
            <ButtonExit/>
        </div>
    )
}
