import React from 'react';

interface WrenchKeyIconProps {
  className?: string;
  size?: number;
}

/**
 * Custom stylized Locksmith Icon combining a Service Wrench (chave inglesa/chave de boca)
 * and a Classic Precision Key (chave com dentes de segredo), representing professional locksmith service.
 */
export const WrenchKeyIcon: React.FC<WrenchKeyIconProps> = ({ className = 'w-5 h-5', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ícone de chaveiro com chave de serviço e chave de segredo"
    >
      {/* 
        Stylized design:
        Top: Open-end adjustable wrench jaw (boca de chave inglesa de serviço).
        Center: Sturdy shaft with mechanical adjustment screw details.
        Bottom: Precision lock key blade with distinct bitting teeth and tip.
      */}
      <path
        d="M8.5 2.5C7.2 3.4 6.3 4.9 6.1 6.6C6.0 7.7 6.3 8.7 6.8 9.6L3.8 12.6C3.4 13.0 3.4 13.6 3.8 14.0L5.0 15.2C5.4 15.6 6.0 15.6 6.4 15.2L9.4 12.2C10.3 12.7 11.3 13.0 12.4 12.9C14.1 12.7 15.6 11.8 16.5 10.5L13.8 9.0C13.3 8.7 13.0 8.2 13.0 7.6C13.0 7.0 13.3 6.4 13.8 6.1L16.5 4.6C15.6 3.3 14.1 2.4 12.4 2.2C11.0 2.0 9.6 2.1 8.5 2.5Z"
        fill="currentColor"
      />
      {/* Key Shaft extending downwards with cut teeth */}
      <path
        d="M13.2 11.5L20.2 18.5C20.6 18.9 20.6 19.5 20.2 19.9L18.9 21.2C18.5 21.6 17.9 21.6 17.5 21.2L16.0 19.7L15.0 20.7L13.2 18.9L14.2 17.9L12.5 16.2L10.5 14.2C11.5 13.5 12.4 12.6 13.2 11.5Z"
        fill="currentColor"
      />
      {/* Key blade teeth notch */}
      <path
        d="M19.0 15.5L21.5 18.0L20.0 19.5L17.5 17.0L19.0 15.5Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Precision circle hole inside wrench bow */}
      <circle cx="10" cy="7.5" r="1.5" fill="#F59E0B" />
    </svg>
  );
};
