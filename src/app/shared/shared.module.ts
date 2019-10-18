import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
    imports: [AuthModule, CommonModule],
    exports: [MenuSuperiorComponent, CommonModule],
    declarations: [MenuSuperiorComponent],
    providers: [],
})
export class CompartilhadoModule { }
