import { AppComponent } from '../app.component';
import { SassComponent } from './sass/sass.component';

export const routes = [
    { path: 'sass', component: SassComponent },
    // Not found
    { path: '**', redirectTo: 'sass' }
];
