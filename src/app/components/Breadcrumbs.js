'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

let TBreadCrumbProps = {
    homeElement: null,
    separator: null,
    containerClasses: "",
    listClasses: "",
    activeClasses: "",
    capitalizeLinks: false
}

const Breadcrumbs = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}) => {

    const paths     = usePathname();
    const pathNames = paths.split('/').filter( path => path );

    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
                <Link href="/main" className="breadcrumbs__link">Home</Link>
            </li>
            {
                pathNames.map( (link, index) => {
                    if( index == 0 ) return;
                    let href     = `/${pathNames.slice(0, index + 1).join('/')}`;
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
                    return (
                        <React.Fragment key={index}>
                            <li className="breadcrumbs__item">
                                <Link href={href} className="breadcrumbs__link">{itemLink}</Link>
                            </li>
                        </React.Fragment>
                    )
                })
            }
        </ul>
    )
}

export default Breadcrumbs