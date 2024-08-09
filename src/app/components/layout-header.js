import Image from "next/image";
import ImageLogo from "../images/logo.png";

export default function PageHeader() {
    return (
        <header className="window">
            <div className="header__main window__inner">
                <a href="#">
                    <Image src={ImageLogo} alt="" priority={true}/>
                </a>
                <div className="window__corner window__corner_lt"></div>
                <div className="window__corner window__corner_rt"></div>
                <div className="window__corner window__corner_lb"></div>
                <div className="window__corner window__corner_rb"></div>
            </div>
        </header>
    )
}
