import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Import necessary Angular core modules
import { provideRouter } from '@angular/router'; // Import Angular router provider
import { provideHttpClient } from '@angular/common/http'; // Import Angular HTTP client provider
import { routes } from './app.routes'; // Import application routes
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // Import client hydration and event replay modules
import { provideCharts, withDefaultRegisterables } from 'ng2-charts'; // Import ng2-charts provider and default registerables

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Provide zone change detection with event coalescing enabled
    provideRouter(routes), // Provide router with application routes
    provideHttpClient(), // Provide HTTP client
    provideCharts(withDefaultRegisterables()), // Provide ng2-charts with default registerables
    provideClientHydration(withEventReplay()) // Provide client hydration with event replay
  ]
};
