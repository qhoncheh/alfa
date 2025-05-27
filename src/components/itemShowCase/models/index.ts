export type Images = {
  id: number;
  image: string;
};

export type ItemShowCaseType = {
  id: number;
  banerTitle: string;
  likes?: number;
  percent?: number;
  location: string;
  bathroom: string;
  yard: string;
  bed: string;
  parking: string;
  images: Images[];
  price: string;
  off?: string;
};
