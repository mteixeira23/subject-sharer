import habitusIcon from '@/assets/habitus-icon.png';

interface BrandLogoProps {
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export function BrandLogo({ size = 40, className = '', showLabel = false }: BrandLogoProps) {
  const labelSize = size >= 100 ? 'text-2xl' : size >= 60 ? 'text-lg' : 'text-sm';

  return (
    <div className={`flex flex-col items-center ${showLabel ? 'gap-2' : ''} ${className}`}>
      <img
        src={habitusIcon}
        alt="Habitus"
        width={size}
        height={size}
        className="object-contain drop-shadow-[0_0_8px_rgba(0,255,255,0.4)] dark:mix-blend-screen mix-blend-multiply"
        style={{ width: size, height: size }}
      />
      {showLabel && (
        <span className={`${labelSize} font-bold tracking-tight text-primary`}>Habitus</span>
      )}
    </div>
  );
}
