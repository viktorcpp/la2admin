import LoadingSvg from "./LoadingSvg";
import Link from "next/link";
import React from "react";

export default function ButtonLink(props) {
    const ref_ = React.createRef();
    return (
        <Link href={"#"+props.href} className="charsbuffs__link btn-link" ref={ref_} onClick={() => {props.onClick(props.href, ref_)}}>
            <span className="btn-link__back">
                <span className="btn-link__lbl">{props.label}</span>
                <LoadingSvg />
            </span>
        </Link>
    )
}
