import FeatureCard from "./feature-card";
import {
  Leaf,
  FlaskConical,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Pure Ingredients",
    description:
      "Tortor laoreet sagittis gravida fermentum tellus penatibus natoque.",
    icon: <Leaf size={40} strokeWidth={1.5} />,
  },
  {
    title: "Chemical-Free Formula",
    description:
      "Nulla sed fusce penatibus praesent dis ut et orci curae.",
    icon: <FlaskConical size={40} strokeWidth={1.5} />,
  },
  {
    title: "Preservative-Free",
    description:
      "Ultrices sociosqu nostra potenti lobortis quisque pharetra pulvinar.",
    icon: <Droplets size={40} strokeWidth={1.5} />,
  },
  {
    title: "Natural Care",
    description:
      "Healthy skincare made with carefully selected botanical ingredients.",
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
  },
];

export default function FeatureSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
          grid
          gap-8
          sm:grid-cols-2
         
        "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}