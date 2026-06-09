import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { t, isArabic } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-tasyeer-dark-gray via-gray-900 to-tasyeer-maroon text-white flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-tasyeer-maroon/30 via-transparent to-tasyeer-orange/20 hidden md:block"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(152,19,19,0.3) 0%, transparent 50%, rgba(235,183,106,0.2) 100%)",
            "linear-gradient(135deg, rgba(235,183,106,0.2) 0%, transparent 50%, rgba(152,19,19,0.3) 100%)",
            "linear-gradient(45deg, rgba(152,19,19,0.3) 0%, transparent 50%, rgba(235,183,106,0.2) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-tasyeer-maroon/30 via-transparent to-tasyeer-orange/20 md:hidden" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-tasyeer-orange"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Large glowing orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-tasyeer-orange opacity-10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-tasyeer-maroon opacity-20 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Geometric lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
        >
          <motion.line
            x1="0"
            y1="200"
            x2="1000"
            y2="800"
            stroke="#EBB76A"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.line
            x1="200"
            y1="0"
            x2="800"
            y2="1000"
            stroke="#981313"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <motion.circle
            cx="500"
            cy="500"
            r="300"
            stroke="#EBB76A"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-tight relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <span className="w-2 h-2 bg-tasyeer-orange rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                {isArabic
                  ? "شركة مقاولات رائدة في الإمارات"
                  : "Leading UAE Contractor"}
              </span>
            </motion.div>

            {/* Main Title with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] lg:leading-[1.4] mb-6 pb-2 lg:pb-4 pt-1 overflow-visible"
            >
              <span className="block">
                {isArabic ? "بناء المستقبل" : "Building the"}
              </span>
              <span className="block bg-gradient-to-r from-tasyeer-orange via-yellow-400 to-tasyeer-orange bg-clip-text text-transparent">
                {isArabic ? "بقوة واحترافية" : "Future with Power"}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(235,183,106,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="group bg-gradient-to-r from-tasyeer-orange to-yellow-500 text-tasyeer-dark-gray font-bold py-4 px-8 rounded-lg inline-flex items-center gap-3 justify-center shadow-lg"
              >
                {t("hero.cta")}
                {isArabic ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
                className="group border-2 border-white/50 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-3 justify-center backdrop-blur-sm hover:border-white transition-colors"
              >
                <Play className="w-5 h-5" />
                {isArabic ? "شاهد الفيديو" : "Watch Video"}
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex gap-8 border-t border-white/20 pt-8"
            >
              {[
                { value: "50+", label: isArabic ? "مشروع" : "Projects" },
                { value: "5+", label: isArabic ? "سنوات" : "Years" },
                { value: "30+", label: isArabic ? "عميل" : "Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-tasyeer-orange force-ltr">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element - 3D Construction Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[400px] h-[400px] border border-tasyeer-orange/30 rounded-full" />
              </motion.div>

              {/* Counter-rotating inner ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[300px] h-[300px] border border-white/20 rounded-full" />
              </motion.div>

              {/* Center diamond shape */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[200px] h-[200px] border-4 border-tasyeer-orange rounded-3xl transform rotate-45" />
              </motion.div>

              {/* Pulsing center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-tasyeer-orange to-tasyeer-maroon rounded-full shadow-2xl shadow-tasyeer-orange/50" />
              </motion.div>

              {/* Floating elements */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-tasyeer-orange rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${10 + i * 25}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Corner decorations */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-tasyeer-orange/50 rounded-tr-3xl"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-tasyeer-orange/50 rounded-bl-3xl"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-sm text-gray-400">
            {isArabic ? "اسحب للأسفل" : "Scroll Down"}
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            whileHover={{ borderColor: "rgba(235,183,106,0.5)" }}
          >
            <motion.div
              className="w-1.5 h-3 bg-tasyeer-orange rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    {/* Video Popup */}
    {showVideo && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={() => setShowVideo(false)}
      >
        <div
          className="relative w-full max-w-sm"
          style={{ aspectRatio: "9/16" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <iframe
            src="https://www.youtube.com/embed/2tLcD9ZA7Gs?autoplay=1&rel=0"
            className="w-full h-full rounded-xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    )}
    </>
  );
};
