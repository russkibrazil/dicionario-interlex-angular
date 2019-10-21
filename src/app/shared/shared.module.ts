import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { AuthModule } from './auth/auth.module';
import { BotoesControleComponent } from './botoes-controle/botoes-controle.component';


@NgModule({
    imports: [AuthModule, CommonModule],
    exports: [MenuSuperiorComponent, BotoesControleComponent, CommonModule],
    declarations: [MenuSuperiorComponent, BotoesControleComponent],
    providers: [],
})
export class CompartilhadoModule { }
