import { RecipesComponent } from './components/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientSearchComponent } from './components/ingredient-search';
import { LoginComponent } from './components';

export const routes: Routes = [
  { path: '', component: IngredientSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
