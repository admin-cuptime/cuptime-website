import heroSplash from '@/assets/png/hero-splash.png';
import heromuscle from '@/assets/png/muscle.png';
import tea from '@/assets/png/feature-tea.png';
import leaf from '@/assets/png/feature-leaf.png';
import office from '@/assets/png/feature-office.png';
import heroleft from '@/assets/png/hero-art-left.png';
import heroright from '@/assets/png/hero-art-right.png';
import trust1 from '@/assets/png/trust-1.png'; 
import trust2 from '@/assets/png/trust-2.png'; 
import trust3 from '@/assets/png/trust-3.png'; 
import city from '@/assets/png/city.png';
import building from '@/assets/png/building.png';
import hospital from '@/assets/png/hospital.png';
import school from '@/assets/png/school.png';
import university from '@/assets/png/university.png';
import getAppSplash from '@/assets/png/get-app.png';
import cmaward from '@/assets/png/milestone-1.png';
import vikatan from '@/assets/png/milestone-2.png';
import mou from '@/assets/png/milestone-3.png';
import yourStory from '@/assets/png/milestone-4.png';
import heroSplash2 from '@/assets/png/hero-splash-2.png';
import leafArt from '@/assets/png/leaf-art.png';

export const images = {
  heroSection: {
    heroSplash,
    heroSplash2,
    heroleft,
    heroright,
    leafArt,
  },
  heroframe: {
    heromuscle,
  },
  feature: {
    tea,
    leaf,
    office,
  },
  deliveryimage: {
    trust1,
    trust2,
    trust3,
  },
  traditionalimages: {
    city,
    building,
    hospital,
    school,
    university,
  },
  getAppImages: {
    getAppSplash,
  },
  milestone: {
    cmaward,
    vikatan,
    mou,
    yourStory,
  }
} as const;
