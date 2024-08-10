
import Link from 'next/link';

export default function PageNavbar() {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link href="/main" className="navbar__item_link">Home</Link>
            </li>
            <li className="navbar__item">
                <Link href="/main/raid-bosses" className="navbar__item_link">Raid Bosses</Link>
            </li>
            <li className="navbar__item">
                <Link href="/main/castles" className="navbar__item_link">Castles Status</Link>
            </li>
        </ul>
    )
}
