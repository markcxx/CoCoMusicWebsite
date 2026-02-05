import { FC } from "react";
import { useTranslation } from "react-i18next";

import { VersionData } from "@/hooks/useVersionData";

interface ReleaseNotesProps {
  versionData: VersionData | null;
}

const ReleaseNotes: FC<ReleaseNotesProps> = ({ versionData }) => {
  const { t } = useTranslation();

  if (!versionData?.changelog) return null;

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 sm:p-10">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            {t("download_page.changelog")}
          </h3>
          <div className="prose prose-blue max-w-none">
            <pre className="font-sans whitespace-pre-wrap text-gray-600">
              {versionData.changelog}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;
