"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Play } from "lucide-react";

const videos = [
  "/assets/conteudos/SaveClip.App_AQOkcSrYVOypq_R4iMBNhlfIU4A81XxwHTrYCTMP6PlkuAOPzedSS-31Q9dyank8NrkzUZUbRYGW63kk1AKznliwp6odfFr99dtcu70.mp4",
  "/assets/conteudos/SaveClip.App_AQOZ7aR3vmkV2P3RL_aHrzhpRGyvEA3733Lv_2jdxDDKG-9m_-5OMPEODvCGN49f8UrdA5u82vjLYcPpLYJsHqgFUTUfEUAj0y1MK4g.mp4",
  "/assets/conteudos/SaveClip.App_AQPJZbC5geJPhjtutDYzbdolY62HqJX333jaBB6BcS-8iZ0kbD2uMOQWy_4lCgcFBmVUGEUaVBO5aDzhjQIp5qD2bZ-7ZkC9gpsMPiQ.mp4",
  "/assets/conteudos/SaveClip.App_AQOWHrt9ks9ME0gQno8ALmlR2jkuDEzCAJgIqzoxeV8V8FOxNjEMicI6DY8T0oTNNVTI47tXAcuuqzzkVaajcNGlC8U8ccBmSlsPEY0.mp4",
  "/assets/conteudos/SaveClip.App_AQP_I_Cvy7TlEt7uNESwk8fZrVxdHLJdv-BG_dRadprmVnAEUnXLzNYUD4Fnve3WlQCm_EeWQS9P3ch1E5nQ5FH5X3XPCZv973Q8GlI.mp4",
  "/assets/conteudos/SaveClip.App_AQNvc-evTFZEC2_BAKlXJiXfgsEmYMGC7tIhjul1cLqyOSig1nCBVH5PDzX7KCTcOb1vxWHlX76X7JES7fvlRPEHeVG3b42XBZdG7Y8.mp4",
  "/assets/conteudos/SaveClip.App_AQP8U--DJ7PtOhpevcKquUtE7hBkRT-PQbvQHjOEeCNc_cBHzVVDmVRQp2VvqGDvx6D5ot77h7pZfFFmcAy_TsB5bCE8x1Ltp0SoAig.mp4",
  "/assets/conteudos/SaveClip.App_AQMUZslYf_rPbQJdLZuA0S6MEXz2_4CpdiqJ-wj2laI1ddWSrDkD72mVWTKC4_WeqbEp8qWcJLTPa1BUVG0kiiYDBdrK62V8gFDtrUY.mp4",
  "/assets/conteudos/SaveClip.App_AQPuH4lpVkDciz2sCromIwjzZUJ4JO-GzKKg6ZEXwy2IAzZDVnqQpHGTHwdQ0HBJqX9SRuEJ9vyOA3CXVbelFHorAuvnbTcITQL6md8.mp4",
  "/assets/conteudos/SaveClip.App_AQNmjynni4StztBHDWAvBXb3hRJVP68e3yQ16yfbVWJvgAEnMwxzWnyW82Gcll2C7XTQAbSWZZ71m4nktBbQapKskITbfAb9KSHSAaY.mp4",
  "/assets/conteudos/SaveClip.App_AQPFPOSctQq2WMUMbdlJlTyZcUaNM5j8enhWzMeVPtTxK64ZaKlbZV_0jy8qIudDA1qkZIy7TnQh8wazRCxYlYtfqPGv0Oo1LGy8r88.mp4",
  "/assets/conteudos/SaveClip.App_AQPhZMGw_Ocr3xIL5UDsL2PUUNje9ORaVEbBqdHXmzJohYJaX6Gtc2Gr1ppWFCl47V-NJAYHFwqMQL2MuKMRwXE4zdo_0Q98D1-Pahs.mp4",
  "/assets/conteudos/SaveClip.App_AQNwg88YGsyI6e7gp6XScPHLa8ojn0JlYliBQeyT_F1S_-DImY2nohP5lmqFs5iNU9zK-fa6pmbbaV-ixQG022_bQUlz5pEBDh5j8Js.mp4",
  "/assets/conteudos/SaveClip.App_AQN59ngGWVyuACvoIsuJmVpMEWyVW5wMmmWPBj6splKyBMEGyROWEDOaI5mIUbekbuBRI1GensahsBvX6rHUH__ji1upYOxWQmOlw1c.mp4",
  "/assets/conteudos/SaveClip.App_AQPrN1Z9XlTeg50PIWBLoM6sAAH8h2BZ_WWpKvHTo_hFTbkXOuEkkqZSSlv5OPbf07BfUipQrapxAqeNaLeikoMq6Jm6S7MTm18QlAE.mp4",
];

/**
 * Facade Reel — renders a lightweight placeholder (poster + play icon).
 * The actual <video> is mounted only when the slide enters the viewport.
 */
function FacadeReel({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  const [activated, setActivated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mount the video when it first enters the viewport
  useEffect(() => {
    if (isInView && !activated) {
      setActivated(true);
    }
  }, [isInView, activated]);

  // Play/pause based on viewport visibility
  useEffect(() => {
    if (!videoRef.current || !activated) return;

    if (isInView) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, activated]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-neutral-900 overflow-hidden"
    >
      {activated ? (
        /* Real video — only mounted after first intersection */
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        /* Facade — lightweight placeholder */
        <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Play indicator — shown when video is active but paused */}
      {activated && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
}

export function InformativeReels() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, align: "center" });

  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-6xl mx-auto px-container-padding md:px-[8%]">
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
      </div>

      {/* Embla Carousel with Facade Reels */}
      <div
        className="w-full pl-container-padding md:pl-[12%] pr-4 md:pr-0 overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-6">
          {videos.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_85vw] md:flex-[0_0_320px] h-[450px] rounded-xl overflow-hidden shadow-lg bg-black relative group"
            >
              <FacadeReel src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
