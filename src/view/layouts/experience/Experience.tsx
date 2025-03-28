import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Experience() {
  const containerExperienceRef = useRef<HTMLDivElement>(null);
  const containerTitleAllExperience = useRef<HTMLDivElement>(null);

  const experienceToShow = [
    {
      name: "ForeLegal",
      ocupation: "FullStack Developer",
      time: "Out 2024 - presente",
    },
    {
      name: "X Software House",
      ocupation: "FullStack Developer",
      time: "Ago 2024 - Nov 2024",
    },
  ];

  useGSAP(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerExperienceRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerExperienceRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      const projects = gsap.utils.toArray<HTMLDivElement>(".experience");
      projects.forEach((project, index) => {
        tl.from(
          project,
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          index * 0.5
        ).to(
          project,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          index * 0.5
        );
      });
      gsap.fromTo(
        containerTitleAllExperience.current,
        {
          y: -50,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: containerTitleAllExperience.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
      const LineProject = gsap.utils.toArray<HTMLDivElement>(".lineExperience");
      LineProject.forEach((line, index) => {
        tl2
          .from(
            line,
            {
              scaleX: 0,
            },
            index * 0.5
          )
          .to(
            line,
            {
              scaleX: 1,
            },
            index * 0.5
          );
      });
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <div className="mb-[7rem]" id="experienceSection">
        <div className="flex flex-col gap-[3rem]">
          <div
            ref={containerTitleAllExperience}
            className="flex items-center gap-4"
          >
            <Image
              src={"/iconsAnimated/build.gif"}
              alt="gif build"
              width={40}
              height={40}
              unoptimized
            />

            <span className="text-[1.2rem] font-inter text-subtitleColor">
              EXPERIÊNCIA
            </span>
          </div>

          <div
            ref={containerExperienceRef}
            className="flex gap-[3rem] flex-col flex-wrap"
          >
            {experienceToShow.map((item, index: number) => {
              return (
                <div
                  className="experience flex flex-col gap-2"
                  key={`div-experience-${index}`}
                >
                  <span className="text-sm font-inter text-subtitleColor">
                    {item.name}
                  </span>

                  <div className="flex gap-4">
                    <span className="text-4xl sm:text-7xl font-anton text-lightText">
                      {item.ocupation}
                    </span>
                  </div>

                  <span className="text-sm font-inter text-subtitleColor">
                    {item.time}
                  </span>

                  <div className="lineExperience w-full h-[1px]">
                    <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
