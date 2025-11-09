import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
    once?: boolean;
};

export function useInViewAnimation(options: Options = {}) {
    const { once = true, threshold = 0.2, root = null, rootMargin = "0px 0px -10% 0px" } = options;
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setInView(false);
                }
            },
            { root, rootMargin, threshold },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [once, root, rootMargin, threshold]);

    return { ref, inView };
}
