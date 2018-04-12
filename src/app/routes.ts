import { Routes, RouterModule } from '@angular/router';
import {FotoComponent} from './foto/foto.component';
import {PuebloComponent} from './pueblo/pueblo.component';
import {SearchComponent} from './search/search.component';
import {PipeComponent} from './pipe/pipe.component'

export const routes: Routes = [ 
    { path: '',component: FotoComponent },
    {path: 'pueblo', component: PuebloComponent},
    {path: 'buscar', component: SearchComponent},
    {path: 'pipe', component: PipeComponent},
    {path: '**', redirectTo: '' }
  ];