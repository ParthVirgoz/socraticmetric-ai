import { createClient, type SanityClient } from "next-sanity";
import { sanityDataset, sanityProjectId } from "./config";

const apiVersion = "2025-04-01";

export function isSanityConfigured(): boolean {
  return sanityProjectId.length >= 8;
}

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;

  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion,
    // Read from the API (not Sanity’s CDN) so each site refresh matches what you just published.
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN || undefined,
  });
}
