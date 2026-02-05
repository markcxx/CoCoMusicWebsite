import { Apple, Download, Monitor, Terminal } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { DownloadUrls } from "@/hooks/useVersionData";

interface PlatformSelectorProps {
  downloadUrls: DownloadUrls | null;
  loading: boolean;
}

const PlatformSelector: FC<PlatformSelectorProps> = ({
  downloadUrls,
  loading,
}) => {
  const { t } = useTranslation();

  const platforms = [
    {
      key: "windows",
      icon: Monitor,
      title: "Windows",
      desc: t("download_page.windows_package"),
      data: downloadUrls?.windows,
    },
    {
      key: "macos",
      icon: Apple,
      title: "macOS",
      desc: t("download_page.macos_package"),
      data: downloadUrls?.macos,
    },
    {
      key: "linux",
      icon: Terminal,
      title: "Linux",
      desc: t("download_page.linux_package"),
      data: downloadUrls?.linux,
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.key}
              className="flex flex-col justify-between rounded-3xl border-t-4 border-t-[var(--theme-color)] bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg leading-8 font-semibold text-gray-900">
                    {platform.title}
                  </h3>
                  <platform.icon
                    className="h-8 w-8 text-[var(--theme-color)]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {platform.desc}
                </p>
                <div className="mt-6 space-y-4">
                  {loading ? (
                    <div className="space-y-3">
                      <div className="h-10 w-full animate-pulse rounded bg-gray-100"></div>
                      <div className="h-10 w-full animate-pulse rounded bg-gray-100"></div>
                    </div>
                  ) : (
                    platform.data?.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-between rounded-lg border border-[var(--theme-color)]/20 bg-[var(--primary-color)]/50 px-4 py-3 text-sm font-semibold text-[var(--theme-color)] transition-all hover:bg-[var(--theme-color)] hover:text-white"
                      >
                        <span className="mr-2 truncate">{item.desc}</span>
                        <Download className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-y-0.5" />
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
