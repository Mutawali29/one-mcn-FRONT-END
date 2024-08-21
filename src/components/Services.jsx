import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
    <div id="services">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative flex justify-center p-4 mt-40"
        variants={fadeInUp}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        transition={{ duration: 0.0 }}
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-600 to-transparent bg-opacity-40 rounded-tl-full rounded-br-full"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>

        <motion.div
          className="relative bg-fuchsia-600 bg-opacity-40 p-4 rounded-tl-full rounded-br-full max-w-4xl w-full"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-white text-center mt-4 text-lg">
            <div>
              <p>
                We are going to create a result-driven optimal marketing strategy for your business
              </p>
            </div>
            <div className="text-3xl">
              <span className="font-bold">Free 30 Minutes</span> Digital Marketing Consultation
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center mt-10 mb-5">
            <motion.div
              className="flex bg-white rounded-full p-2 items-center space-x-2"
              variants={fadeInUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaRegUser />
              <input
                type="text"
                placeholder="Username"
                className="border-none outline-none"
              />
            </motion.div>

            <motion.div
              className="flex bg-white rounded-full p-2 items-center space-x-2"
              variants={fadeInUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MdOutlineMail />
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-gradient-to-r from-violet-500 to-blue-400 text-white rounded-full p-2 transition duration-300 hover:shadow-[0_0_20px_5px_rgba(96,165,250,0.8)]">
                Request a Quote
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Title */}
      <motion.div
        ref={titleRef}
        variants={fadeInUp}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-4xl sm:text-7xl max-w-lg font-bold text-white mt-20 ml-28 sm:ml-40">
          Services Include
        </h1>
      </motion.div>

      {/* Services Sections */}
      <motion.div
        ref={servicesRef}
        className="flex flex-col sm:flex-row ml-0 sm:ml-40 space-y-8 sm:space-y-0 sm:space-x-8 mt-20"
        variants={fadeInUp}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="relative bg-fuchsia-600 max-w-full sm:max-w-96 p-4 mt-0 rounded-tl-xl rounded-br-xl overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-transparent opacity-30 z-0"></div>
          <div className="relative z-10">
            <p className="text-3xl font-bold text-white w-60">Creative</p>
            <div className="flex items-center space-x-2 mt-20">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Branding/logo design</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Conversion optimization</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Marketing Video Creation</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative bg-fuchsia-600 max-w-full sm:max-w-72 p-4 mt-14 rounded-tl-xl rounded-br-xl overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-orange-500 to-transparent opacity-30 z-0"></div>
          <div className="relative z-10">
            <p className="text-3xl font-bold text-white">Marketing & Advertising</p>
            <div className="flex items-center space-x-2 mt-10">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Google/Youtube Ads</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Facebook Ads</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Linkedin in ads & automation</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative bg-fuchsia-600 max-w-full sm:max-w-72 p-4 mt-14 rounded-tl-xl rounded-br-xl overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-amber-400 to-transparent opacity-30 z-0"></div>
          <div className="relative z-10">
            <p className="text-3xl font-bold text-white">Development</p>
            <div className="flex items-center space-x-2 mt-16">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">CRM and funnel set up</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">UI/UX Design</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white">Funnel Creation and Optimization</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Services;
