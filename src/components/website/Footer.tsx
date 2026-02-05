import React from "react";
import { Trans, useTranslation } from "react-i18next";

import cherryLogo from "@/assets/images/cherry-logo.svg";
import gitcodeIcon from "@/assets/images/icons/gitcode.svg";
import githubIcon from "@/assets/images/icons/github.svg";
import pIcon from "@/assets/images/icons/p.svg";
import rssIcon from "@/assets/images/icons/rss.svg";
// Removed unused social icons
import cherryWxQR from "@/assets/images/resource/cherrywx.png";
import { copyRSSLink } from "@/utils";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="main-footer">
      <div className="widget-section">
        <div className="auto-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo no-hover">
                  <a href="index.html">
                    <img src={cherryLogo} style={{ width: 150 }} alt="" />
                  </a>
                </figure>
                <p>{t("footer.description")}</p>
                <ul className="social-links">
                  <li key="social-github">
                    <a
                      href="https://github.com/CherryHQ/cherry-studio"
                      className="social-icon"
                    >
                      <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                  </li>
                  <li key="social-gitcode">
                    <a
                      href="https://gitcode.com/CherryHQ/cherry-studio"
                      className="social-icon"
                    >
                      <img
                        src={gitcodeIcon}
                        alt="GitCode Icon"
                        className="gitcode-icon"
                      />
                    </a>
                  </li>
                  <li key="social-producthunt">
                    <a
                      href="https://www.producthunt.com/products/cherry-studio"
                      className="social-icon"
                    >
                      <img src={pIcon} alt="P Icon" />
                    </a>
                  </li>
                  <li key="social-rss">
                    <button
                      className="social-icon"
                      onClick={copyRSSLink}
                      type="button"
                    >
                      <img src={rssIcon} alt="RSS Icon" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget links-widget ml_40">
                <div className="widget-title">
                  <h4 style={{ whiteSpace: "nowrap" }}>
                    {t("footer.cherry_studio.title")}
                  </h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li key="link-github">
                      <a
                        href="https://github.com/markcxx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("footer.cherry_studio.github")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>{t("footer.friendly_links.title")}</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li key="fl-cocomusicweb">
                      <a
                        href="https://cocomusic.markqq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CoCoMusIcWeb
                      </a>
                    </li>
                    <li key="fl-markai">
                      <a
                        href="https://chatai.markqq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MarkAI
                      </a>
                    </li>
                    <li key="fl-markqq">
                      <a
                        href="https://www.markqq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        怪兽马尔克博客
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h4>{t("footer.contact_us.title")}</h4>
                </div>
                <div
                  className="mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  <img
                    src={cherryWxQR}
                    alt={t("footer.contact_us.wechat_qr_alt")}
                    style={{ maxWidth: "150px" }}
                  />
                  <p>{t("footer.contact_us.wechat_official_account")}</p>
                  <br />
                </div>
                <p>
                  <Trans
                    i18nKey="footer.contact_us.contact_info"
                    components={[
                      <br key="br" />,
                      <a key="email" href="mailto:markcxx798@163.com">
                        markcxx798@163.com
                      </a>,
                    ]}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="auto-container">
          <div className="copyright">
            <p>
              <Trans
                i18nKey="footer.copyright"
                components={[
                  <a
                    key="icp"
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    蜀ICP备2025161180号
                  </a>,
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
