import CheckIcon from "@/assets/check.svg";
import DemoIcon from "@/assets/DemoIcon2.jpg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Frontend Engineer",
    role: "UI/UX Designer",
    imageSrc: DemoIcon.src,
    inverse: false,
  },
  {
    name: "Michael Smith",
    position: "Backend Engineer",
    role: "API Developer",
    imageSrc: DemoIcon.src,
    inverse: true,
  },
  {
    name: "Linda Akintola",
    position: "Brand Strategist",
    role: "Marketing Lead",
    imageSrc: DemoIcon.src,
    inverse: false,
  },
  {
    name: "James Adeyemi",
    position: "Fullstack Engineer",
    role: "Technical Lead",
    imageSrc: DemoIcon.src,
    inverse: true,
  },
  {
    name: "Emily Zhang",
    position: "Product Manager",
    role: "Strategy Planner",
    imageSrc: DemoIcon.src,
    inverse: false,
  },
  {
    name: "David Okoro",
    position: "DevOps Engineer",
    role: "Infrastructure Specialist",
    imageSrc: DemoIcon.src,
    inverse: true,
  },
];

export const OurTeam = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title mt-5">Meet Our Team</h2>
          <p className="section-description mt-5">
            We have pro&apos;s that are ready 24/7 to handle your branding to any level
            with our award-winning IT Team, Branding strategists, Marketing Experts and more.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {teamMembers.map(({ name, position, role, imageSrc, inverse }) => (
            <div
              key={name}
              className={twMerge(
                "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse === true && "text-white/60"
                  )}
                >
                  {position}
                </h3>
              </div>

              <Image
                src={imageSrc}
                alt={name}
                width={96}
                height={96}
                className="rounded-full object-cover mx-auto mb-4"
              />

              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold">{name}</h4>
                <p className="text-sm text-black/50 dark:text-white/70">{role}</p>
              </div>

              <ul className="flex flex-col gap-5 mt-8">
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>Leadership in {role}</span>
                </li>
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>Experience as {position}</span>
                </li>
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>Strong team contributor</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
