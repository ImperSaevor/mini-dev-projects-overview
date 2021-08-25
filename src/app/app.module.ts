import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BackgroundChangerComponent } from './test/background-changer/background-changer.component';
import { RandomQuotesGeneratorComponent } from './test/random-quotes-generator/random-quotes-generator.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  {path: 'tests/beginner/background-changer', component: BackgroundChangerComponent},
  {path: 'tests/beginner/random-quotes-generator', component: RandomQuotesGeneratorComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BackgroundChangerComponent,
    RandomQuotesGeneratorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
