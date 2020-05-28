import { AppComponent } from '../app.component';
import { SassComponent } from './sass/sass.component';
import { BasicCssComponent } from './basic-css/basic-css.component';
import { AppliedVisualDesignComponent } from './applied-visual-design/applied-visual-design.component';
import { AppliedAccessibilityComponent } from './applied-accessibility/applied-accessibility.component';
import { ResponsiveWebDesignPrinciplesComponent } from './responsive-web-design-principles/responsive-web-design-principles.component';

export const routes = [
    { path: 'sass', component: SassComponent },
    { path: 'basiccss', component: BasicCssComponent },
    { path: 'appliedvisualdesign', component: AppliedVisualDesignComponent },
    { path: 'appliedaccessibility', component: AppliedAccessibilityComponent },
    { path: 'responsivewebdesignprinciples', component: ResponsiveWebDesignPrinciplesComponent },
    // Not found
    { path: '**', redirectTo: 'sass' }
];
