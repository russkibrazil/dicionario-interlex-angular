import { NgModule } from '@angular/core';
import { ConjugacaoPtService } from './conjugacao.service';
import { EquivalenteService } from './equivalente.service';
import { FraseologiaService } from './fraseologia.service';
import { PalavraService } from './palavra.service';
import { ReferenciaService } from './referencia.service';
import { UsuarioService } from './usuarios.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ConjugacaoPtService,
        EquivalenteService, 
        FraseologiaService,
        PalavraService, 
        ReferenciaService, 
        UsuarioService
    ],
})
export class CommonServicesModule { }
