import React, { useEffect, useState } from 'react';
import db from '../assets/Prakriti_Web Banner-01.webp';
import tb from '../assets/Prakriti_Web Banner-02.webp';
import mb from '../assets/Prakriti_Web Banner-03.webp';

interface BannerData {
  _id: string;
  title?: string;
  desktopBanner?: string;
  tabletBanner?: string;
  mobileBanner?: string;
  isActive?: boolean;
}

interface BannerApiResponse {
  success: boolean;
  data: BannerData;
}

interface LandingBannerProps {
  bannerId?: string;
  className?: string;
}

export default function LandingBanner({
  bannerId = '6a97d78b21a331a8f5bded4e',
  className = '',
}: LandingBannerProps) {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBanner() {
      try {
        const res = await fetch(`https://api.risingspaces.in/api/banners/${bannerId}`);
        const json: BannerApiResponse = await res.json();
        if (json.success && json.data) {
          setBanner(json.data);
        }
      } catch (err) {
        console.error('Error loading banner:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBanner();
  }, [bannerId]);

  if (loading) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        {/* Fallback while loading */}
        <picture>
          <source media="(max-width: 640px)" srcSet={mb} />
          <source media="(max-width: 1024px)" srcSet={tb} />
          <img
            src={db}
            alt="Prakriti Banner"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </picture>
      </div>
    );
  }

  if (!banner || !banner.isActive) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <picture>
          <source media="(max-width: 640px)" srcSet={mb} />
          <source media="(max-width: 1024px)" srcSet={tb} />
          <img
            src={db}
            alt="Prakriti Banner"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </picture>
      </div>
    );
  }

  const baseUrl = 'https://api.risingspaces.in';
  const desktopSrc = banner.desktopBanner?.startsWith('http')
    ? banner.desktopBanner
    : `${baseUrl}${banner.desktopBanner || ''}`;
  const tabletSrc = banner.tabletBanner
    ? (banner.tabletBanner.startsWith('http') ? banner.tabletBanner : `${baseUrl}${banner.tabletBanner}`)
    : desktopSrc;
  const mobileSrc = banner.mobileBanner
    ? (banner.mobileBanner.startsWith('http') ? banner.mobileBanner : `${baseUrl}${banner.mobileBanner}`)
    : tabletSrc;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <picture>
        {/* Mobile View: screen width <= 640px */}
        <source media="(max-width: 640px)" srcSet={mobileSrc} />
        {/* Tablet View: screen width <= 1024px */}
        <source media="(max-width: 1024px)" srcSet={tabletSrc} />
        {/* Desktop View: screen width > 1024px */}
        <img
          src={desktopSrc}
          alt={banner.title || 'Banner'}
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </picture>
    </div>
  );
}
