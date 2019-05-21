import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _user: PostService) {


  }

  ngOnInit() {
  }
  getTime(time: number): string {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }



  getWords(str: string): string {
    return str.split(/\s+/).slice(0, 20).join(" ");
  }
}
