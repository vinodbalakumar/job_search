import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddPostComponent } from './add-post/add-post.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesDetailsComponent } from './candidates-details/candidates-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingDetailsComponent } from './pricing-details/pricing-details.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { RemoteJobsComponent } from './home/remote-jobs/remote-jobs.component';
import { FulltimeJobsComponent } from './home/fulltime-jobs/fulltime-jobs.component';
import { PartimeJobsComponent } from './home/partime-jobs/partime-jobs.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {
    path: 'header', component: HeaderComponent, children: [
      { path: '', component: LoginComponent },
      {
        path: 'home', component: HomeComponent, children: [
          { path: 'full-time', component: PartimeJobsComponent },
          { path: '', component: FulltimeJobsComponent },
          { path: 'part-time', component: PartimeJobsComponent },
          { path: 'remote', component: RemoteJobsComponent },

        ]
      },
     
      { path: 'full-time', component: FulltimeJobsComponent},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'candidates-details', component: CandidatesDetailsComponent },
      { path: 'candidates-listing', component: CandidatesListComponent },
      { path: 'company-details', component: CompanyDetailsComponent },
      { path: 'company-listing', component: CompanyListingComponent },
      { path: 'addPost', component: AddPostComponent },
      { path: 'job-listing', component: JobListingComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pricing-details', component: PricingDetailsComponent },
      { path: 'client-review', component: ClientReviewComponent },
      { path: '**', component: ErrorPageComponent },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
