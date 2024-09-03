import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideNgxMask(),
    provideAnimations(),  // required animations providers
    provideToastr({
      positionClass: "toast-bottom-right",
      maxOpened: 3,
      
      autoDismiss: true,
      progressBar: true,
      toastClass: "ngx-toastr mt-3"
    }),  // Toastr providers

    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
      languages: {
        xml: () => import('highlight.js/lib/languages/xml'),
        javascript: () => import('highlight.js/lib/languages/javascript'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        scss: () => import('highlight.js/lib/languages/scss'),
      },
      themePath: './assets/styles/ngx-highlight-themes/github-dark.css'  // Optional, useful for dynamic theme changes
    })
   ]
};
