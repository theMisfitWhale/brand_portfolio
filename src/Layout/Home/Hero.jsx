import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { Player } from '@lottiefiles/react-lottie-player';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

import likeCrazyLottie from '../../lottie/like-cray.json';

export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    tl.add(() => likeCrazyLottieRef?.current?.play(), 0.8).to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      1.2
    );

    return () => {};
  }, []);

  return (
    <div className=" min-h-screen pt-[120px] pb-[90px] lg:py-[180px]">
      <div className="h_container font_apoc flex flex-col items-center  px-2 pb-[20vw]  lg:pb-[4vw]">
        <h1 className="h_title  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              You&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]">
              <FlowerLogo />
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Can
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Only
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Build&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Brands&nbsp;
            </span>
          </span>
        </h1>
        <h1 className="h_title relative  w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              People&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Love
            </span>
          </span>
        </h1>
        <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-orange will-change-transform ">
              By Loving
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Your
            </span>
          </span>
        </h1>
        <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Audience
            </span>
          </span>
          <div
            ref={heroInfiniteRef}
            className="font_aeonik absolute bottom-[-35vw] left-[25%] ml-10 -mr-10 h-8 w-40  overflow-hidden rounded-full border border-black text-xs font-normal uppercase opacity-0  md:left-[40%]   md:h-14  md:w-52 md:text-xl lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] lg:w-[16vw]  lg:leading-10 "
          >
            <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
            </div>
          </div>
        </h1>
        <div className="scale-80 rotate-[4.24deg] lg:-translate-y-2 lg:-translate-x-8 lg:scale-105 ">
          <Player
            src={likeCrazyLottie}
            ref={likeCrazyLottieRef}
            keepLastFrame={true}
            loop={false}
          />
        </div>
      </div>
    </div>
  );
};
