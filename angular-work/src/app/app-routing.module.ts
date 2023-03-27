import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogComponent } from './pages/catalog/catalog.component';


const routers: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'catalog', component: CatalogComponent},

]

@NgModule ({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule]
})

export class AppRoutingModule{}