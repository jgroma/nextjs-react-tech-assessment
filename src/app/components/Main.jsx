import FeatureCard from "./FeatureCard";

export default function Main() {
  return (
    <main>
      <section>
        <div className="main-description">
          <h1>Pricing & Plans</h1>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within a few minutes
          </p>
        </div>
        <div>
          {/* toggle button to add & savings label */}
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
        <div className="plans-container">
          <div className="plan-card">
            <p>STARTER</p>
            <p>
              <span className="plan-price">$19</span>/month
            </p>
            <p>billed monthly</p>
            <ul>
              {/* ticks/crosses to add */}
              <li>Commercial</li>
              <li>100+ HTML UI Elements</li>
              <li>01 Domain Support</li>
              <li>6 Month Premium</li>
              <li>Lifeime Updates</li>
            </ul>
            <button>Start Free Trial</button>
            <p>No credit card required</p>
          </div>
          <div className="plan-card">
            <p>STANDARD</p>
            <p>
              <span className="plan-price">$49</span>/month
            </p>
            <p>billed monthly</p>
            <ul>
              <li>Commercial</li>
              <li>100+ HTML UI Elements</li>
              <li>Unlimited Domain Support</li>
              <li>6 Month Premium</li>
              <li>Lifeime Updates</li>
            </ul>
            <button className="plan-highlighted">Start Free Trial</button>
            <p>No credit card required</p>
          </div>
          <div className="plan-card">
            <p>PREMIUM</p>
            <p>
              <span className="plan-price">$99</span>/month
            </p>
            <p>billed monthly</p>
            <ul>
              <li>Commercial</li>
              <li>100+ HTML UI Elements</li>
              <li>01 Domain Support</li>
              <li>6 Month Premium</li>
              <li>Lifeime Updates</li>
            </ul>
            <button>Start Free Trial</button>
            <p>No credit card required</p>
          </div>
        </div>
      </section>
      <section>
        <div className="features-description">
          <h1>Check our features</h1>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </div>
        <div className="features-container">
          <FeatureCard title="Quick setup process" />
          <FeatureCard title="Create custom orders" />
          <FeatureCard title="Multiple coupons" />
          <FeatureCard title="Organize your campaigns" />
          <FeatureCard title="Manage customers" />
          <FeatureCard title="Track progress fast" />
        </div>
      </section>
    </main>
  );
}
