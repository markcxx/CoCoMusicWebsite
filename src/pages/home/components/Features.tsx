import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";

import beifenIcon from "@/assets/images/icons/beifen.svg";
import duihuaIcon from "@/assets/images/icons/duihua.svg";
import fanyiIcon from "@/assets/images/icons/fanyi.svg";
import huihuaIcon from "@/assets/images/icons/huihua.svg";
import zhishikuIcon from "@/assets/images/icons/zhishiku.svg";
import zhushouIcon from "@/assets/images/icons/zhushou.svg";
import AnimatedBubbles from "@/components/AnimatedBubbles";
import { DOCS_BASE_URL } from "@/utils";

const Features: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="services-section relative overflow-hidden">
      <AnimatedBubbles />
      <div className="auto-container relative z-10">
        {/* <!--Sec Title--> */}
        <div className="sec-title">
          <h2 className="heading_title">{t("features.title")}</h2>
          <div className="text">
            <Trans i18nKey="features.description">
              以下仅为部分功能介绍，更多功能可以下载客户端体验，或在
              <a href={DOCS_BASE_URL} target="_blank" rel="noopener noreferrer">
                官方文档
              </a>
              中了解。
            </Trans>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={duihuaIcon} alt="对话" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.conversation.title")}</a>
              </h3>
              <div className="text">
                {t("features.conversation.description")}
              </div>
              <a href={DOCS_BASE_URL} className="read-more one">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>

          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={huihuaIcon} alt="绘图" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.drawing.title")}</a>
              </h3>
              <div className="text">{t("features.drawing.description")}</div>
              <a href={DOCS_BASE_URL} className="read-more">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>

          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={fanyiIcon} alt="翻译" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.translation.title")}</a>
              </h3>
              <div className="text">
                {t("features.translation.description")}
              </div>
              <a href={DOCS_BASE_URL} className="read-more">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>

          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={zhushouIcon} alt="助手" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.assistants.title")}</a>
              </h3>
              <div className="text">{t("features.assistants.description")}</div>
              <a href={DOCS_BASE_URL} className="read-more">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>

          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={zhishikuIcon} alt="知识库" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.knowledge_base.title")}</a>
              </h3>
              <div className="text">
                {t("features.knowledge_base.description")}
              </div>
              <a href={DOCS_BASE_URL} className="read-more">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>

          {/* <!--Service Style One--> */}
          <div className="service-style-one">
            <div
              className="inner-box wow fadeIn"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="icon-box">
                <img src={beifenIcon} alt="备份" />
              </div>
              <h3>
                <a href={DOCS_BASE_URL}>{t("features.backup.title")}</a>
              </h3>
              <div className="text">{t("features.backup.description")}</div>
              <a href={DOCS_BASE_URL} className="read-more">
                {t("features.learn_more")}
                <span className="icon icon-38"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
