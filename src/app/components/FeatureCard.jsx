export default function FeatureCard({ title }) {
  return (
    <div className="feature-card">
      {/* icon to add */}
      <p className="feature-card-name">{title}</p>
      <p>
        With lots of unique blocks you can easily build a page without coding.
        Build your next landing page.
      </p>
    </div>
  );
}
