import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-tasyeer-dark-gray via-gray-900 to-tasyeer-maroon">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-tasyeer-orange/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tasyeer-maroon/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: 3 }}
        />

        {/* Grid pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="ctaGrid"
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 5 0 L 0 0 0 5"
                fill="none"
                stroke="white"
                strokeWidth="0.1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-tasyeer-orange/20 text-tasyeer-orange text-sm font-bold px-4 py-2 rounded-full mb-6 border border-tasyeer-orange/30"
            >
              {isArabic ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.3] lg:leading-[1.4] pb-2 lg:pb-4 pt-1 overflow-visible">
              {isArabic ? (
                <>
                  <span className="block">هل أنت مستعد</span>
                  <span className="block bg-gradient-to-r from-tasyeer-orange to-yellow-400 bg-clip-text text-transparent">
                    لبناء المستقبل؟
                  </span>
                </>
              ) : (
                <>
                  <span className="block">Ready to Build</span>
                  <span className="block bg-gradient-to-r from-tasyeer-orange to-yellow-400 bg-clip-text text-transparent">
                    Your Future?
                  </span>
                </>
              )}
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
              {isArabic
                ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لمشروعك"
                : "Contact us today for a free consultation and customized quote for your project"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(235,183,106,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-tasyeer-orange to-yellow-500 text-tasyeer-dark-gray font-bold py-4 px-8 rounded-xl inline-flex items-center gap-3 justify-center shadow-lg w-full sm:w-auto"
                >
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                  {isArabic ? (
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
              </Link>

              <motion.a
                href="tel:+97125833820"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-3 justify-center hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                {isArabic ? "اتصل الآن" : "Call Now"}
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Card 1 */}
            <motion.div
              whileHover={{ x: isArabic ? 10 : -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-tasyeer-orange to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">
                  {isArabic ? "اتصل بنا" : "Call Us"}
                </p>
                <p className="text-white text-lg font-bold" dir="ltr">
                  +971 2 583 320
                </p>
              </div>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div
              whileHover={{ x: isArabic ? 10 : -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-tasyeer-maroon to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">
                  {isArabic ? "راسلنا" : "Email Us"}
                </p>
                <p className="text-white text-lg font-bold force-ltr">
                  info@tasyeercompany.com
                </p>
              </div>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div
              whileHover={{ x: isArabic ? 10 : -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">
                  {isArabic ? "واتساب" : "WhatsApp"}
                </p>
                <p className="text-white text-lg font-bold" dir="ltr">
                  +971 58 638 6522
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", labelAr: "دعم متواصل", labelEn: "Support" },
              { value: "100%", labelAr: "ضمان الجودة", labelEn: "Quality" },
              { value: "50+", labelAr: "مشروع ناجح", labelEn: "Projects" },
              { value: "5+", labelAr: "سنوات خبرة", labelEn: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-tasyeer-orange mb-2">
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm">
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
