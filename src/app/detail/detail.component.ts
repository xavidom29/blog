import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  sub: any;
  
  constructor(public _user: PostService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params) => { this.id = params['id'] })
  }
  ngDestroy() {
    this.sub.unsubscribe()
  }
}
