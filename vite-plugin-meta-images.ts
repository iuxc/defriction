import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that updates og:image and twitter:image meta tags
 * to point to the app's opengraph image with the correct deployment domain.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-seo-images',
    transformIndexHtml(html) {
      const baseUrl = getDeploymentUrl();
      if (!baseUrl) {
        log('[seo-images] no deployment domain found, skipping meta tag updates');
        return html;
      }

      // Check if opengraph image exists in public directory
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const opengraphPngPath = path.join(publicDir, 'opengraph.png');
      const opengraphJpgPath = path.join(publicDir, 'opengraph.jpg');
      const opengraphJpegPath = path.join(publicDir, 'opengraph.jpeg');

      let imageExt: string | null = null;
      if (fs.existsSync(opengraphPngPath)) {
        imageExt = 'png';
      } else if (fs.existsSync(opengraphJpgPath)) {
        imageExt = 'jpg';
      } else if (fs.existsSync(opengraphJpegPath)) {
        imageExt = 'jpeg';
      }

      if (!imageExt) {
        log('[seo-images] OpenGraph image not found, skipping meta tag updates');
        return html;
      }

      const imageUrl = `${baseUrl}/opengraph.${imageExt}`;

      log('[seo-images] updating meta image tags to:', imageUrl);

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );

      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );

      return html;
    },
  };
}

function getDeploymentUrl(): string | null {
  if (process.env.VERCEL_URL) {
    const url = `https://${process.env.VERCEL_URL}`;
    log('[seo-images] using Vercel domain:', url);
    return url;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    const url = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    log('[seo-images] using Vercel production domain:', url);
    return url;
  }

  return null;
}

function log(...args: any[]): void {
  if (process.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
