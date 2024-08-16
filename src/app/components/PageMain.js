
export default function PageMain({  children_, }) {
    return (
        <section className="content window">
            <div className="content__main window__inner">

                {children_}

                <div className="window__corner window__corner_lt"></div>
                <div className="window__corner window__corner_rt"></div>
                <div className="window__corner window__corner_lb"></div>
                <div className="window__corner window__corner_rb"></div>
            </div>
        </section>
    )
}
