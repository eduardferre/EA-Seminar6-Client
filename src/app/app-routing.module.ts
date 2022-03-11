import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventComponent } from './components/crear-event/crear-event.component';

// Components
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarTodoComponent } from './components/listar-todo/listar-todo.component';

// Routes
const routes: Routes = [
  { path: '', component: ListarTodoComponent},
  { path: 'crear-user', component: CrearUserComponent},
  { path: 'editar-user/:name', component: CrearUserComponent},
  { path: 'crear-event', component: CrearEventComponent},
  { path: 'editar-event/:name', component: CrearEventComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
