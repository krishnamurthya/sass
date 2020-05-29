import { AppComponent } from '../app.component';
import { SassComponent } from './sass/sass.component';
import { BasicCssComponent } from './basic-css/basic-css.component';
import { AppliedVisualDesignComponent } from './applied-visual-design/applied-visual-design.component';
import { AppliedAccessibilityComponent } from './applied-accessibility/applied-accessibility.component';
import { ResponsiveWebDesignPrinciplesComponent } from './responsive-web-design-principles/responsive-web-design-principles.component';
import { CssFlexboxComponent } from './css-flexbox/css-flexbox.component';
import { CssGridComponent } from './css-grid/css-grid.component';

export const routes = [
    { path: 'sass', component: SassComponent },
    { path: 'basiccss', component: BasicCssComponent },
    { path: 'appliedvisualdesign', component: AppliedVisualDesignComponent },
    { path: 'appliedaccessibility', component: AppliedAccessibilityComponent },
    { path: 'responsivewebdesignprinciples', component: ResponsiveWebDesignPrinciplesComponent },
    { path: 'cssflexbox', component: CssFlexboxComponent },
    { path: 'cssgrid', component: CssGridComponent },
    // Not found
    { path: '**', redirectTo: 'sass' }
];
