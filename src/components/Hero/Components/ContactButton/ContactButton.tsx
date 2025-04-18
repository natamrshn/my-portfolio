import Image, { StaticImageData } from "next/image";
import './ContactButton.scss'; 

interface ContactButtonProps {
  href: string;
  icon: StaticImageData;
  label: string;
  className?: string;
  isExternal?: boolean;
}

const ContactButton = ({
  href,
  icon,
  label,
  className = "",
  isExternal = true,
}: ContactButtonProps) => {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`contact-button ${className}`}
    >
      <div className="icon-wrapper">
        <Image src={icon} alt={`${label} icon`} />
      </div>
      <span>{label}</span>
    </a>
  );
};

export default ContactButton;
