import { getRanking } from '@/http/api'
import Image from 'next/image'
import medal_bronze from '../../../assets/medal_bronze.svg'
import medal_gold from '../../../assets/medal_gold.svg'
import medal_silver from '../../../assets/medal_silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      {ranking.map((ranking, index) => {
        const rankingPosition = index + 1
        return (
          <div className="space-y-4" key={ranking.id}>
            <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {ranking.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {ranking.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={medal_gold}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={medal_silver}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={medal_bronze}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
