'use client';

import { SvgIconComponent } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';

interface RoundedButtonProps {
  IconComponent: SvgIconComponent;
  size?: number;
  iconSize?: 'small' | 'medium' | 'large' | 'inherit';
  tooltipText?: string;
}

export default function RoundedButton({
  size = 12,
  IconComponent,
  iconSize = 'medium',
  tooltipText = ''
}: RoundedButtonProps) {
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (!buttonRef.current || !tooltipRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      
      // Creamos un elemento temporal para calcular el tamaño del tooltip
      const tempTooltip = document.createElement('div');
      tempTooltip.style.visibility = 'hidden';
      tempTooltip.style.position = 'absolute';
      tempTooltip.style.whiteSpace = 'nowrap';
      tempTooltip.style.padding = '0.5rem 0.75rem';
      tempTooltip.style.fontSize = '0.875rem';
      tempTooltip.textContent = tooltipText;
      document.body.appendChild(tempTooltip);
      
      const tooltipWidth = tempTooltip.offsetWidth;
      const tooltipHeight = tempTooltip.offsetHeight;
      document.body.removeChild(tempTooltip);

      const space = {
        top: buttonRect.top,
        bottom: window.innerHeight - buttonRect.bottom,
        left: buttonRect.left,
        right: window.innerWidth - buttonRect.right
      };

      // Calculamos qué posición tiene más espacio disponible
      const positions = {
        top: space.top - tooltipHeight - 12,
        bottom: space.bottom - tooltipHeight - 12,
        left: space.left - tooltipWidth - 12,
        right: space.right - tooltipWidth - 12
      };

      // Seleccionamos la posición con más espacio disponible
      const bestPosition = Object.entries(positions).reduce(
        (max, [key, value]) => value > max.value ? { key, value } : max,
        { key: 'top', value: positions.top }
      ).key as 'top' | 'bottom' | 'left' | 'right';

      setPosition(bestPosition);
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculatePosition, true);
    
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition, true);
    };
  }, [tooltipText]);

  const getTooltipClasses = () => {
    const baseClasses = `
      absolute z-50
      bg-blue-900 text-white text-sm py-2 px-3 rounded-md
      opacity-0 group-hover:opacity-100 
      transition-all duration-200 ease-out
      whitespace-nowrap pointer-events-none
      shadow-lg
      scale-95 group-hover:scale-100
      font-sans font-normal tracking-normal
      before:content-[''] before:absolute before:z-10 before:border-[6px] before:border-transparent
    `;

    switch (position) {
      case 'bottom':
        return `${baseClasses} top-full left-1/2 -translate-x-1/2 translate-y-1
                before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-[11px] before:border-b-blue-900`;
      case 'left':
        return `${baseClasses} right-full top-1/2 -translate-y-1/2 -translate-x-1
                before:right-0 before:top-1/2 before:translate-x-[11px] before:-translate-y-1/2 before:border-l-blue-900`;
      case 'right':
        return `${baseClasses} left-full top-1/2 -translate-y-1/2 translate-x-1
                before:left-0 before:top-1/2 before:-translate-x-[11px] before:-translate-y-1/2 before:border-r-blue-900`;
      default: // top
        return `${baseClasses} bottom-full left-1/2 -translate-x-1/2 -translate-y-1
                before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-[11px] before:border-t-blue-900`;
    }
  };

  return (
    <div className="relative group inline-flex">
      <button 
        ref={buttonRef}
        className={`
          flex items-center justify-center
          hover:cursor-pointer
          w-${size} h-${size} 
          bg-[#141414] hover:bg-blue-600 
          text-white text-2xl font-medium
          rounded-full transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          shadow-md hover:shadow-lg
        `}
      >
        <IconComponent fontSize={iconSize} />
      </button>

      {tooltipText && (
        <div
        style={{padding:"16px"}}
          ref={tooltipRef}
          className={getTooltipClasses()}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}