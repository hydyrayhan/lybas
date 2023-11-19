import { t } from "i18next";
import React from "react";

function AboutUs() {

  return (
    <>
      <div className="aboutUs container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="aboutUs__title w-[50%] m-auto text-[40px] capitalize font-light">{t('aboutUsMain')}</h1>

        <div className="aboutUs__middle my-[40px] flex justify-between items-center">

          <div className="aboutUs__middle__part w-[20%]">
            <h1 className="aboutUs__middle__part__title text-[16px] capitalize font-semibold">{t('aboutUsTitle1')}</h1>
            <p className="text-[16px] capitalize">
              {t('aboutUsBody1')}
            </p>
          </div>

          <div className="aboutUs__middle__part w-[20%]">
            <h1 className="aboutUs__middle__part__title text-[16px] capitalize font-semibold">{t('aboutUsTitle2')}</h1>
            <p className="text-[16px] capitalize">
              {t('aboutUsBody2')}
            </p>
          </div>

          <div className="aboutUs__middle__part w-[20%]">
            <h1 className="aboutUs__middle__part__title text-[16px] capitalize font-semibold">{t('aboutUsTItle3')}</h1>
            <p className="text-[16px] capitalize">
              {t('aboutUsBody3')}
            </p>
          </div>

          <div className="aboutUs__middle__part w-[20%]">
            <h1 className="aboutUs__middle__part__title text-[16px] capitalize font-semibold">{t('aboutUsTItle4')}</h1>
            <p className="text-[16px] capitalize">
              {t('aboutUsBody4')}
            </p>
          </div>

        </div>

        <div className="aboutUs__bottom mb-[50px]">
          {/* <h3 className="aboutUs__bottom__title text-[16px]">{t('aboutUsTitle4')}</h3> */}

          <p className="text-[16px]">
            {t('aboutUsBody5')}
          </p>
        </div>
      </div>
    </>
  )

}

export default AboutUs
