import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Mis componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

//Mis servicios
import { PostService } from './Services/post.service'

//Modulos de Angular
import {Routes, RouterModule} from '@angular/router'

const misRutas: Routes =[
  {'path':'','component': HomeComponent},
  {'path':'home','component': HomeComponent},
  {'path':'post/:id','component': DetailComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
