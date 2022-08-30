import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Son las cosas que quiero que sean visibles
    exports: [
        ListadoComponent
    ],

    imports: [
        //Aqui van todos los modulos
        CommonModule //Ofrece las directivas como ngFor y ngIf
    ]
    
})

export class HeoresModule{}