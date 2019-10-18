import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { CompartilhadoModule } from '../shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ReactiveFormsModule, AuthRoutingModule, CommonModule],
    exports: [],
    declarations: [AuthFormComponent],
    providers: [],
})
export class AuthModule { }
