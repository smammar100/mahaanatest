interface VideoPlaceholderProps {
  youtubeUrl?: string;
}

import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { BorderBeam } from "@/components/ui/border-beam";

const DEFAULT_YOUTUBE_URL = "https://youtu.be/7KpSVR5JjfM?si=g9g2taZxO0tVL5yq";

function getYoutubeVideoId(urlString: string): string | null {
  try {
    const parsedUrl = new URL(urlString);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      const id = parsedUrl.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export default function VideoPlaceholder({
  youtubeUrl = DEFAULT_YOUTUBE_URL,
}: VideoPlaceholderProps) {
  const videoId = getYoutubeVideoId(youtubeUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <SectionShell aria-label="Promotional video placeholder">
      <PageContainer>
        <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-[var(--radius)] bg-[var(--color-gray-400)]">
          {embedUrl ? (
            <>
              <iframe
                className="h-full w-full rounded-[var(--radius)]"
                src={embedUrl}
                title="Promotional YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <BorderBeam
                size={260}
                duration={15}
                delay={3}
                borderWidth={2.25}
                colorFrom="var(--color-teal-300)"
                colorTo="var(--color-coral-300)"
              />
            </>
          ) : (
            <div className="flex items-center gap-10">
              <div className="h-[120px] w-[160px] rounded-[var(--radius)] bg-black" />
              <div className="h-0 w-0 border-b-[70px] border-l-[120px] border-t-[70px] border-b-transparent border-l-black border-t-transparent" />
            </div>
          )}
        </div>
      </PageContainer>
    </SectionShell>
  );
}
