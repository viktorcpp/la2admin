
export default function LoadingSvg () {
    return (
        <svg className="btn-link__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" data-inject-url="/images/fade-stagger-squares.svg" loading="lazy">
            <rect className="svg__fill svg__stroke svg_strokeWidth" fill="#fff" stroke="#fff" strokeWidth="15" width="30" height="30" x="25" y="85">
                <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
            </rect>
            <rect className="svg__fill svg__stroke svg_strokeWidth" fill="#fff" stroke="#fff" strokeWidth="15" width="30" height="30" x="85" y="85">
                <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
            </rect>
            <rect className="svg__fill svg__stroke svg_strokeWidth" fill="#fff" stroke="#fff" strokeWidth="15" width="30" height="30" x="145" y="85">
                <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
            </rect>
        </svg>
    )
}
