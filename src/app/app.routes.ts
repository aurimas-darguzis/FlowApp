import { Routes, RouterModule } from '@angular/router';
import { AppComponent,
         ItemsComponent,
         ItemListComponent } from './components/index';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'items',
        component: ItemsComponent
    }
]
