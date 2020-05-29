import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassComponent } from './sass/sass.component';
import { routes } from './routes';
import { BasicCssComponent } from './basic-css/basic-css.component';
import { AppliedVisualDesignComponent } from './applied-visual-design/applied-visual-design.component';
import { AppliedAccessibilityComponent } from './applied-accessibility/applied-accessibility.component';
import { ResponsiveWebDesignPrinciplesComponent } from './responsive-web-design-principles/responsive-web-design-principles.component';
import { CssFlexboxComponent } from './css-flexbox/css-flexbox.component';
import { CssGridComponent } from './css-grid/css-grid.component';

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        SassComponent,
        BasicCssComponent,
        AppliedVisualDesignComponent,
        AppliedAccessibilityComponent,
        ResponsiveWebDesignPrinciplesComponent,
        CssFlexboxComponent,
        CssGridComponent
    ],
    exports: [
        RouterModule,
        SassComponent,
        BasicCssComponent
    ],
    entryComponents: [
        SassComponent,
        BasicCssComponent
    ],
    providers: []
})

export class RoutesModule { }