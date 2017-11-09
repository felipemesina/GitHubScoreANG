import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitRetrieverService } from './git-retriever.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitRetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
