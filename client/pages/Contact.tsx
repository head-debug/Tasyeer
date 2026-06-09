import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { isArabic, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      titleAr: "الموقع",
      titleEn: "Location",
      contentAr:
        "صندوق البريد 56591، أبو ظبي - ايكاد 1 - شارع الصقلاوي، الإمارات",
      contentEn: "P.O. Box No. 56591, Abu Dhabi - ICAD1 - Al Saqlawi St, UAE",
      link: "https://maps.app.goo.gl/Dd5f5KZK8LZVyP6PA?g_st=ic",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      titleAr: "الهاتف",
      titleEn: "Phone",
      contentAr: "+971 2 583 3820 / +971 58 638 6522",
      contentEn: "+971 2 583 3820 / +971 58 638 6522",
      link: "tel:+9712583320",
      forceLtr: true,
    },
    {
      icon: <Mail className="w-8 h-8" />,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      contentAr: "head@tasyeercompany.com / info@tasyeercompany.com",
      contentEn: "head@tasyeercompany.com / info@tasyeercompany.com",
      link: "mailto:head@tasyeercompany.com",
      forceLtr: true,
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      titleAr: "لينكدإن",
      titleEn: "LinkedIn",
      contentAr: "linkedin.com/company/tasyeer-general-contracting",
      contentEn: "linkedin.com/company/tasyeer-general-contracting",
      link: "https://www.linkedin.com/company/tasyeer-general-contracting/",
      forceLtr: true,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      titleAr: "ساعات العمل",
      titleEn: "Office Hours",
      contentAr: "الاثنين - السبت",
      contentEn: "Monday - Saturday",
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ── Web3Forms Integration ──────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e751efae-7006-4037-8c0a-e890544eb0e3",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "New Contact Request — Tasyeer",
          message: formData.message,
          from_name: "Tasyeer Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(isArabic ? "حدث خطأ. حاول مرة أخرى." : "Something went wrong. Please try again.");
      }
    } catch {
      setError(isArabic ? "فشل الإرسال. تحقق من اتصالك." : "Submission failed. Check your connection.");
    } finally {
      setLoading(false);
    }
  };
  // ──────────────────────────────────────────────────────────────

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tasyeer-dark-gray to-tasyeer-maroon text-white py-20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? "اتصل بنا" : "Contact Us"}
            </h1>
            <div className="h-1 w-24 bg-tasyeer-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {isArabic
                ? "نحن هنا للإجابة على أسئلتك والاستماع إلى احتياجاتك"
                : "We are here to answer your questions and listen to your needs"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-tasyeer-dark-gray mb-8">
                {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    {isArabic ? "تم الإرسال بنجاح" : "Message Sent Successfully"}
                  </h3>
                  <p className="text-green-600">
                    {isArabic
                      ? "شكراً لتواصلك معنا. سنرد عليك قريباً"
                      : "Thank you for reaching out. We will get back to you soon"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4 text-red-700 text-center">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isArabic ? "الاسم" : "Your Name"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-tasyeer-maroon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isArabic ? "البريد الإلكتروني" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-tasyeer-maroon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isArabic ? "رقم الهاتف" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-tasyeer-maroon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isArabic ? "الموضوع" : "Subject"}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={isArabic ? "أدخل الموضوع" : "Enter subject"}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-tasyeer-maroon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isArabic ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={isArabic ? "أدخل رسالتك" : "Enter your message"}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-tasyeer-maroon transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span>{isArabic ? "جاري الإرسال..." : "Sending..."}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {isArabic ? "إرسال الرسالة" : "Send Message"}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps?q=24.441891,54.41852&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Details Box */}
              <div className="bg-tasyeer-dark-gray rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-6">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-tasyeer-orange flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      {isArabic ? "أبو ظبي - ايكاد 1 - شارع الصقلاوي" : "Abu Dhabi - ICAD1 - Al Saqlawi St"}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-tasyeer-orange flex-shrink-0" />
                    <div className="force-ltr">
                      <p className="text-sm text-gray-300">+971 2 583 3820</p>
                      <p className="text-sm text-gray-300">+971 58 638 6522</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-tasyeer-orange flex-shrink-0" />
                    <div className="force-ltr">
                      <p className="text-sm text-gray-300">head@tasyeercompany.com</p>
                      <p className="text-sm text-gray-300">info@tasyeercompany.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-tasyeer-maroon to-tasyeer-orange rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {isArabic ? "معلومات إضافية" : "Additional Information"}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">{isArabic ? "الرد السريع" : "Quick Response"}</p>
                      <p className="text-gray-100">
                        {isArabic ? "نرد على استفساراتك خلال 24 ساعة" : "We respond to inquiries within 24 hours"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">{isArabic ? "عروض مخصصة" : "Customized Quotes"}</p>
                      <p className="text-gray-100">
                        {isArabic ? "نقدم عروض أسعار مخصصة لاحتياجاتك الخاصة" : "We provide customized quotes for your needs"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">{isArabic ? "استشارة مجانية" : "Free Consultation"}</p>
                      <p className="text-gray-100">
                        {isArabic ? "احصل على استشارة تقنية مجانية قبل بدء المشروع" : "Get free technical consultation before project start"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Branches */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-6 border-2 border-tasyeer-maroon">
                  <h3 className="text-lg font-bold text-tasyeer-maroon mb-4">
                    {isArabic ? "أبو ظبي (المقر الرئيسي)" : "Abu Dhabi (Headquarters)"}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">{isArabic ? "الهاتف:" : "Phone:"}</span> <span className="force-ltr">+971 2 583 3820 / +971 58 638 6522</span></p>
                    <p><span className="font-semibold">{isArabic ? "البريد:" : "Email:"}</span> <span className="force-ltr">head@tasyeercompany.com</span></p>
                    <p><span className="font-semibold">{isArabic ? "البريد:" : "Email:"}</span> <span className="force-ltr">info@tasyeercompany.com</span></p>
                    <p><span className="font-semibold">{isArabic ? "صندوق البريد:" : "P.O. Box:"}</span> <span className="force-ltr">56591</span></p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-tasyeer-orange">
                  <h3 className="text-lg font-bold text-tasyeer-orange mb-4">
                    {isArabic ? "دبي" : "Dubai"}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">{isArabic ? "الهاتف:" : "Phone:"}</span> <span className="force-ltr">+971 4 583 3820 / +971 50 202 2208</span></p>
                    <p><span className="font-semibold">{isArabic ? "البريد:" : "Email:"}</span> <span className="force-ltr">headx@tasyeercompany.com</span></p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-tasyeer-dark-gray mb-4">
                  {isArabic ? "تابعنا على وسائل التواصل" : "Follow Us on Social Media"}
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-4 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
