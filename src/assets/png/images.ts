import heroSplash from '@/assets/png/hero-splash.png';
import heromuscle from '@/assets/png/muscle.png';
import tea from '@/assets/png/feature-tea.png';
import leaf from '@/assets/png/feature-leaf.png';
import office from '@/assets/png/feature-office.png';
import heroleft from '@/assets/png/hero-art-left.png';
import heroright from '@/assets/png/hero-art-right.png';

export const images = {
  heroSection: {
    heroSplash,
    heroleft,
    heroright,
  },
  heroframe: {
    heromuscle,
  },
  feature: {
    tea,
    leaf,
    office
  }
} as const;
