interface ContactInfoCardProps {
  icon: string;
  title: string;
  description: React.ReactNode;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-6 group">
      <div className="size-14 rounded-2xl bg-coffee-cream dark:bg-[#382d22] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-[#181411] dark:text-white text-xl font-bold">{title}</h4>
        <p className="text-[#635548] dark:text-[#a8998a] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
