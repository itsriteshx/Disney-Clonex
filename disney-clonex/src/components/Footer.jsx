import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";
const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />,   href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaYoutube />,   href: "#" },
];
function Footer() {
  const { t } = useAppContext();
  const footerLinks = [
    { key: "aboutHotstar", label: t("aboutHotstar") },
    { key: "termsOfUse",   label: t("termsOfUse") },
    { key: "privacyPolicy", label: t("privacyPolicy") },
    { key: "faq",           label: t("faq") },
    { key: "feedback",      label: t("feedback") },
    { key: "careers",       label: t("careers") },
  ];
  return (
    <footer
      style={{
        background: "#080010",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "56px 4% 36px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {}
        <div style={{ maxWidth: "600px" }}>
          {}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <AiFillStar style={{ color: "#f5a623", fontSize: "22px" }} />
            <span style={{ fontSize: "22px", fontWeight: 900, color: "white", letterSpacing: "-0.3px" }}>
              hotstar
            </span>
          </div>
          {}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", marginBottom: "24px" }}>
            {footerLinks.map(link => (
              <a
                key={link.key}
                href="#"
                style={{
                  color: "#aaaaaa",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#aaaaaa")}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "11px", lineHeight: 1.8, maxWidth: "520px" }}>
            {t("copyright")}
          </p>
        </div>
        {}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "white", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginRight: "4px" }}>
              {t("connect")}
            </span>
            {socialIcons.map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                style={{
                  width: "38px", height: "38px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: "14px",
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#8B2FC9";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
          {}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "white", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginRight: "4px" }}>
              {t("download")}
            </span>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                style={{ height: "36px", borderRadius: "8px", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "36px", borderRadius: "8px", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;