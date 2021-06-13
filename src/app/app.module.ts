import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddPostComponent } from './add-post/add-post.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesDetailsComponent } from './candidates-details/candidates-details.component';
import { HomeComponent } from './home/home.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingDetailsComponent } from './pricing-details/pricing-details.component';
import { ClientReviewComponent } from './client-review/client-review.component'
import {  Title }  from '@angular/platform-browser';
import { RemoteJobsComponent } from './home/remote-jobs/remote-jobs.component';
import { PartimeJobsComponent } from './home/partime-jobs/partime-jobs.component';
import { FulltimeJobsComponent } from './home/fulltime-jobs/fulltime-jobs.component';


// primeng start

import { CarouselModule } from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';


import {PanelModule} from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import { CountsDetailsComponent } from './home/counts-details/counts-details.component';
import { BestDealsComponent } from './home/best-deals/best-deals.component';
import { PopularCategoriesComponent } from './home/popular-categories/popular-categories.component';
import { PricingPlanComponent } from './home/pricing-plan/pricing-plan.component';
import { HiringCompaniesComponent } from './home/hiring-companies/hiring-companies.component';
import { JobTypesComponent } from './home/job-types/job-types.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    AddPostComponent,
    
    JobListingComponent,
    
    ContactUsComponent,
    
    CompanyListingComponent,
    
    CompanyDetailsComponent,
    
    CandidatesListComponent,
    
    CandidatesDetailsComponent,
    
    HomeComponent,
    
    CommonHeaderComponent,
    
    HeaderComponent,
    
    AboutComponent,
    
    PricingDetailsComponent,
    
    ClientReviewComponent,
    
    RemoteJobsComponent,
    
    PartimeJobsComponent,
    
    FulltimeJobsComponent,
    
    CountsDetailsComponent,
    
    BestDealsComponent,
    
    PopularCategoriesComponent,
    
    PricingPlanComponent,
    
    HiringCompaniesComponent,
    
    JobTypesComponent,
    
    ErrorPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    PanelModule,
    DialogModule,
    FormsModule,
    TabMenuModule ,
    HttpClientModule,
    AutoCompleteModule,
    ReactiveFormsModule
    ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
