import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-4 md:px-4", className)}>
      <div className="inline-flex items-center gap-3 ml-3">
        <StarIcon className="w-6 h-6 text-emerald-300" />
        <h3 className="font-serif text-3xl text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-base mt-2 max-w-xs text-white/60">
        {description}
      </p>
    </div>
  );
};
