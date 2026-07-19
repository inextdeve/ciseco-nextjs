export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature }: Props) {
  return (
    <div
      className="
      group
      rounded-2xl
      bg-white
      p-8
      text-center
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F6F3EE] text-[#6B8E23] transition-transform duration-300 group-hover:scale-110">
          {feature.icon}
        </div>
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {feature.title}
      </h3>

      <p className="text-gray-600 leading-7">
        {feature.description}
      </p>
    </div>
  );
}