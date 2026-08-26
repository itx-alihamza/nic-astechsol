import React from 'react';

/**
 * OptimizedImage - A reusable image component with built-in lazy loading
 * and performance optimizations.
 * 
 * Features:
 * - Native lazy loading (loading="lazy")
 * - Async decoding for non-blocking image processing
 * - Proper accessibility with required alt text
 */
const OptimizedImage = ({
    src,
    alt,
    className = '',
    priority = false,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={className}
            {...props}
        />
    );
};

export default OptimizedImage;
