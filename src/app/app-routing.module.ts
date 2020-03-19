import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageViewComponent } from './component/page-view/page-view.component';
import { PageListComponent } from './component/page-list/page-list.component';


const routes: Routes = [

  {
    path: 'page/:uri',
    component: PageViewComponent,
    data: { title: 'View Page' },
    pathMatch: "full"
  },
  {path: '**', component: PageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
