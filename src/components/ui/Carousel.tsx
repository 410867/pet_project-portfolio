"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type {EmblaOptionsType} from "embla-carousel";

type CarouselProps = {
    children: React.ReactNode[];
    className?: string;
    options?: EmblaOptionsType;
    bulletsTopMargin?: number;
};

export default function Carousel({
                                     children,
                                     className = "",
                                     options,
                                     bulletsTopMargin = 103,
                                 }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, ...options});
    const [selected, setSelected] = React.useState(0);
    const viewportRef = React.useRef<HTMLDivElement | null>(null);

    const setViewportHeight = React.useCallback(() => {
        if (!emblaApi || !viewportRef.current) return;
        const i = emblaApi.selectedScrollSnap();
        const slide = emblaApi.slideNodes()[i] as HTMLElement;
        if (!slide) return;
        viewportRef.current.style.height = `${slide.offsetHeight}px`;
    }, [emblaApi]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelected(emblaApi.selectedScrollSnap());
        setViewportHeight();
    }, [emblaApi, setViewportHeight]);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        onSelect();
        const ro = new ResizeObserver(() => setViewportHeight());
        const slides = emblaApi.slideNodes() as HTMLElement[];
        slides.forEach((s) => ro.observe(s));
        return () => ro.disconnect();
    }, [emblaApi, onSelect, setViewportHeight]);

    return (
        <div className={className}>
            {/* Viewport */}
            <div ref={viewportRef} className="relative transition-[height] duration-300 ease-in-out">
                <div ref={emblaRef} className="overflow-hidden rounded-2xl">
                    {/* Container */}
                    <div className="flex touch-pan-y">
                        {React.Children.map(children, (child, i) => (
                            <div className="min-w-0 flex-[0_0_100%] gap-[62px] px-0 md:px-0" key={i}>
                                <div className="mx-auto">{child}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    aria-label="Previous"
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15 6l-6 6 6 6"/>
                    </svg>
                </button>
                <button
                    aria-label="Next"
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 6l6 6-6 6"/>
                    </svg>
                </button>
            </div>

            <div
                className="mt-0 flex items-center justify-center gap-3"
                style={{marginTop: `${bulletsTopMargin}px`}}
            >
                {children.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={[
                            "h-4 w-14 rounded-[8px] transition-colors",
                            i === selected ? "bg-[var(--color-primary,#FF7A00)]" : "bg-[#d9d9d9]",
                        ].join(" ")}
                    />
                ))}
            </div>
        </div>
    );
}
