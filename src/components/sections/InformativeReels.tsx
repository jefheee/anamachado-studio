"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const videos = [
  "/assets/conteudos/SaveClip.App_AQMUZslYf_rPbQJdLZuA0S6MEXz2_4CpdiqJ-wj2laI1ddWSrDkD72mVWTKC4_WeqbEp8qWcJLTPa1BUVG0kiiYDBdrK62V8gFDtrUY.mp4",
  "/assets/conteudos/SaveClip.App_AQN59ngGWVyuACvoIsuJmVpMEWyVW5wMmmWPBj6splKyBMEGyROWEDOaI5mIUbekbuBRI1GensahsBvX6rHUH__ji1upYOxWQmOlw1c.mp4",
  "/assets/conteudos/SaveClip.App_AQNmjynni4StztBHDWAvBXb3hRJVP68e3yQ16yfbVWJvgAEnMwxzWnyW82Gcll2C7XTQAbSWZZ71m4nktBbQapKskITbfAb9KSHSAaY.mp4",
  "/assets/conteudos/SaveClip.App_AQNvc-evTFZEC2_BAKlXJiXfgsEmYMGC7tIhjul1cLqyOSig1nCBVH5PDzX7KCTcOb1vxWHlX76X7JES7fvlRPEHeVG3b42XBZdG7Y8.mp4",
  "/assets/conteudos/SaveClip.App_AQNwg88YGsyI6e7gp6XScPHLa8ojn0JlYliBQeyT_F1S_-DImY2nohP5lmqFs5iNU9zK-fa6pmbbaV-ixQG022_bQUlz5pEBDh5j8Js.mp4",
  "/assets/conteudos/SaveClip.App_AQOWHrt9ks9ME0gQno8ALmlR2jkuDEzCAJgIqzoxeV8V8FOxNjEMicI6DY8T0oTNNVTI47tXAcuuqzzkVaajcNGlC8U8ccBmSlsPEY0.mp4",
];

export function InformativeReels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Play only if it is visible
            video.play().catch(() => {
              // Ignore play errors (e.g., autoplay prevented)
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, // Play when 60% of the video is visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-container-padding bg-surface-container-lowest md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Conteúdos e Dicas
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Acompanhe Nosso Trabalho
          </h2>
          <p className="font-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Dicas diárias, bastidores do estúdio e conteúdos exclusivos para quem ama o universo da beleza.
          </p>
        </motion.div>

        {/* Horizontal Carousel */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((src, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[80vw] md:w-[300px] lg:w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-black relative"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
