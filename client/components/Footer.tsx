import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export const Footer = () => {
  const { t, isArabic } = useLanguage();

  return (
    <footer className="bg-tasyeer-dark-gray text-white mt-20">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-cairo text-lg font-bold mb-4">
              {t("footer.about")}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {isArabic
                ? "تسيير هي شركة متخصصة في البنية التحتية والطرق والمناظر الطبيعية، تقدم حلولاً احترافية وعالية الجودة للمشاريع التجارية والحكومية."
                : "Tasyeer is a specialized infrastructure and construction company providing professional and high-quality solutions for commercial and government projects."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cairo text-lg font-bold mb-4">
              {t("footer.quicklinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200"
                >
                  {t("nav.projects")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cairo text-lg font-bold mb-4">
              {t("nav.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200 text-sm"
                >
                  {t("services.infrastructure")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200 text-sm"
                >
                  {t("services.landscaping")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200 text-sm"
                >
                  {t("services.maintenance")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tasyeer-orange transition-colors duration-200 text-sm"
                >
                  {t("services.drainage")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cairo text-lg font-bold mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-tasyeer-orange flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-300">{t("footer.location")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-tasyeer-orange flex-shrink-0 mt-0.5"
                />
                <div className="flex flex-col force-ltr">
                  <span className="text-gray-300">+971 2 583 3820</span>
                  <span className="text-gray-300">+971 58 638 6522</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-tasyeer-orange flex-shrink-0 mt-0.5"
                />
                <div className="flex flex-col force-ltr">
                  <span className="text-gray-300">head@tasyeercompany.com</span>
                  <span className="text-gray-300">info@tasyeercompany.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Tasyeer General Contracting. {t("footer.rights")}.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-tasyeer-orange transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-tasyeer-orange transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-tasyeer-orange transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
