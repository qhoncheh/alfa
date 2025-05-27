export interface CatCarouselItem {
  image: string;
  title: string;
  subtitle?: string;
}

export interface CatCarouselProps {
  items: CatCarouselItem[];
  className?: string;
  showNavigation?: boolean;
  showDots?: boolean;
}

export interface CatCarouselItemWithIndex extends CatCarouselItem {
  originalIndex: number;
}
