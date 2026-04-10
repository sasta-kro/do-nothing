import { homepageCopy, navigationItems } from "../content/homepage";

export function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="site-header__brand">
        {homepageCopy.brandName}
      </a>
      <div className="site-header__nav">
        {navigationItems.map((navigationItem) => (
          <a
            key={navigationItem.label}
            href={navigationItem.href}
            className="site-header__link"
          >
            {navigationItem.label}
          </a>
        ))}
        <button type="button" className="site-header__button">
          Inquire
        </button>
      </div>
    </header>
  );
}
