import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

export const routes: Routes = [

    // {
    //     path: "",
    //     component: AppComponent,
    //     children: [
    //         {
    //              path:"",
    //              component: MainbodyComponent
    //         },
    //         {
    //             path: "aboutUs",
    //             component: AboutUsComponent
    //         },
    //         {
    //             path: "contactUs",
    //             component: ContactUsComponent
    //         }
    //     ]
    // }
    {
        path: "",
        component: MainbodyComponent
    },
    {
        path: "aboutUs",
        component: AboutUsComponent
    },
    {
        path: "contactUs",
        component: ContactUsComponent
    }, 
    {
        path:"Buynow",
        component: BuyNowComponent
    }

];
