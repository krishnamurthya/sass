import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassComponent } from './sass/sass.component';
import { routes } from './routes';
import { BasicCssComponent } from './basic-css/basic-css.component';
import { AppliedVisualDesignComponent } from './applied-visual-design/applied-visual-design.component';

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        SassComponent,
        BasicCssComponent,
        AppliedVisualDesignComponent
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