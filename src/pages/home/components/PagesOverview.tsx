import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type OverviewKey = 'recommend' | 'playlist' | 'lyrics_visual' | 'recommend_dark' | 'desktop_lyrics'

const keys: OverviewKey[] = ['recommend', 'playlist', 'lyrics_visual', 'recommend_dark', 'desktop_lyrics']

const PagesOverview: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-12 text-center text-2xl font-semibold text-gray-900 md:text-4xl">
          {t('pages_overview.title')}
        </h3>

        <div className="space-y-14">
          {keys.map((key, idx) => {
            const isImageLeft = idx % 2 === 0
            const title = t(`pages_overview.items.${key}.title`)
            const desc = t(`pages_overview.items.${key}.description`)
            const placeholder = t(`pages_overview.items.${key}.image`)

            return (
              <div key={key} className="grid items-center gap-8 md:grid-cols-2">
                {/* Image / Placeholder */}
                <div className={`${isImageLeft ? '' : 'md:order-2'}`}>
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm">
                    <div className="aspect-[16/9] w-full">
                      <img src={placeholder} alt={title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                </div>

                {/* Description */}
                <div className={`${isImageLeft ? '' : 'md:order-1'}`}>
                  <h4 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">{title}</h4>
                  <p className="text-gray-600 md:text-lg">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PagesOverview
