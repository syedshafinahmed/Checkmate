"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Regular",
    price: "$9",
    description: "Essential tools to build strong fundamentals.",
    features: [
      "Basic tactics trainer",
      "Opening explorer",
      "Limited analysis depth",
      "Community access",
    ],
  },
  {
    name: "Gold",
    price: "$19",
    description: "Structured improvement for competitive players.",
    features: [
      "Advanced tactics",
      "Full opening database",
      "Game analysis",
      "Weekly insights",
    ],
  },
  {
    name: "Platinum",
    price: "$29",
    description: "Elite preparation for serious growth and game-winning domination.",
    features: [
      "Unlimited analysis",
      "Endgame mastery tools",
      "Personalized insights",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Diamond",
    price: "$49",
    description: "Suite of professional-grade tools engineered for mastery.",
    features: [
      "Engine-level analysis",
      "Coach-level reports",
      "Exclusive studies",
      "1-on-1 mentoring access",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};

const Pricing = () => {
  return (
    <section className="py-20 text-base-content">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300 mb-5">
            Subscription
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Choose Your <span className="text-orange-300">Game Plan</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base-content/70">
            Upgrade your chess journey with tools designed for every level of ambition.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="relative rounded-2xl p-6 bg-base-200 border border-base-300 transition-transform group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {plan.popular && (
                <span className="absolute top-7 right-5 px-4 py-1.5 rounded-full bg-orange-300/10 border border-orange-300 text-orange-300 text-xs font-extrabold uppercase tracking-[0.25em] z-10">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors" style={{ transform: "translateZ(0)" }}>
                {plan.name}
              </h3>

              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold group-hover:text-orange-300 transition-colors" style={{ transform: "translateZ(0)" }}>
                  {plan.price}
                </span>
                <span className="text-base-content/60 mb-1 group-hover:text-orange-300 transition-colors" style={{ transform: "translateZ(0)" }}>
                  /mo
                </span>
              </div>

              <p className="text-sm text-base-content/70 mb-6 line-clamp-2" style={{ transform: "translateZ(0)" }}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2" style={{ transform: "translateZ(0)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-300" />
                    <span className="text-base-content/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg font-semibold border border-orange-300 group-hover:text-orange-300 transition-colors hover:bg-base-content hover:text-black"
                style={{ transform: "translateZ(0)" }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
