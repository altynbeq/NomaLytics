import React from 'react'
import { Area, Bar, Pie, ChartsHeader } from '../components'
import { earningDataTwo, ecomPieChartData } from '../data/dummy'

const Managers = () => {
  console.log(ecomPieChartData)
  return (
    <div className='mt-12 flex flex-col justify-center align-center'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center flex-col p-10">
        <div className='flex'>
          <Area id="managersArea" width="950px" height="300px" />
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl w-[400px] h-[520px] mt-10'>
            <div>
              <ChartsHeader mainTitle="" category="Работа менеджеров" title="По обработке заявок" />
            </div>
            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} height="360px" mainTitle="Работа менеджеров" title="Проверочка" categoryTitle="CAT" />
            {/* <Pie id="pie-chart-two" data={ecomPieChartData} legendVisiblity={false} height="260px" /> */}
          </div>
        </div>
        <div className='flex flex-row gap-10'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-[1030px] ml-10 '>
            <Bar height="500px" width="950px"  />
          </div>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl  w-[400px] h-[600px] '>

          </div>
        </div>
        
        <div>
          <div className="flex m-3 flex-wrap justify-center gap-2 mt-5 ">
            {earningDataTwo.map((item) => (
              <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-[18rem]  p-4 pt-9 rounded-2xl ">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Managers