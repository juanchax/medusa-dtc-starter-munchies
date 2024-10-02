"use client";

import {useIsInIframe} from "@/hooks/useIsInIframe";
import {usePathname} from "next/navigation";

export function ExitPreview(props: {enable: boolean}) {
  const isInIframe = useIsInIframe();
  const pathname = usePathname();

  if (isInIframe || !props.enable) return null;

  return (
    <div className="fixed bottom-2 flex w-full justify-center">
      <form action="/api/disable-draft" method="GET">
        <input name="currentSlug" type="hidden" value={pathname} />
        <button className="inline-flex rounded-full bg-gray-900 px-5 py-2 text-white shadow">
          Exit preview mode
        </button>
      </form>
    </div>
  );
}