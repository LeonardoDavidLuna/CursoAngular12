import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: Home },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);