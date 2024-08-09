
export default function PageFooter() {
    const year_ = new Date().getFullYear();
    return (
        <footer className="window">
            <div className="footer__main window__inner">
                Copyright &copy; {year_} No Name, Inc.

                <div className="window__corner window__corner_lt"></div>
                <div className="window__corner window__corner_rt"></div>
                <div className="window__corner window__corner_lb"></div>
                <div className="window__corner window__corner_rb"></div>
            </div>
        </footer>
    )
}
