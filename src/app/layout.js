
import "./scss/main.scss";

import PageHeader from './components/layout-header.js';
import PageFooter from './components/layout-footer.js';
import PageMain   from './components/layout-page-main.js';

export const metadata = {
  title:       "LA 2 Admin",
  description: "LA 2 Admin",
};

export default function RootLayout({  children, }) {
  return (
    <html lang="en">
    <body>
      <div className="page_back"></div>
      <div className="page">
        <PageHeader />
          <PageMain children_={children} />
        <PageFooter />
      </div>
    </body>
    </html>
  );
}
