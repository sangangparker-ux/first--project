import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact} from './contact/contact';
import { NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
{
     path:"", 
     redirectTo: "home",
     pathMatch: 'full'
},

  {
       path:"about", component:About
  },
  {
    path:"home", component:Home
  },
 {
   path:"contact", component:Contact
 },

 {
  path: '**', component:NotFound
 }
];
