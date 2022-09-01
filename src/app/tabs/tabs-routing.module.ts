import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'beranda',
        loadChildren: () => import('../beranda/beranda.module').then(m => m.BerandaPageModule)
      },
      {
        path: 'kontak',
        loadChildren: () => import('../kontak/kontak.module').then(m => m.KontakPageModule)
      },
      {
        path: 'tentang',
        loadChildren: () => import('../tentang/tentang.module').then(m => m.TentangPageModule)
      },
      {
        path: 'kategori',
        loadChildren: () => import('../kategori/kategori.module').then(m => m.KategoriPageModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('../detail/detail.module').then(m => m.DetailPageModule)
      },     
      {
        path: 'konten-kategori/:categories',
        loadChildren: () => import('../konten-by-kategori/konten-by-kategori.module').then(m => m.KontenByKategoriPageModule)
      },      
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
