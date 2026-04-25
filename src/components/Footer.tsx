import { footerLinks, homepageCopy } from "../content/homepage";
import { FooterDocumentLink } from "./FooterDocumentLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__shell">
        <p className="site-footer__brand">{homepageCopy.brandName}</p>
        <nav className="site-footer__nav">
          {footerLinks.map((footerLink) => (
            footerLink.documentPopover ? (
              <FooterDocumentLink
                key={footerLink.label}
                footerLink={footerLink}
              />
            ) : (
              <a
                key={footerLink.label}
                href={footerLink.href}
                className="site-footer__link"
              >
                {footerLink.label}
              </a>
            )
          ))}
        </nav>
        <p className="site-footer__copyright">
          {homepageCopy.copyrightLabel}
        </p>
      </div>
    </footer>
  );
}
