import {
  useQuery as useTanQuery,
  useMutation as useTanMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

export const useAppQuery = useTanQuery;
export const useAppMutation = useTanMutation;
export const useAppQueryClient = useQueryClient;

// helper to type a QueryClient when needed elsewhere
export type { QueryClient };
