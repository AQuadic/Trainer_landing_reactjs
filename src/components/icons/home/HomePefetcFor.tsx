import CrossFit from '../../../../public/images/home/CrossFit.jpg'
import gym from '../../../../public/images/home/gym.jpg'
import FitnessTraining from '../../../../public/images/home/FitnessTraining.jpg'
import arts from '../../../../public/images/home/arts.jpg'
import SportsAcademies from '../../../../public/images/home/SportsAcademies.jpg'
import SportsFederations from '../../../../public/images/home/SportsFederations.jpg'
import EquestrianClubs from '../../../../public/images/home/EquestrianClubs.jpg'
import yoga from '../../../../public/images/home/Yoga.jpg'
import { useTranslation } from 'react-i18next'

const HomePefetcFor = () => {
    const { t } = useTranslation("hero");
    const SportsData = [
        {
            image: CrossFit,
            text: t("crossfit"),
        },
        {
            image: gym,
            text: t("gym"),
        },
        {
            image: FitnessTraining,
            text: t("fitness_training"),
        },
        {
            image: arts,
            text: t("martial_arts"),
        },
        {
            image: SportsAcademies,
            text: t("sports_academies"),
        },
        {
            image: SportsFederations,
            text: t("sports_federations"),
        },
        {
            image: EquestrianClubs,
            text: t("equestrian_clubs"),
        },
        {
            image: yoga ,
            text: t("yoga"),
        },
    ]
    return (
        <section className="my-17">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">
                {t("perfect_for")}
            </h2>
            <p className="text-[#565555] md:text-2xl text-xs font-medium leading-[150%] md:mt-6 mt-3 text-center">
                {t("perfect_for_desc")}
            </p>
            
            <div className='md:mt-14 mt-4 grid md:grid-cols-4 grid-cols-2 gap-6 container'>
                {SportsData.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.image} className='md:w-70.5 w-40 md:h-75.5 h-43.25 object-cover rounded-4xl'/>
                            <div className='relative w-full h-14 bg-[#FFFFFF80] rounded-br-4xl rounded-bl-4xl -mt-14 z-10 flex items-center justify-center'>
                                <p className='text-[#FEFEFE] md:text-xl text-sm font-semibold'>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HomePefetcFor
