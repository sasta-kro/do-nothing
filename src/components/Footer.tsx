import { footerLinks, homepageCopy } from "../content/homepage";
import { footerClasses } from "../styles/homepageClasses";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className={footerClasses.shell}>
        <p className={footerClasses.brand}>{homepageCopy.brandName}</p>
        <nav className={footerClasses.nav}>
          {footerLinks.map((footerLink) => (
            <a
              key={footerLink.label}
              href={footerLink.href}
              className={footerClasses.link}
            >
              {footerLink.label}
            </a>
          ))}
        </nav>
        <p className={footerClasses.copyright}>
          {homepageCopy.copyrightLabel}
        </p>
      </div>
    </footer>
  );
}
