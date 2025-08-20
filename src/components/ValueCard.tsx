interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  styling: string;
}

const ValueCard = ({ icon, title, text, styling }: ValueCardProps) => (
  <article className={styling}>
    <div>
      <div className="flex items-center gap-2 text-lg font-semibold mb-1 capitalize">
        {icon} {title}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  </article>
);

export default ValueCard;
