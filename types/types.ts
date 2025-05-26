export type CustomButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  originalIndex?: number;
}

export interface CatCarouselProps {
  items?: CarouselItem[];
  className?: string;
  showNavigation?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}
