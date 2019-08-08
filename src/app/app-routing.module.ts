import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes/componentes.component';
import { SobreComponent } from './sobre/sobre.component';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { TesteComponent } from './teste/teste.component';
import { AngularDocsComponent } from './angular-docs/angular-docs.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TabelasComponent } from './tabelas/tabelas.component';
import { GraficosComponent } from './graficos/graficos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: 'demo', component: ComponentesComponent },
  { path: 'tabelas', component: TabelasComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: 'angular_docs', component: AngularDocsComponent },
  { path: 'busca_cep', component: BuscaCepComponent },
  { path: 'teste', component: TesteComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'drag_drop', component: DragDropComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'anotacoes', component: AnotacoesComponent },
  { path: '**', component: NotFoundComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
