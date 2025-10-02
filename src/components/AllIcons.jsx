import React from 'react';

// ===== SERVICE SECTION ICONS =====

// أيقونة "دروس تفاعلية مصورة"
export const VideoLessonIcon = ({ size = 64, color = "#0069CC" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill={color}/>
    <path d="M24 20L40 32L24 44V20Z" fill="white"/>
  </svg>
);

// أيقونة "ألعاب تعليمية"
export const EducationalGamesIcon = ({ size = 64, color = "#0069CC" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill={color}/>
    <path d="M20 24H44V40H20V24Z" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M26 28H38" stroke="white" strokeWidth="2"/>
    <path d="M26 32H38" stroke="white" strokeWidth="2"/>
    <path d="M26 36H34" stroke="white" strokeWidth="2"/>
    <circle cx="30" cy="30" r="2" fill="white"/>
  </svg>
);

// أيقونة "اختبارات وتحديات"
export const TestsChallengesIcon = ({ size = 64, color = "#0069CC" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill={color}/>
    <path d="M38.2667 41.3067H25.7334C25.1734 41.3067 24.5467 40.8667 24.36 40.3333L18.84 24.8933C18.0534 22.68 18.9734 22 20.8667 23.36L26.0667 27.08C26.9334 27.68 27.92 27.3733 28.2934 26.4L30.64 20.1467C31.3867 18.1467 32.6267 18.1467 33.3734 20.1467L35.72 26.4C36.0934 27.3733 37.08 27.68 37.9334 27.08L42.8134 23.6C44.8934 22.1067 45.8934 22.8667 45.04 25.28L39.6534 40.36C39.4534 40.8667 38.8267 41.3067 38.2667 41.3067Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.6667 45.3333H39.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28.6667 34.6667H35.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ===== ABOUT BANAN SECTION ICONS =====

// أيقونة "طالب حول العالم" - دائرة بلون أزرق كما في Figma
export const GlobalStudentsIcon = ({ size = 56, color = "#0069CC" }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill={color} />
  </svg>
);

// ===== BUTTON ICONS =====

// أيقونة السهم للأزرار (اعرف المزيد، المسارات)
export const ArrowLeftIcon = ({ size = 20, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.97499 4.94165L2.91666 9.99998L7.97499 15.0583" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0833 10H3.05832" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ===== PLACEHOLDER FOR MORE ICONS =====
// يمكن إضافة المزيد من الأيقونات هنا

export default {
  VideoLessonIcon,
  EducationalGamesIcon,
  TestsChallengesIcon,
  GlobalStudentsIcon,
  ArrowLeftIcon,
};
