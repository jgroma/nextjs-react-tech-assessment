import FooterCard from "./FooterCard";

FooterCard;
export default function Footer() {
  return (
    <footer>
      <FooterCard
        title="Company"
        linksArr={["About us", "Contact us", "Careers", "Press"]}
      />
      <FooterCard
        title="Product"
        linksArr={["Features", "Pricing", "News", "Help desk", "Support"]}
      />
      <FooterCard
        title="Services"
        linksArr={[
          "Digital Marketing",
          "Content Writing",
          "SEO for Business",
          "UI Design",
        ]}
      />
      <FooterCard
        title="Legal"
        linksArr={["Privacy Policy", "Terms & Conditions", "Return Policy"]}
      />
      <FooterCard
        title="Contact us"
        linksArr={["support@brainwave.io", "+133-394-3439-1435"]}
      />
      <div className="footer-text">
        <span>
          &copy; Copyright, All Right Reserved, Made by Seju_ui_ux with &#10084;
        </span>
        {/* icons to add */}
        <span>Twitter, Facebook, Instagram, LinkedIn icons</span>
      </div>
    </footer>
  );
}
