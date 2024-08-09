
import Link from 'next/link';

export default function PageNavbarSubRBList() {

    function handleLink(event) {
        location.href = event.currentTarget.attributes['href'].value;
    }

    return (
        <ul className="navbar_sub">
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=20" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">20-29</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=30" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">30-39</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=40" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">40-49</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=50" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">50-59</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=60" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">60-69</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=70" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">70-79</Link>
            </li>
            <li className="navbar__item navbar__item_sub">
                <Link href="/main/raid-bosses?rblvl=80" onClick={ handleLink } className="navbar__item_link navbar__item_link_sub">80-89</Link>
            </li>
        </ul>
    )
}

