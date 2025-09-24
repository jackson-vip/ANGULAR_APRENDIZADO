import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Card } from "./card/card";
import { Button } from "./button/button";

@NgModule({
    declarations: [
        // Aqui vão os componentes que fazem parte do módulo
        Button,
        Card
    ],
    imports: [CommonModule],
    exports: [
        // Aqui vão os componentes que você quer tornar acessíveis fora do módulo
        Button,
        Card
    ]
})
// Se você quiser usar esse módulo em outro lugar, você precisa exportá-lo
export class ComponentsModule {}