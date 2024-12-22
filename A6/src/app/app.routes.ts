import { Routes } from '@angular/router';
import { ListViewComponent } from './components/listView/listView.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserViewComponent } from './components/user-view/user-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ListViewComponent },
    { path: 'newuser', component: UserFormComponent },
    { path: 'updateuser/:id', component: UserFormComponent },
    { path: 'userview/:id', component: UserViewComponent },
    { path: '**', redirectTo: 'home' }
];