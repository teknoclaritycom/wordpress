import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WpIonicService {
  endpoint = 'https://tekno-clarity.herokuapp.com/https://teknoclarity.com/wp-json/wp/v2/';
  allPosts = null;
  idkontak = "79";
  Categories:any =[];
  contentsDariKategori = [];
  pages: any;
  id: any;
 
  constructor( private httpClient: HttpClient ) { }
 
  getAllPosts(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '6',
        page: ''+page,        
      }
    };
 
    return this.httpClient.get<any[]>(`${this.endpoint}posts?_embed`, options)
    .pipe(
      map(res => {
        this.pages = res['headers'].get('x-wp-totalpages');
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      })
    )
  }

  getBisnisPosts(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '6',
        page: ''+page,  
        categories: '25'      
      }
    };
 
    return this.httpClient.get<any[]>(`${this.endpoint}posts?_embed`, options)
    .pipe(
      map(res => {
        this.pages = res['headers'].get('x-wp-totalpages');
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      })
    )
  }

  getSosmedPosts(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '6',
        page: ''+page,  
        categories: '11'      
      }
    };
 
    return this.httpClient.get<any[]>(`${this.endpoint}posts?_embed`, options)
    .pipe(
      map(res => {
        this.pages = res['headers'].get('x-wp-totalpages');
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      })
    )
  }

  getByCategoriesVan(id, page = 1, ): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '6',
        page: ''+page,  
        categories: id      
      }
    };
 
    return this.httpClient.get<any[]>(`${this.endpoint}posts?_embed`, options)
    .pipe(
      map(res => {
        return res['body'];
      })
    )
  }
 
  postDetails(id) {
    return this.httpClient.get(`${this.endpoint}posts/${id}?_embed`)
    .pipe(
      map((post) => {
        return post;
      })
    )
  }

  getCategories(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '100',
        page: ''+page,  
      }
    };
 
    return this.httpClient.get<any[]>(`${this.endpoint}categories?_embed`, options)
    .pipe(
      map(res => {
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      })
    )
  }
}