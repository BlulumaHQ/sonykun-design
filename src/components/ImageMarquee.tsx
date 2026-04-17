import oneParkHome from "@/assets/projects/one-park-home.jpg";
import presotea from "@/assets/projects/presotea.jpg";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import littleMountainDental from "@/assets/projects/little-mountain-dental.jpg";
import yangHealth from "@/assets/projects/yang-health.jpg";

const images = [
  { src: oneParkHome, alt: "One Park Home" },
  { src: presotea, alt: "Presotea" },
  { src: friendlyDental, alt: "Friendly Dental" },
  { src: btnRealEstate, alt: "BTN Real Estate" },
  { src: littleMountainDental, alt: "Little Mountain Dental" },
  { src: yangHealth, alt: "Yang Health" },
];

/**
 * Editorial dark image strip — full-width seamless infinite marquee
 * of portfolio thumbnails. Sits below the hero.
 */
const ImageMarquee = () => {
  return (
    <section className="bg-charcoal py-0 overflow-hidden" aria-hidden="true">
      <div className="marquee-wrap">
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          <div className="marquee-group">
            {images.map((img, i) => (
              <div
                key={`a-${i}`}
                className="h-[160px] md:h-[200px] w-[260px] md:w-[320px] flex-shrink-0 mx-2 overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {images.map((img, i) => (
              <div
                key={`b-${i}`}
                className="h-[160px] md:h-[200px] w-[260px] md:w-[320px] flex-shrink-0 mx-2 overflow-hidden"
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
