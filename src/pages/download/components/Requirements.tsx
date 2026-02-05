import { FC } from "react";
import { useTranslation } from "react-i18next";

const Requirements: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl lg:text-center">
          <h2 className="text-lg leading-8 font-semibold text-gray-900">
            {t("download_page.requirements.title")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-3 lg:max-w-none">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
            <h3 className="font-semibold text-gray-900">Windows</h3>
            <p className="mt-2 text-sm text-gray-600">
              {t("download_page.requirements.windows")}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
            <h3 className="font-semibold text-gray-900">macOS</h3>
            <p className="mt-2 text-sm text-gray-600">
              {t("download_page.requirements.macos")}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
            <h3 className="font-semibold text-gray-900">Linux</h3>
            <p className="mt-2 text-sm text-gray-600">
              {t("download_page.requirements.linux")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
