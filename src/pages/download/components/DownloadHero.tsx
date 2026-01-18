import { ArrowRight, Download } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { VersionData } from "@/hooks/useVersionData";

interface DownloadHeroProps {
  versionData: VersionData | null;
  loading: boolean;
  onViewAllClick: () => void;
}

const DownloadHero: FC<DownloadHeroProps> = ({
  versionData,
  loading,
  onViewAllClick,
}) => {
  const { t } = useTranslation();

  // 尝试找到 Windows 安装包，如果找不到则使用 Release 页面链接
  const windowsSetup = versionData?.assets.find((a) =>
    /setup.*\.exe$/i.test(a.name),
  )?.browser_download_url;
  const downloadUrl =
    windowsSetup ||
    (versionData?.version
      ? `https://github.com/markcxx/CoCoMusicRelease/releases/download/${versionData.version}/CoCoMusic-${versionData.version.replace(/^v/, "")}-setup.exe`
      : "#");

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[var(--primary-color)] to-white pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-[var(--theme-color)]">
                {t("download_page.recommended_version")}
              </span>
              <span className="mx-2 text-gray-300">|</span>
              <span>v{versionData?.version || "..."}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t("download_page.hero_title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("download_page.hero_subtitle")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* 主推下载按钮 */}
            <a
              href={downloadUrl}
              className={`group relative flex items-center gap-3 rounded-full bg-[var(--theme-color)] px-8 py-4 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 ${loading ? "pointer-events-none opacity-70" : ""}`}
            >
              <Download className="h-6 w-6 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="text-lg leading-none font-bold">
                  {t("download_page.download_for_windows")}
                </div>
                <div className="mt-1 text-xs opacity-90">
                  {t("download_page.download_btn_subtitle", {
                    version: versionData?.version || "",
                  })}
                </div>
              </div>
            </a>

            {/* 查看全部版本 */}
            <button
              type="button"
              onClick={onViewAllClick}
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all ring-inset hover:bg-gray-50"
            >
              {t("download_page.view_all_downloads")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-8 text-xs text-gray-400">
            {t("download_page.published_at_label")} {versionData?.publishedAt}
          </div>
          <div className="mt-4 text-sm text-amber-600 font-medium px-4">
            {t("download_page.activation_tip")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadHero;
