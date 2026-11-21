import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "./config";

function canBuildImageUrl(source: unknown): boolean {
  if (source == null || typeof source !== "object") return false;
  const s = source as Record<string, unknown>;
  if (typeof s._ref === "string" && s._ref.length > 0) return true;
  if ("asset" in s) {
    const a = s.asset;
    if (a == null) return false;
    if (typeof a === "object" && a !== null) {
      const ar = a as Record<string, unknown>;
      if (typeof ar._ref === "string" && ar._ref.length > 0) return true;
      if (typeof ar.url === "string" && ar.url.length > 0) return true;
    }
  }
  return false;
}

export function urlForImage(
  source: SanityImageSource | null | undefined,
  options: { width?: number; height?: number; fit?: "crop" | "max" } = {},
): string | null {
  const { width = 1200, height = 630, fit = "crop" } = options;
  if (!source || sanityProjectId.length < 8) return null;
  if (!canBuildImageUrl(source)) return null;

  try {
    const builder = createImageUrlBuilder({
      projectId: sanityProjectId,
      dataset: sanityDataset,
    })
      .image(source)
      .width(width)
      .auto("format");
    return (height ? builder.height(height).fit(fit) : builder.fit(fit)).url();
  } catch {
    return null;
  }
}
