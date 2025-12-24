import { create } from "zustand";

export interface Academy {
  id: number;
  name: {
    en: string;
  };
  slug: string;
  phones: string[];
  emails: string[];
  whatsapp: string[];
  socials: any;
  primary_color: string;
  secondary_color: string;
  link: string;
  kit_price: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  icon: {
    id: number;
    uuid: string;
    size: number;
    url: string;
    responsive_urls: string[];
  };
  logo: {
    id: number;
    uuid: string;
    size: number;
    url: string;
    responsive_urls: string[];
  };
  tshirt_front: {
    id: number;
    uuid: string;
    size: number;
    url: string;
    responsive_urls: string[];
  };
  tshirt_back: {
    id: number;
    uuid: string;
    size: number;
    url: string;
    responsive_urls: string[];
  };
}

export interface MetaResponse {
  academy: Academy;
  kit_sizes: string[];
}

export interface MetaState {
  meta: MetaResponse | null;
  isLoading: boolean;
  setMeta: (meta: MetaResponse) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useMetaStore = create<MetaState>((set) => ({
  meta: null,
  isLoading: true,
  setMeta: (meta: MetaResponse) => set({ meta, isLoading: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
