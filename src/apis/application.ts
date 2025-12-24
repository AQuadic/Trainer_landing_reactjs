import { axios } from "../lib/axios";
import {
  useMutation,
  type UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import type { MetaResponse } from "../store/useMetaStore";

export interface ParentData {
  relation: string;
  name: string;
  phone: string;
}

export interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  team_id: number;
  type: string;
  parents: ParentData[];
  address: {
    details: string;
  };
  birthday: string;
  nationality: string;
  school?: string;
  previous_academy?: string;
  medical_concerns?: string;
  medications?: string;
  age: number;
  phone_country: string;
}

export interface ApplicationResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface KitRequestData {
  team_id: number;
  branch_id: number;
  from_branch_id: number;
  name: string;
  full_name?: string;
  birthdate?: string;
  number: string;
  hoodie_size: string;
  kit_size: string;
  tshirt_size: string;
  received: boolean;
  is_player: boolean;
  whatsapp_country?: string;
}

export async function submitApplication(
  data: ApplicationData
): Promise<ApplicationResponse> {
  const res = await axios.post("/web/newcomer", data);
  return res.data as ApplicationResponse;
}

export function useSubmitApplication(
  options?: Partial<
    UseMutationOptions<ApplicationResponse, Error, ApplicationData>
  >
) {
  return useMutation({
    mutationFn: submitApplication,
    ...options,
  });
}

export async function submitKitRequest(
  data: KitRequestData
): Promise<ApplicationResponse> {
  const res = await axios.post("/web/request_kit", data);
  return res.data as ApplicationResponse;
}

export function useSubmitKitRequest(
  options?: Partial<
    UseMutationOptions<ApplicationResponse, Error, KitRequestData>
  >
) {
  return useMutation({
    mutationFn: submitKitRequest,
    ...options,
  });
}

export async function getMeta(): Promise<MetaResponse> {
  const res = await axios.get("/meta");
  return res.data as MetaResponse;
}

export function useMeta() {
  return useQuery({
    queryKey: ["meta"],
    queryFn: getMeta,
  });
}

export default {
  submitApplication,
  useSubmitApplication,
  submitKitRequest,
  useSubmitKitRequest,
};
