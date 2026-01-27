import { Routes } from '@angular/router';
import { environment } from '../environments/environment.development';
import { HomePage } from './home-page/home-page';
import { TestPage } from './test-page/test-page';

const paths: Routes = [
    {path: 'home', component: HomePage},    
];

if(!environment.production){
    paths.push(
        { path:'test-components', component: TestPage})
}

export const routes: Routes = paths

