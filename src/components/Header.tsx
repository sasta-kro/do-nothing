import { homepageCopy, navigationItems } from "../content/homepage";
import { headerClasses } from "../styles/homepageClasses";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <a href="#top" className={headerClasses.brand}>
        {homepageCopy.brandName}
      </a>
      <div className={headerClasses.navWrap}>
        {navigationItems.map((navigationItem) => (
          <a
            key={navigationItem.label}
            href={navigationItem.href}
            className={headerClasses.navLink}
          >
            {navigationItem.label}
          </a>
        ))}
        <button type="button" className={headerClasses.inquiryButton}>
          Inquire
        </button>
      </div>
    </header>
  );
}
