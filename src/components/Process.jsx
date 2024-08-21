import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Process = () => {
    const { ref: itemRef, inView } = useInView({ triggerOnce: true });

    return (
        <>
        <div id="process">
            <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 mt-10 md:mt-20">
                <div className="space-y-6 md:space-y-10 ml-12 md:ml-28">
                    <motion.div
                        ref={itemRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }} // Delay for the first element
                        className="text-white flex items-start space-x-4"
                    >
                        <p className="text-xl md:text-2xl bg-purple-400 rounded-full p-1 shadow-[0_0_20px_5px_rgba(96,165,250,0.8)]">01</p>
                        <p className="max-w-xs text-sm md:text-base">Schedule Your Complimentary Marketing Strategy Session</p>
                    </motion.div>

                    <motion.div
                        ref={itemRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }} // Delay for the second element
                        className="text-white flex items-start space-x-4"
                    >
                        <p className="text-xl md:text-2xl bg-purple-400 rounded-full p-1 shadow-[0_0_20px_5px_rgba(128,0,128,0.8)]">02</p>
                        <p className="max-w-xs text-sm md:text-base">Get Your Free Marketing Strategy Plan</p>
                    </motion.div>

                    <motion.div
                        ref={itemRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.6 }} // Delay for the third element
                        className="text-white flex items-start space-x-4"
                    >
                        <p className="text-xl md:text-2xl bg-purple-400 rounded-full p-1 shadow-[0_0_20px_5px_rgba(148,0,211,0.8)]">03</p>
                        <p className="max-w-xs text-sm md:text-base">Work with Us to Grow Your Business and Get More Customers</p>
                    </motion.div>
                </div>

                <motion.div
                    ref={itemRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.8 }} // Delay for the heading and paragraph
                    className="text-center md:text-left space-y-6 md:space-y-8 mr-0 md:mr-40 mt-8 md:mt-0"
                >
                    <h1 className="text-3xl md:text-6xl font-bold text-white">3 Easy Steps</h1>
                    <p className="text-lg md:text-4xl text-white max-w-xs mx-auto md:mx-0">to grow your business with ABN Strategies</p>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Process;
