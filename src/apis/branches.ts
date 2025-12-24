import { axios } from "../lib/axios";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export interface LocalizedString {
  ar?: string | null;
  en?: string | null;
}

export interface BranchAddress {
  id?: number;
  type?: string;
  country_id?: string | number | null;
  city_id?: string | number | null;
  area_id?: string | number | null;
  details?: string | null;
  location?: {
    type?: string;
    coordinates?: number[];
  } | null;
}

export interface Branch {
  id: number;
  tenant_id?: number | null;
  name: LocalizedString;
  description?: LocalizedString;
  phones?: string[];
  emails?: string[];
  whatsapp?: string[];
  is_active?: number;
  created_at?: string;
  updated_at?: string;
  address?: BranchAddress | null;
  image?: string | null;
}

export interface BranchesResponse {
  current_page: number;
  current_page_url: string;
  data: Branch[];
  first_page_url: string;
  from: number | null;
  next_page_url?: string | null;
  path: string;
  per_page: number;
  prev_page_url?: string | null;
  to: number | null;
}

export async function fetchBranches(): Promise<BranchesResponse> {
  const res = await axios.get("/web/branches");
  return res.data as BranchesResponse;
}

export const BRANCHES_QUERY_KEY = ["branches"] as const;

export function useBranches(
  options?: Partial<UseQueryOptions<BranchesResponse, Error>>
) {
  return useQuery({
    queryKey: BRANCHES_QUERY_KEY,
    queryFn: fetchBranches,
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options,
  });
}

export default { fetchBranches, useBranches };
