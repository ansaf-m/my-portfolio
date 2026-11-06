import React from 'react';

export const TechLogo = ({ name, size = 32, className = '' }) => {
  const iconKey = (name || '').toLowerCase().replace(/[\s.-]/g, '');

  switch (iconKey) {
    case 'html5':
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4.14 2L5.86 21.27L12 23L18.14 21.27L19.86 2H4.14Z" fill="#E44D26"/>
          <path d="M12 21.15V3.82H18.25L16.8 19.68L12 21.15Z" fill="#F16529"/>
          <path d="M12 8.78H8.56L8.32 6.09H12V3.82H5.86L6.5 11.05H12V8.78ZM12 16.32L9.62 15.68L9.46 13.91H7.19L7.51 17.51L12 18.76V16.32Z" fill="#EBEBEB"/>
          <path d="M12 8.78V11.05H15.07L14.78 14.32L12 15.07V17.38L16.49 16.14L17.02 10.22L17.06 8.78H12ZM12 3.82V6.09H17.48L17.68 3.82H12Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4.14 2L5.86 21.27L12 23L18.14 21.27L19.86 2H4.14Z" fill="#1572B6"/>
          <path d="M12 21.15V3.82H18.25L16.8 19.68L12 21.15Z" fill="#33A9DC"/>
          <path d="M12 8.78H8.56L8.32 6.09H12V3.82H5.86L6.5 11.05H12V8.78ZM12 16.32L9.62 15.68L9.46 13.91H7.19L7.51 17.51L12 18.76V16.32Z" fill="#EBEBEB"/>
          <path d="M12 8.78V11.05H15.07L14.78 14.32L12 15.07V17.38L16.49 16.14L17.02 10.22L17.06 8.78H12ZM12 3.82V6.09H17.48L17.68 3.82H12Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7.5 17.5C8.3 17.5 8.9 17 8.9 16.1V9.5H7.3V16C7.3 16.3 7.1 16.5 6.8 16.5C6.4 16.5 6.1 16.3 5.9 16L5 17C5.6 17.3 6.5 17.5 7.5 17.5ZM13.8 17.6C16 17.6 17.3 16.3 17.3 14.5C17.3 13.1 16.3 12.3 14.7 11.7C13.6 11.2 13.1 10.9 13.1 10.3C13.1 9.8 13.5 9.4 14.2 9.4C14.8 9.4 15.4 9.7 15.8 10.2L16.8 9.2C16.1 8.3 15.2 8 14.2 8C12.3 8 11.2 9.2 11.2 10.8C11.2 12.2 12.1 13 13.7 13.6C14.7 14 15.3 14.4 15.3 15.1C15.3 15.8 14.7 16.3 13.8 16.3C13 16.3 12.2 15.8 11.7 15.1L10.7 16.1C11.4 17.1 12.5 17.6 13.8 17.6Z" fill="#000000"/>
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" fill="none" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );

    case 'vite':
    case 'vitejs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21.75 3.75L12.75 22.25C12.45 22.85 11.55 22.85 11.25 22.25L2.25 3.75C1.95 3.1 2.45 2.4 3.15 2.45L12 3.15L20.85 2.45C21.55 2.4 22.05 3.1 21.75 3.75Z" fill="url(#viteGradient)"/>
          <path d="M14.5 2.5L8.5 12.5H12L10 19.5L16.5 9.5H13L14.5 2.5Z" fill="#FFD025"/>
          <defs>
            <linearGradient id="viteGradient" x1="2" y1="2" x2="22" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF"/>
              <stop offset="1" stopColor="#BD34FE"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'bootstrap':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#7952B3"/>
          <path d="M8.5 6.5H13C14.7 6.5 15.8 7.4 15.8 8.8C15.8 9.9 15.1 10.7 14.1 11C15.4 11.3 16.2 12.3 16.2 13.7C16.2 15.4 14.8 16.5 12.9 16.5H8.5V6.5ZM10.8 8.5V10.4H12.7C13.5 10.4 14 9.9 14 9.4C14 8.8 13.5 8.5 12.7 8.5H10.8ZM10.8 12.3V14.5H13C13.9 14.5 14.4 14 14.4 13.4C14.4 12.8 13.9 12.3 13 12.3H10.8Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8.2 18.5C8.2 18.5 7.1 19.3 9.4 19.6C12.2 20 15 19.6 17.5 18.7C17.5 18.7 18.5 19.3 17 20C14 20.8 10 20.8 7.3 20.1C5 19.5 7.5 18.7 8.2 18.5Z" fill="#EA2D2E"/>
          <path d="M7.5 16C7.5 16 6.3 17 8.7 17.3C11.5 17.7 14.8 17.5 18.1 16.4C18.1 16.4 18.9 17.1 17.4 17.7C14.1 18.7 9.8 18.7 6.7 17.9C4.1 17.2 6.8 16.2 7.5 16Z" fill="#EA2D2E"/>
          <path d="M12.8 11.5C13.8 12.5 13.8 13.6 13.8 13.6C13.8 13.6 13.3 14 12.2 14.2C10.7 14.4 9.3 14.3 7.8 13.9C6.9 13.7 6.5 13.3 6.9 13C7.5 12.6 8.5 12.6 8.5 12.6C8.5 12.6 11.1 12.7 12.8 11.5Z" fill="#5382A1"/>
          <path d="M14.5 8.2C15.8 9.5 15.2 11.2 15.2 11.2C15.2 11.2 14.5 10.4 13.5 10.2C12.2 10 10.2 10.4 8.7 11.5C8.7 11.5 9.4 10.1 11.1 9.2C13 8.2 14.5 8.2 14.5 8.2Z" fill="#5382A1"/>
          <path d="M11.6 3.5C12.4 4.5 12.1 5.8 12.1 5.8C12.1 5.8 11.7 5.1 11 5C10 4.8 8.8 5.4 7.5 6.5C7.5 6.5 8.2 5.2 9.6 4.4C10.7 3.7 11.6 3.5 11.6 3.5Z" fill="#5382A1"/>
          <path d="M16.5 14.8C18.2 13.9 18.2 12.8 18.2 12.8C17.5 13.1 16.6 13.2 15.8 13.2C16.5 12.4 16.9 11.2 16.9 11.2C16.9 11.2 15.1 11.8 13.9 12.9C13 13.8 13.2 14.6 13.2 14.6C14.2 14.8 15.5 15.2 16.5 14.8Z" fill="#EA2D2E"/>
        </svg>
      );

    case 'springboot':
    case 'spring':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#6DB33F"/>
          <path d="M16.8 7.2C14.5 6 10.5 7 8.2 9.8C6.3 12.2 6.4 15.3 8 16.8C9.5 18.2 12.5 18.1 14.8 16.1C17.5 13.8 18.1 9.8 16.8 7.2ZM12.2 15.2C10.5 16.4 8.7 15.6 8.3 14.8C7.8 13.8 8.1 12 9.4 10.4C10.8 8.7 13.2 7.7 14.8 8.4C15.8 9.9 14.5 13.5 12.2 15.2Z" fill="#FFFFFF"/>
          <path d="M10.2 13.8C9.7 14.2 9.2 14 9.1 13.7C8.9 13.3 9.1 12.6 9.6 12C10.2 11.3 11 10.9 11.5 11.1C11.9 11.7 11.2 13.1 10.2 13.8Z" fill="#6DB33F"/>
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#222228"/>
          <text x="12" y="16.5" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="800" letterSpacing="-0.5px">ex</text>
        </svg>
      );

    case 'node':
    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L20.5 6.9V16.8L12 21.7L3.5 16.8V6.9L12 2Z" fill="#339933"/>
          <path d="M12 4.2L18.8 8.1V15.9L12 19.8L5.2 15.9V8.1L12 4.2Z" fill="#215732"/>
          <path d="M12 7.8C10.2 7.8 8.8 9.2 8.8 11C8.8 12.8 10.2 14.2 12 14.2C13.8 14.2 15.2 12.8 15.2 11C15.2 9.2 13.8 7.8 12 7.8ZM12 12.6C11.1 12.6 10.4 11.9 10.4 11C10.4 10.1 11.1 9.4 12 9.4C12.9 9.4 13.6 10.1 13.6 11C13.6 11.9 12.9 12.6 12 12.6Z" fill="#6CC24A"/>
        </svg>
      );

    case 'restapis':
    case 'restapi':
    case 'rest':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#0284C7"/>
          <path d="M7 8.5L4 12L7 15.5M17 8.5L20 12L17 15.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="#38BDF8"/>
          <path d="M10 12H14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'springsecurity':
    case 'security':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.5C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z" fill="#6DB33F"/>
          <path d="M12 4L5.8 6.7V11.5C5.8 15.4 8.5 19.1 12 20.3C15.5 19.1 18.2 15.4 18.2 11.5V6.7L12 4Z" fill="#589632"/>
          <path d="M10.2 11.8L8.7 10.3L7.5 11.5L10.2 14.2L16.5 7.9L15.3 6.7L10.2 11.8Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#00758F"/>
          <path d="M12.5 5.5C10.5 5.5 9.2 6.7 8.5 8.3C7.8 7.3 6.8 6.8 5.5 7C4 7.2 3 8.6 3 10.3C3 13 5.5 15.5 9 17C9.5 17.2 10 17.2 10.5 17C13.5 15.7 15.8 13.5 16.5 11C17 9.3 16.2 7.5 14.5 6.7C13.8 5.9 13.2 5.5 12.5 5.5ZM14 9.7C13.8 10.3 13.2 10.7 12.5 10.7C11.8 10.7 11.2 10.3 11.2 9.7C11.2 9.1 11.8 8.7 12.5 8.7C13.2 8.7 13.8 9.1 14 9.7Z" fill="#F29111"/>
          <circle cx="12.5" cy="9.7" r="0.6" fill="#FFFFFF"/>
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C11.8 2.2 10.3 3.9 9.8 5C8.8 7.1 8 9.5 8 12.2C8 16.3 10.2 19.8 11.7 21.8C11.8 22 12 22 12.1 22C12.3 22 12.4 21.9 12.5 21.7C13.9 19.8 16 16.3 16 12.2C16 9.5 15.2 7.1 14.2 5C13.7 3.9 12.2 2.2 12 2Z" fill="#47A248"/>
          <path d="M12 2V22C12.1 22 12.2 21.9 12.3 21.7C13.7 19.8 15.8 16.3 15.8 12.2C15.8 9.5 15 7.1 14 5C13.5 3.9 12.1 2.2 12 2Z" fill="#499D4A"/>
          <path d="M12 21.5C11.9 21.3 10.8 19 10.3 17.5C9.8 16 9.5 14.5 9.5 13.5C9.5 11.5 10.5 9.5 11.8 7.5L12 7.2V21.5Z" fill="#FFFFFF" fillOpacity="0.8"/>
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#336791"/>
          <path d="M12 5.5C9.2 5.5 7 7.7 7 10.5C7 12.2 7.8 13.7 9.1 14.6C9.1 15.2 8.7 16 8 16.8C7.5 17.3 7 17.6 7 17.6C7.5 17.8 8.3 17.9 9.1 17.7C10.5 17.3 11.4 16.3 11.7 15.4C11.8 15.4 11.9 15.4 12 15.4C14.8 15.4 17 13.2 17 10.5C17 7.7 14.8 5.5 12 5.5ZM10.5 9.8C10.1 9.8 9.8 9.4 9.8 9C9.8 8.6 10.1 8.2 10.5 8.2C10.9 8.2 11.2 8.6 11.2 9C11.2 9.4 10.9 9.8 10.5 9.8ZM13.5 9.8C13.1 9.8 12.8 9.4 12.8 9C12.8 8.6 13.1 8.2 13.5 8.2C13.9 8.2 14.2 8.6 14.2 9C14.2 9.4 13.9 9.8 13.5 9.8Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21.5 11.5C21 11.3 20.3 11.4 19.8 11.7C19.3 10.7 18.5 9.8 17.3 9.4L16.8 9.2V10C16.8 11.2 16.2 12 15.5 12.4H15V11H13V12.4H11V11H9V12.4H7V11H5V12.4H4.5C3.5 12.4 2.5 13 2 13.8C1.5 14.7 1.4 15.7 1.8 16.7C2.8 19.2 5.8 20.5 9.5 20.5C15.2 20.5 19.8 17.5 21.2 13.5C21.8 13.2 22.5 12.7 22.8 12.1L21.5 11.5Z" fill="#2496ED"/>
          <rect x="5" y="8" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="7.3" y="8" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="9.6" y="8" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="7.3" y="5.9" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="9.6" y="5.9" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="11.9" y="8" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
          <rect x="11.9" y="5.9" width="1.8" height="1.6" rx="0.3" fill="#2496ED"/>
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21.7 10.9L13.1 2.3C12.7 1.9 12.1 1.9 11.7 2.3L9.8 4.2L12.2 6.6C12.9 6.3 13.8 6.5 14.4 7.1C15 7.7 15.2 8.6 14.9 9.3L17.2 11.6C17.9 11.3 18.8 11.5 19.4 12.1C20.2 12.9 20.2 14.1 19.4 14.9C18.6 15.7 17.4 15.7 16.6 14.9C16 14.3 15.8 13.4 16.1 12.7L14 10.6V15.7C14.2 16 14.3 16.3 14.3 16.7C14.3 17.8 13.4 18.7 12.3 18.7C11.2 18.7 10.3 17.8 10.3 16.7C10.3 15.9 10.8 15.2 11.5 14.9V9.7C10.8 9.4 10.3 8.7 10.3 7.9C10.3 7.5 10.4 7.2 10.6 6.9L8.2 4.5L2.3 10.4C1.9 10.8 1.9 11.4 2.3 11.8L10.9 20.4C11.3 20.8 11.9 20.8 12.3 20.4L21.7 11.8C22.1 11.4 22.1 10.8 21.7 10.9Z" fill="#F05032"/>
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#181717"/>
          <path d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.29 18.53 9.47 19.59C9.87 19.66 10.02 19.42 10.02 19.21C10.02 19.02 10.01 18.39 10.01 17.72C8 18.09 7.46 17.21 7.3 16.76C7.21 16.53 6.82 15.82 6.48 15.63C6.2 15.48 5.8 15.11 6.47 15.1C7.1 15.09 7.55 15.68 7.7 15.92C8.42 17.13 9.57 16.79 10.03 16.58C10.1 16.06 10.31 15.71 10.54 15.51C8.75 15.31 6.88 14.61 6.88 11.53C6.88 10.65 7.19 9.93 7.71 9.37C7.63 9.17 7.35 8.34 7.79 7.23C7.79 7.23 8.46 7.02 10.02 8.07C10.66 7.89 11.34 7.8 12.02 7.8C12.7 7.8 13.38 7.89 14.02 8.07C15.58 7.01 16.25 7.23 16.25 7.23C16.69 8.34 16.41 9.17 16.33 9.37C16.85 9.93 17.16 10.64 17.16 11.53C17.16 14.63 15.28 15.31 13.49 15.51C13.78 15.76 14.03 16.24 14.03 17C14.03 18.09 14.02 18.97 14.02 19.21C14.02 19.42 14.17 19.67 14.57 19.59C17.71 18.53 20 15.53 20 12C20 7.58 16.42 4 12 4Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10.5" fill="#FF6C37"/>
          <path d="M12.5 5.5C12.5 5.5 13.2 7 14.5 7.5C15.8 8 17.5 8 17.5 8C17.5 8 16.5 9 15 9.5C13.5 10 11.5 9.5 11 9C10.5 8.5 10 7 10 7L12.5 5.5ZM7 12C7 12 8.5 10.5 10.5 11C12.5 11.5 14 13.5 14 13.5C14 13.5 12 14 10.5 13.5C9 13 8 12.5 7 12ZM15.5 15C15.5 15 14 16.5 12 16.5C10 16.5 9 15.5 9 15.5C9 15.5 10.5 17.5 13 17.5C15.5 17.5 17 15.5 17 15.5L15.5 15Z" fill="#FFFFFF"/>
          <circle cx="15.5" cy="7.5" r="1" fill="#FFFFFF"/>
        </svg>
      );

    case 'vercel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#000000"/>
          <path d="M12 4.5L20 18.5H4L12 4.5Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M17.5 2.2L6.8 11.8L2.5 8.5L1.2 9.4V14.6L2.5 15.5L6.8 12.2L17.5 21.8L22.8 19.3V4.7L17.5 2.2ZM17.5 7.2V16.8L10.8 12L17.5 7.2Z" fill="#007ACC"/>
        </svg>
      );

    case 'shopify':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M19.4 7.2L16.2 3.8C16 3.6 15.7 3.5 15.4 3.5L13.5 3.7C13.4 3 13.1 2.4 12.5 2.1C11.9 1.8 11.1 1.9 10.6 2.3C9.8 3 9.4 4.1 9.4 5.3L7.7 5.7C7.3 5.8 7 6.1 6.9 6.5L4.5 19.5C4.4 20 4.7 20.5 5.2 20.6L16.8 22.9C16.9 22.9 17 22.9 17.1 22.9C17.5 22.9 17.8 22.7 18 22.4L22.2 8.4C22.4 7.9 22 7.4 21.5 7.3L19.4 7.2ZM10.8 5.1C10.8 4.3 11.1 3.7 11.5 3.3C11.7 3.1 12 3 12.3 3.1C12.6 3.3 12.7 3.7 12.8 4.2L10.8 5.1ZM14.1 13.8C13.2 13.8 12.6 13.3 12.1 12.6L12.9 11.9C13.3 12.4 13.7 12.7 14.2 12.7C14.7 12.7 15 12.5 15 12.1C15 11.4 13.9 11.3 13.2 10.9C12.4 10.4 12.1 9.8 12.1 9C12.1 7.9 13 7.1 14.3 7.1C15.1 7.1 15.7 7.4 16.2 7.9L15.4 8.7C15 8.3 14.6 8.1 14.2 8.1C13.7 8.1 13.4 8.3 13.4 8.7C13.4 9.3 14.6 9.4 15.3 9.8C16.1 10.3 16.4 10.9 16.4 11.7C16.3 12.9 15.4 13.8 14.1 13.8Z" fill="#95BF47"/>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#374151"/>
          <path d="M12 6V18M6 12H18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
};

