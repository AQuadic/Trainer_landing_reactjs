import { axios } from "../lib/axios";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export interface Team {
  id: number;
  tenant_id: number;
  branch_id: number;
  name: {
    ar: string;
    en: string;
  };
  age_group_id: number;
  created_at: string;
  updated_at: string;
  type: string;
  players_count: number;
  training_count: number;
  branch: {
    id: number;
    name: {
      ar: string;
      en: string;
    };
  };
}

export async function fetchTeams(): Promise<Team[]> {
  const res = await axios.get("/web/teams?pagination=none");
  return res.data as Team[];
}

export function useTeams(options?: Partial<UseQueryOptions<Team[], Error>>) {
  return useQuery({
    queryKey: ["teams"],
    queryFn: fetchTeams,
    ...options,
  });
}

export default { fetchTeams, useTeams };
