import { Shield, Server } from "lucide-react";

const TransparentPricing = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-section mb-4">Transparent Pricing. No Hidden Fees.</h2>
          <p className="text-body text-lg">
            Many business owners worry that a cheap website comes with hidden monthly fees.
          </p>
          <p className="text-body text-lg mt-2">
            At Sonykun Design, your website can be hosted for free. You only pay for hosting if you want us to manage your website for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free Hosting */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Free Hosting</h3>
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">$0</p>
            <p className="text-muted-foreground">
              Host the website yourself or with your preferred provider. No ongoing fees from us.
            </p>
          </div>

          {/* Managed Hosting */}
          <div className="bg-background rounded-2xl p-8 border border-primary/20 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Server className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Managed Hosting</h3>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              $12<span className="text-base font-normal text-muted-foreground">/month</span>
            </p>
            <p className="text-sm text-muted-foreground mb-4">or $100/year</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span> Hosting management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span> Basic maintenance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span> Small update support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentPricing;
