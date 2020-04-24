import { AppComponent } from '../app.component';
import { SassComponent } from './sass/sass.component';
import { BasicCssComponent } from './basic-css/basic-css.component';

export const routes = [
    { path: 'sass', component: SassComponent },
    { path: 'basiccss', component: BasicCssComponent },
    // Not found
    { path: '**', redirectTo: 'sass' }
];
