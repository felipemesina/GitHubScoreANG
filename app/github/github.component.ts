import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GitRetrieverService } from './../git-retriever.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GithubComponent implements OnInit {
  username;
  score;


  constructor(private _gitretrieverservice: GitRetrieverService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._gitretrieverservice.getUserInfo(this.username, (res) =>{
      this.score = res;
      this.score = this.score.followers + this.score.public_repos
      return this.score;
    });

  }

}
