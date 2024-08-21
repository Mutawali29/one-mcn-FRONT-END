import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
        <div id="home" className="section">
            <div className="ml-4 md:ml-40 mt-16 md:mt-16">
                <motion.p
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-violet-200 max-w-xl md:max-w-2xl leading-snug"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Design, <span className="text-stroke">Development &</span> Digital Marketing
                </motion.p>
            </div>
        </div>
        </>
    );
};

export default Home;
