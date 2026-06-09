import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, Target, Heart, Users } from "lucide-react";
import { OrganizationChart } from "@/components/OrganizationChart";

export default function About() {
  const { isArabic, t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      titleAr: "الكفاءة والابتكار",
      titleEn: "Excellence & Innovation",
      descAr: "نسعى للتميز في كل مشروع ونحتضن الابتكار كمحرك للنجاح.",
      descEn:
        "We strive for excellence in every project and embrace innovation as a driver of success.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      titleAr: "الجودة والمهنية",
      titleEn: "Quality & Professionalism",
      descAr: "نحافظ على أعلى معايير الجودة والمهنية في جميع عملياتنا.",
      descEn:
        "We maintain the highest standards of quality and professionalism in all our operations.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      titleAr: "النزاهة والمسؤولية",
      titleEn: "Integrity & Responsibility",
      descAr: "نتعامل مع النزاهة والشفافية والمسؤولية الاجتماعية.",
      descEn:
        "We conduct business with integrity, transparency, and social responsibility.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      titleAr: "فريق متحمس",
      titleEn: "Dedicated Team",
      descAr: "فريقنا متخصص ومكرس لتحقيق الأهداف والتطور المستمر.",
      descEn:
        "Our team is specialized and dedicated to achieving goals and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tasyeer-dark-gray to-tasyeer-maroon text-white py-16">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? "عن تسيير" : "About TASYEER"}
            </h1>
            <div className="h-1 w-24 bg-tasyeer-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {isArabic
                ? "شركة متخصصة في البنية التحتية والمقاولات العامة بخبرة متميزة في السوق الإقليمية"
                : "A specialized infrastructure and general contracting company with distinguished expertise in the regional market"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-6">
                {isArabic ? "من نحن؟" : "Who Are We?"}
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {isArabic
                  ? "شركة تسيير للمقاولات العامة هي شركة متخصصة في خدمات دعم البنية التحتية في الإمارات العربية المتحدة. مع تاريخ يعود إلى عام 2019، استقرت الشركة كلاعب رئيسي في قطاعات مختلفة بما فيها الطرق السريعة والنقل والسكك الحديدية والطاقة وإدارة النفايات والمرافق العامة."
                  : "Tasyeer General Contracting is a leading infrastructure support services company based in the UAE. With a history dating back to 2019, we have established ourselves as a key player in various sectors including highways, transportation, railway, energy, waste management, and utilities."}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? "نحن مكرسون لتقديم حلول بناء عالية الجودة وموثوقة ومستدامة مدعومة بخبرة والتزام بالتميز. نتعاون بشكل وثيق مع عملائنا لتحويل رؤاهم إلى واقع من خلال حلول مخصصة."
                  : "We are committed to delivering reliable, high-quality, and sustainable construction solutions backed by expertise and a commitment to excellence. We collaborate closely with clients to transform their visions into reality with tailored solutions."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-tasyeer-maroon to-tasyeer-orange rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                {isArabic ? "الإنجازات الرئيسية" : "Key Achievements"}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-tasyeer-orange text-2xl font-bold">
                    ✓
                  </span>
                  <span className="text-lg">
                    {isArabic
                      ? "أكثر من 50 مشروع مكتمل بنجاح"
                      : "50+ successfully completed projects"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tasyeer-orange text-2xl font-bold">
                    ✓
                  </span>
                  <span className="text-lg">
                    {isArabic
                      ? "شراكات مع أكبر الشركات في الإمارات"
                      : "Partnerships with major UAE companies"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tasyeer-orange text-2xl font-bold">
                    ✓
                  </span>
                  <span className="text-lg">
                    {isArabic
                      ? "شهادات ISO 9001, 14001, 45001"
                      : "ISO 9001, 14001, 45001 Certified"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tasyeer-orange text-2xl font-bold">
                    ✓
                  </span>
                  <span className="text-lg">
                    {isArabic ? "شهادة ICV بنسبة 50%" : "50% ICV Certificate"}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 border-2 border-tasyeer-maroon rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-tasyeer-maroon" />
                <h3 className="text-2xl font-bold text-tasyeer-dark-gray">
                  {isArabic ? "رؤيتنا" : "Our Vision"}
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                {isArabic
                  ? "أن نكون شركة رائدة ومبتكرة في السوق الإقليمية لخدمات الهندسة المدنية والمقاولات، نقدم خدمات متميزة من خلال نظام إدارة جودة قوي وفريق محترف مكرس للتميز."
                  : "To be a pioneering and innovative company in the regional market for civil engineering and construction services, delivering exceptional service through a robust quality management system and a team of highly qualified professionals."}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 border-2 border-tasyeer-orange rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-tasyeer-orange" />
                <h3 className="text-2xl font-bold text-tasyeer-dark-gray">
                  {isArabic ? "رسالتنا" : "Our Mission"}
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                {isArabic
                  ? "تقديم خدمات هندسة بناء عالمية الجودة توفر حلولاً فعالة وميسورة التكلفة ومستدامة وعالية الجودة لعملائنا في كل مشروع."
                  : "To be a world-class engineering construction company providing efficient, affordable, sustainable, and high-quality services to our clients in every project."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic ? "قيمنا الأساسية" : "Our Core Values"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-tasyeer-maroon mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-tasyeer-dark-gray mb-3">
                  {isArabic ? value.titleAr : value.titleEn}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isArabic ? value.descAr : value.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <OrganizationChart />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic ? "لماذا اختيار تسيير؟" : "Why Choose Tasyeer?"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <div className="bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange rounded-lg p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "الخبرة والموثوقية" : "Experience & Reliability"}
                </h3>
                <p className="text-lg leading-relaxed">
                  {isArabic
                    ? "مع سنوات من الخبرة في المشاريع الكبرى، نقدم حلولاً موثوقة وآمنة تتجاوز التوقعات."
                    : "With years of experience in major projects, we deliver reliable and safe solutions that exceed expectations."}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic
                    ? "الابتكار والاستدامة"
                    : "Innovation & Sustainability"}
                </h3>
                <p className="text-lg leading-relaxed">
                  {isArabic
                    ? "نستثمر في التكنولوجيا والممارسات المستدامة لضمان مشاريع ذات تأثير بيئي إيجابي."
                    : "We invest in technology and sustainable practices to ensure projects with positive environmental impact."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic ? "فروعنا" : "Our Branches"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Abu Dhabi Branch */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-tasyeer-maroon to-red-700 text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold">
                  {isArabic
                    ? "أبو ظبي (مقر رئيسي)"
                    : "Abu Dhabi (Headquarters)"}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-200 text-sm mb-1">
                    {isArabic ? "العنوان:" : "Address:"}
                  </p>
                  <p className="text-lg">
                    {isArabic
                      ? "أبو ظبي - ايكاد 1 - شارع الصقلاوي، الإمارات العربية المتحدة"
                      : "Abu Dhabi - ICAD1 - Al Saqlawi St, UAE"}
                  </p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-gray-200 text-sm mb-2">
                    {isArabic ? "الاتصال:" : "Contact:"}
                  </p>
                  <div className="space-y-1 force-ltr">
                    <p className="text-lg">+971 2 583 3820</p>
                    <p className="text-lg">+971 58 638 6522</p>
                    <p className="text-lg">head@tasyeercompany.com</p>
                    <p className="text-lg">info@tasyeercompany.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dubai Branch */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌆</span>
                </div>
                <h3 className="text-2xl font-bold">
                  {isArabic ? "دبي" : "Dubai"}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-200 text-sm mb-1">
                    {isArabic ? "العنوان:" : "Address:"}
                  </p>
                  <p className="text-lg">
                    {isArabic
                      ? "دبي، الإمارات العربية المتحدة"
                      : "Dubai, United Arab Emirates"}
                  </p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-gray-200 text-sm mb-2">
                    {isArabic ? "الاتصال:" : "Contact:"}
                  </p>
                  <div className="space-y-1 force-ltr">
                    <p className="text-lg">+971 4 583 3820</p>
                    <p className="text-lg">+971 50 202 2208</p>
                    <p className="text-lg">headx@tasyeercompany.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Branch Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-tasyeer-dark-gray mb-6 text-center">
              {isArabic ? "خدمات الفروع" : "Branch Services"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="font-bold text-tasyeer-dark-gray mb-2">
                  {isArabic
                    ? "الاستشارات الهندسية"
                    : "Engineering Consultations"}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isArabic
                    ? "استشارات متخصصة للمشاريع الكبرى والصغرى"
                    : "Specialized consulting for major and minor projects"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-bold text-tasyeer-dark-gray mb-2">
                  {isArabic ? "دعم العملاء" : "Customer Support"}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isArabic
                    ? "دعم فني متخصص ورد سريع على الاستفسارات"
                    : "Professional technical support and quick response"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="font-bold text-tasyeer-dark-gray mb-2">
                  {isArabic ? "خدمات محلية" : "Local Services"}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isArabic
                    ? "تنفيذ سريع وفعال للمشاريع في المنطقة"
                    : "Quick and efficient project execution"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
