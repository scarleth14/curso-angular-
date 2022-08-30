import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    //Son las cosas que quiero que sean visibles
    exports: [
        ContadorComponent
    ],

    imports: [

    ]
    
})

export class ContadorModule{}