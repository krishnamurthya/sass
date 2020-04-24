import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassComponent } from './sass/sass.component';
import { routes } from './routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        SassComponent,
    ],
    exports: [
        RouterModule,
        SassComponent,
    ],
    entryComponents: [ SassComponent],
    providers: []
})

export class RoutesModule { }