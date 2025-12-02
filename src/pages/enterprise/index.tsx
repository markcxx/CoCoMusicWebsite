import "./index.css";

import {
  BookOpen,
  Building2,
  Check,
  KeyRound,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import Footer from "@/components/website/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const EnterprisePage: FC = () => {
  const { t } = useTranslation();
  usePageMeta("enterprise");

  return (
    <div className="enterprise-page">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 container">
          <div className="hero-content">
            <h1 className="text-4xl font-semibold text-gray-900">
              {t("enterprise_page.hero.title")}
            </h1>
            <p className="subtitle">{t("enterprise_page.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>{t("enterprise_page.comparison.title")}</h2>
            <p>{t("enterprise_page.comparison.subtitle")}</p>
          </div>
          <div className="comparison-grid">
            {/* Community Edition */}
            <div className="comparison-card community">
              <div className="card-header">
                <h3>{t("enterprise_page.comparison.table.community")}</h3>
                <div className="pricing">
                  <div className="plan-title">
                    {t(
                      "enterprise_page.comparison.table.pricing_community_title",
                    )}
                  </div>
                  <div className="plan-price">
                    {t(
                      "enterprise_page.comparison.table.pricing_community_price",
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="feature-group">
                  <h4>
                    {t("enterprise_page.comparison.table.license_and_cost")}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.annual_service_fee",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>
                    {t(
                      "enterprise_page.comparison.table.deployment_and_support",
                    )}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.deployment_method",
                        )}
                      </span>
                      <span className="feature-value">
                        {t(
                          "enterprise_page.comparison.table.deployment_single",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.tech_support")}
                      </span>
                      <span className="feature-value">
                        {t(
                          "enterprise_page.comparison.table.support_community",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.system_support")}
                      </span>
                      <span className="feature-value">
                        {t("enterprise_page.comparison.table.system_community")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>{t("enterprise_page.comparison.table.core_features")}</h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.basic_features")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.provider_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.model_management")}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.employee_management",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.shared_knowledge_base",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.permission_control",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.data_backup")}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.assistant_management",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.agent_management")}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.mcp_management")}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.miniprogram_management",
                        )}
                      </span>
                      <span className="feature-value disabled">-</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Lite */}
            <div className="comparison-card startup">
              <div className="card-header">
                <h3>
                  {t("enterprise_page.comparison.table.enterprise_startup")}
                </h3>
                <div className="pricing">
                  <div className="plan-title">
                    {t(
                      "enterprise_page.comparison.table.pricing_startup_title",
                    )}
                  </div>
                  <div className="plan-price">
                    {t(
                      "enterprise_page.comparison.table.pricing_startup_price",
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="feature-group">
                  <h4>
                    {t("enterprise_page.comparison.table.license_and_cost")}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.annual_service_fee",
                        )}
                      </span>
                      <span className="feature-value">
                        {t("enterprise_page.comparison.table.annual_fee_rate")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>
                    {t(
                      "enterprise_page.comparison.table.deployment_and_support",
                    )}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.deployment_method",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />{" "}
                        {t(
                          "enterprise_page.comparison.table.deployment_private",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.tech_support")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />{" "}
                        {t(
                          "enterprise_page.comparison.table.support_dedicated",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.system_support")}
                      </span>
                      <span className="feature-value">
                        {t(
                          "enterprise_page.comparison.table.system_enterprise",
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>{t("enterprise_page.comparison.table.core_features")}</h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.basic_features")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.provider_management",
                        )}
                      </span>
                      <span className="feature-value">
                        {t(
                          "enterprise_page.comparison.table.provider_management_builtin",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.model_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.employee_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.shared_knowledge_base",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.permission_control",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.data_backup")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.assistant_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.agent_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.mcp_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.miniprogram_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Edition */}
            <div className="comparison-card enterprise">
              <div className="card-header">
                <h3>{t("enterprise_page.comparison.table.enterprise")}</h3>
                <div className="pricing">
                  <div className="plan-title">
                    {t(
                      "enterprise_page.comparison.table.pricing_enterprise_title",
                    )}
                  </div>
                  <div className="plan-price">
                    {t(
                      "enterprise_page.comparison.table.pricing_enterprise_price",
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="feature-group">
                  <h4>
                    {t("enterprise_page.comparison.table.license_and_cost")}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.annual_service_fee",
                        )}
                      </span>
                      <span className="feature-value">
                        {t("enterprise_page.comparison.table.annual_fee_rate")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>
                    {t(
                      "enterprise_page.comparison.table.deployment_and_support",
                    )}
                  </h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.deployment_method",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />{" "}
                        {t(
                          "enterprise_page.comparison.table.deployment_private",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.tech_support")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />{" "}
                        {t(
                          "enterprise_page.comparison.table.support_dedicated",
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.system_support")}
                      </span>
                      <span className="feature-value">
                        {t(
                          "enterprise_page.comparison.table.system_enterprise",
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="feature-group">
                  <h4>{t("enterprise_page.comparison.table.core_features")}</h4>
                  <ul>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.basic_features")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.provider_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.model_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.employee_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.shared_knowledge_base",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.permission_control",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.data_backup")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.assistant_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.agent_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t("enterprise_page.comparison.table.mcp_management")}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                    <li>
                      <span className="feature-label">
                        {t(
                          "enterprise_page.comparison.table.miniprogram_management",
                        )}
                      </span>
                      <span className="feature-value check">
                        <Check size={16} />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>{t("enterprise_page.features.title")}</h2>
            <p>{t("enterprise_page.features.subtitle")}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">
                <KeyRound size={32} />
              </div>
              <h3>{t("enterprise_page.features.model_management.title")}</h3>
              <p>
                {t("enterprise_page.features.model_management.description")}
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <BookOpen size={32} />
              </div>
              <h3>{t("enterprise_page.features.knowledge_base.title")}</h3>
              <p>{t("enterprise_page.features.knowledge_base.description")}</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Users size={32} />
              </div>
              <h3>{t("enterprise_page.features.permission_control.title")}</h3>
              <p>
                {t("enterprise_page.features.permission_control.description")}
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Building2 size={32} />
              </div>
              <h3>{t("enterprise_page.features.private_deployment.title")}</h3>
              <p>
                {t("enterprise_page.features.private_deployment.description")}
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <RefreshCw size={32} />
              </div>
              <h3>{t("enterprise_page.features.backend_service.title")}</h3>
              <p>{t("enterprise_page.features.backend_service.description")}</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <ShieldCheck size={32} />
              </div>
              <h3>{t("enterprise_page.features.security_compliance.title")}</h3>
              <p>
                {t("enterprise_page.features.security_compliance.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <div className="section-header">
            <h2>{t("enterprise_page.support.title")}</h2>
            <p>{t("enterprise_page.support.description")}</p>
          </div>
          <div className="support-actions">
            <p className="email">2811016860@qq.com</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnterprisePage;
