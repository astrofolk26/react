// middleware.ts
import { NextRequest, NextResponse } from "next/server";

/**
 * Supported locales.
 * Marked as `readonly` so they stay immutable.
 */
const locales = ["en-US", "nl-NL", "nl"] as const;
type Locale = (typeof locales)[number];

/**
 * Detect the user‑preferred locale.
 * Replace the stub with whatever logic (cookies, headers, etc.) you fancy.
 */
function getLocale(req: NextRequest): Locale {
  const acceptLang = req.headers.get("accept-language");
  const preferred = acceptLang?.split(",")?.[0];
  return (locales.find((loc) => preferred?.startsWith(loc)) ||
    "en-US") as Locale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // True if URL already contains a supported locale prefix
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If locale already present, let the request flow ✌️
  if (hasLocale) return NextResponse.next();

  // Otherwise, figure out the user’s locale & rewrite
  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. /products 👉 /en-US/products
  return NextResponse.redirect(req.nextUrl);
}

/**
 * Run the middleware on everything except internal `_next` files.
 * You can narrow the matcher if you only want it on `/` or whatever.
 */
export const config = {
  matcher: [
    // Skip Next.js internals
    "/((?!_next).*)",
    // If you only want the root, uncomment:
    // '/'
  ],
} satisfies Record<string, unknown>;
