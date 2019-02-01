import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contactme', component: ContactMeComponent },
    { path: 'blog', component: BlogComponent}
];
