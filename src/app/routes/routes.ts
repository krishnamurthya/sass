import { AppComponent } from '../app.component';
import { SassComponent } from './sass/sass.component';
import { BasicCssComponent } from './basic-css/basic-css.component';
import { AppliedVisualDesignComponent } from './applied-visual-design/applied-visual-design.component';

export const routes = [
    { path: 'sass', component: SassComponent },
    { path: 'basiccss', component: BasicCssComponent },
    { path: 'appliedvisualdesign', component: AppliedVisualDesignComponent },
    // Not found
    { path: '**', redirectTo: 'sass' }
];
