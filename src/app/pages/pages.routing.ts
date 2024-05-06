import {Routes} from "@angular/router";

export const PagesRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full",
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./create-order/create-order.module').then(m => m.CreateOrderModule)
  },
  {
    path: 'part-details',
    loadChildren: () => import('./part-details/part-details.module').then(m => m.PartDetailsModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  }
]
