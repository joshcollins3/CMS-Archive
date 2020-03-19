import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { StoredPage } from 'src/app/model/StoredPage';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})

@Injectable()
export class PageViewComponent implements OnInit {
  currentPage: string;
  html: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentPage = decodeURIComponent(params.get("uri"));
      let url = this.currentPage.replace(/\//g, "_");
      url = "/assets/html/" + url + ".html";
      console.info(url);

      //todo load the html for the page passed in the 'URI' PARAM.  https://angular.io/guide/http
       this.http.get(url, {responseType: 'text'}).toPromise().then((x:string)=>{
         this.html = x;
       });

    })
  }

}
