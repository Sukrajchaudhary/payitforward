"use client"
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  showLoadingState?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

// Generate a simple blur placeholder
const getBlurDataURL = () => {
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';
};

// Optimize Cloudinary URLs
const optimizeImageUrl = (url: string, width?: number, quality: string = 'auto') => {
  if (url.includes('cloudinary.com')) {
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      const transformations = [];
      if (width) transformations.push(`w_${width}`);
      transformations.push(`q_${quality}`);
      transformations.push('f_auto');
      transformations.push('c_fill');
      transformations.push('g_auto');
      
      return `${parts[0]}/upload/${transformations.join(',')}/${parts[1]}`;
    }
  }
  return url;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  quality = 85,
  sizes,
  onClick,
  onLoad,
  onError,
  showLoadingState = true,
  placeholder = "blur",
  blurDataURL,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  const optimizedSrc = optimizeImageUrl(src, width);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        <div className="text-gray-500 text-sm text-center p-4">
          <div className="mb-2">📷</div>
          <div>Image unavailable</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={fill ? {} : { width, height }}>
      {showLoadingState && isLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      )}
      
      <Image
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL || getBlurDataURL()}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
      />
    </div>
  );
};

// Specialized gallery image component
export const GalleryImage: React.FC<{
  src: string;
  alt: string;
  title?: string;
  className?: string;
  onClick?: () => void;
  showTitle?: boolean;
}> = ({ src, alt, title, className = "", onClick, showTitle = true }) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
        onClick={onClick}
        quality={85}
      />
      
      {showTitle && title && (
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 max-w-[80%] truncate">
          {title}
        </div>
      )}
    </div>
  );
};

// Hero image component for large displays
export const HeroImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}> = ({ src, alt, className = "", priority = false }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="100vw"
      priority={priority}
      quality={90}
    />
  );
};

// Avatar image component
export const AvatarImage: React.FC<{
  src: string;
  alt: string;
  size?: number;
  className?: string;
}> = ({ src, alt, size = 40, className = "" }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      quality={80}
    />
  );
};
