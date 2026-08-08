"use client";

import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  title: string;
  category?: string;
  description?: string;
}

interface PremiumGalleryProps {
  images: GalleryImage[];
}

export default function PremiumGallery({
  images,
}: PremiumGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full">
      {/* HORIZONTAL GALLERY */}
      <div className="relative">
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            pb-5
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {images.map((image, index) => (
            <motion.article
              key={`${image.src}-${index}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                h-[430px]
                w-[300px]
                flex-shrink-0
                snap-start
                overflow-hidden
                rounded-xl
                bg-gray-100
                sm:h-[480px]
                sm:w-[340px]
                md:h-[540px]
                md:w-[390px]
                lg:h-[580px]
                lg:w-[430px]
              "
            >
              {/* IMAGE */}
              <img
                src={image.src}
                alt={image.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.045]
                "
              />

              {/* DARK GRADIENT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
              />

              {/* TOP NUMBER */}
              <div className="absolute left-5 top-5 md:left-6 md:top-6">
                <span
                  className="
                    inline-flex
                    h-9
                    min-w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-black/10
                    px-2.5
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-6
                  md:p-7
                "
              >
                {/* CATEGORY */}
                {image.category && (
                  <p
                    className="
                      mb-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/65
                    "
                  >
                    {image.category}
                  </p>
                )}

                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    font-medium
                    leading-tight
                    tracking-[-0.025em]
                    text-white
                    md:text-3xl
                  "
                >
                  {image.title}
                </h3>

                {/* DESCRIPTION */}
                {image.description && (
                  <p
                    className="
                      mt-3
                      max-w-[360px]
                      text-sm
                      leading-6
                      text-white/75
                      md:text-base
                      md:leading-7
                    "
                  >
                    {image.description}
                  </p>
                )}

                {/* ARROW */}
                <div
                  className="
                    mt-5
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    text-sm
                    text-white
                    opacity-70
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:border-white/50
                    group-hover:opacity-100
                  "
                >
                  ↗
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gray-300" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Explore our culture
          </span>
        </div>

        <span className="text-xs text-gray-400">
          {images.length} stories
        </span>
      </div>
    </section>
  );
}