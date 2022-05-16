import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mealsdietplans',
        loadChildren: () => import('../mealsdietplans/mealsdietplans.module').then(m => m.MealsdietplansPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
	  {
        path: 'home-new',
        loadChildren: () => import('../home-new/home-new.module').then(m => m.HomeNewPageModule)
      },
	  {
        path: 'activity-new',
        loadChildren: () => import('../activity-new/activity-new.module').then(m => m.ActivityNewPageModule)
      },
	  {
        path: 'bookexpert',
        loadChildren: () => import('../bookexpert/bookexpert.module').then(m => m.BookexpertPageModule)
      },
	  {
        path: 'book-workout',
        loadChildren: () => import('../book-workout/book-workout.module').then(m => m.BookWorkoutPageModule)
      },
	  
	  {
        path: 'find-expert',
        loadChildren: () => import('../find-expert/find-expert.module').then(m => m.FindExpertPageModule)
      },
	  {
        path: 'findgym',
        loadChildren: () => import('../findgym/findgym.module').then(m => m.FindgymPageModule)
      },
	  {
        path: 'findgymdetails',
        loadChildren: () => import('../findgymdetails/findgymdetails.module').then(m => m.FindgymdetailsPageModule)
      },
      {
        path: '',
        redirectTo: 'home-new',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/getstarted',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
