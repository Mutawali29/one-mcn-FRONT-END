import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Blog = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [inView1, setInView1] = useState(false);
    const [inView2, setInView2] = useState(false);
    const [inView3, setInView3] = useState(false);
    const [inView4, setInView4] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref1.current && ref1.current.getBoundingClientRect().top < window.innerHeight) {
                setInView1(true);
            }
            if (ref2.current && ref2.current.getBoundingClientRect().top < window.innerHeight) {
                setInView2(true);
            }
            if (ref3.current && ref3.current.getBoundingClientRect().top < window.innerHeight) {
                setInView3(true);
            }
            if (ref4.current && ref4.current.getBoundingClientRect().top < window.innerHeight) {
                setInView4(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (inView1) controls1.start({ opacity: 1, y: 0 });
        if (inView2) controls2.start({ opacity: 1, y: 0 });
        if (inView3) controls3.start({ opacity: 1, y: 0 });
        if (inView4) controls4.start({ opacity: 1, y: 0 });
    }, [inView1, inView2, inView3, inView4, controls1, controls2, controls3, controls4]);

    return (
        <>
        <div id="blog">
            <div className="flex flex-col md:flex-row justify-between p-6 md:p-9 mt-8 md:mt-16">
                <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls1}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center md:text-left mb-6 md:mb-0 md:ml-32"
                >
                    <p className="text-3xl md:text-6xl font-bold text-white max-w-md mx-auto md:mx-0">
                        Why ONE MCN Agency
                    </p>
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls2}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4 md:space-y-6 mx-4 md:mx-0 md:mr-36 ml-10"
                >
                    <motion.p
                        ref={ref3}
                        initial={{ opacity: 0, y: 30 }}
                        animate={controls3}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="font-bold text-white max-w-xs md:max-w-sm mx-auto md:mx-0"
                    >
                        Take your business to the next level by working with seasoned digital marketing specialists, to create, implement and optimize your digital marketing strategy
                    </motion.p>
                    <motion.p
                        ref={ref4}
                        initial={{ opacity: 0, y: 30 }}
                        animate={controls4}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-white max-w-xs md:max-w-sm mx-auto md:mx-0"
                    >
                        Because we truly want to provide results we are selective in the clients we take on
                    </motion.p>
                    <p className="text-white max-w-xs md:max-w-sm mx-auto md:mx-0">
                        If we decide to work together, we will use our superstar team of developers, data analysts, conversion optimization specialists and media buyers to GROW your business to new heights.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-fuchsia-600 rounded-full p-2 text-white font-semibold transition duration-300 hover:shadow-[0_0_20px_5px_rgba(148,0,211,0.8)]">
                            Learn More About Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Blog;
