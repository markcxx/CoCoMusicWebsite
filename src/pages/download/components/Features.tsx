import { Box, Lock, Paintbrush, Zap } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Features: FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t("download_page.features.privacy.title"),
      description: t("download_page.features.privacy.desc"),
      icon: Lock,
    },
    {
      name: t("download_page.features.performance.title"),
      description: t("download_page.features.performance.desc"),
      icon: Zap,
    },
    {
      name: t("download_page.features.extensions.title"),
      description: t("download_page.features.extensions.desc"),
      icon: Box,
    },
    {
      name: t("download_page.features.ui.title"),
      description: t("download_page.features.ui.desc"),
      icon: Paintbrush,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base leading-7 font-semibold text-[var(--theme-color)]">
            CoCoMusic
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("download_page.features.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("download_page.features.subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md"
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-[var(--theme-color)]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
