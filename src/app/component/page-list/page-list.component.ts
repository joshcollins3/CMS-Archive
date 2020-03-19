import { Component, OnInit } from '@angular/core';
import { StoredPage } from 'src/app/model/StoredPage';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    currentPage: string;
    pages: Array<StoredPage>;
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient
    ) { }
  
    ngOnInit() {
      var configUrl = 'assets/config.json';
      this.route.paramMap.subscribe(params => {
        this.currentPage = params.get("uri")
  
        //todo load the html for the page passed in the 'URI' PARAM.  https://angular.io/guide/http
         this.http.get(configUrl, {responseType: 'json'}).toPromise().then((x:Array<StoredPage>)=>{
           this.pages = x;
         });
  
      })
    }
  formatLink(link: string)
  {
    return encodeURIComponent(link);
  }
  }
