import Link from "next/link";

import type {ModularPageSection} from "./types";

import EmblaCarousel from "../shared/carousel";
import {SanityImage} from "../shared/sanity-image";
import Body from "../shared/typography/body";

//TODO: find solution to remove scrol on the desktop
export default function CollectionList(
  props: ModularPageSection<"section.collectionList">,
) {
  const slides = props.cards?.map((collection) => (
    <CollectionCard key={collection._key} {...collection} />
  ));
  return (
    <EmblaCarousel
      showButtons={false}
      showProgress={true}
      slides={slides}
      title="Shop our cookies"
    />
  );
}

function CollectionCard({
  cta,
  image,
}: NonNullable<ModularPageSection<"section.collectionList">["cards"]>[number]) {
  if (!cta?.link) return null;
  return (
    <Link
      className="group relative h-full w-full cursor-pointer rounded-lg"
      href={cta?.link}
    >
      {image ? (
        <SanityImage
          className="min-h-[562px] w-[380px] rounded-lg object-cover object-center lg:min-h-[604px] lg:w-[453px]"
          data={image}
        />
      ) : (
        <div className="h-full w-full bg-secondary" />
      )}
      {cta && (
        <div className="absolute bottom-lg left-1/2 flex -translate-x-1/2 items-center justify-center">
          <div className="relative flex h-[80px] w-fit items-center justify-center px-2xl">
            <svg
              className="absolute left-1/2 top-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2"
              fill="none"
              height="80"
              viewBox="0 0 305 80"
              width="305"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-background group-hover:fill-accent"
                d="M303.454 39.8975C303.454 44.995 299.503 50.0477 291.856 54.7901C284.25 59.5072 273.193 63.7827 259.464 67.3839C232.017 74.5834 194.059 79.045 152.102 79.045C110.145 79.045 72.1868 74.5834 44.74 67.3839C31.011 63.7827 19.9546 59.5072 12.3482 54.7901C4.70131 50.0477 0.75 44.995 0.75 39.8975C0.75 34.8001 4.70131 29.7473 12.3482 25.005C19.9546 20.2878 31.011 16.0124 44.74 12.4112C72.1868 5.21167 110.145 0.75 152.102 0.75C194.059 0.75 232.017 5.21167 259.464 12.4112C273.193 16.0124 284.25 20.2878 291.856 25.005C299.503 29.7473 303.454 34.8001 303.454 39.8975Z"
                stroke="#FF5227"
                strokeWidth="1.5"
              />
            </svg>
            <Body
              className="relative z-10 whitespace-nowrap text-center group-hover:text-background"
              desktopSize="6xl"
              mobileSize="4xl"
            >
              {cta.label}
            </Body>
          </div>
        </div>
      )}
    </Link>
  );
}