export function GET() {
  return new Response("google-site-verification: google9e179da4afebf95.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
