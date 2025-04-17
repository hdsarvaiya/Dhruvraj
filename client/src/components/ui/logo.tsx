import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("flex items-center", {
  variants: {
    size: {
      small: "text-xl",
      medium: "text-3xl",
      large: "text-6xl",
    },
    color: {
      default: "",
      intro: "",
      footer: "",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "default",
  },
});

const logoTextClasses = {
  default: {
    main: "text-primary font-accent mr-1",
    secondary: "text-accent text-xl font-heading",
  },
  intro: {
    main: "text-secondary font-accent mb-1",
    secondary: "text-white text-2xl font-heading tracking-widest",
  },
  footer: {
    main: "text-secondary font-accent mr-1",
    secondary: "text-white text-xl font-heading",
  },
};

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export default function Logo({ size, color = "default", className }: LogoProps) {
  const variants = logoTextClasses[color || "default"];
  
  return (
    <div className={cn(logoVariants({ size, color, className }))}>
      <div className={variants.main}>DHRUVRAJ</div>
      <div className={variants.secondary}>INFRA</div>
    </div>
  );
}
