import React from 'react';
import Email from '../assets/Email_Icon.png';
import Discord from '../assets/Discord_Icon.png';
import Insta from '../assets/Instagram_Icon.png';

function SocialIcons() {
    const SocialIcon = ({ icon, link, alt }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-80">
          <img
            src={icon}
            alt={alt}
            className={`object-contain ${alt === "Instagram" ? "h-11 w-11" : "h-8 w-8"}`}
          />
        </a>
      );

  return (
    <div className="flex justify-start items-center space-x-3 mt-4 ml-4">
        <SocialIcon icon={Insta} link="https://www.instagram.com" alt="Instagram" />
        <SocialIcon icon={Email} link="https://www.facebook.com" alt="Email" />
        <SocialIcon icon={Discord} link="https://www.twitter.com" alt="Discord" />
    </div>
  );
}

export default SocialIcons;
