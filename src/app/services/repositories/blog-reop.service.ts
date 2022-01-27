import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/iblog';
import { IBlogReop } from '../interfaces/iblog-reop';

@Injectable({
  providedIn: 'root'
})
export class BlogReopService implements IBlogReop {

  baseUrl = "https://localhost:44335/api/Blogs/";

  constructor(private http:HttpClient) { }

  getAll(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this.baseUrl+"GetAllBlogsOrderd");
  }
  getById(id: number): Observable<IBlog> {
    return this.http.get<IBlog>(this.baseUrl+"GetBlogById/"+id);
  }
  add(model: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(this.baseUrl+"Create", model );
  }
  edit(model: IBlog): Observable<IBlog> {
    return this.http.put<IBlog>(this.baseUrl+"Update", model );
  }
  delete(id: number): Observable<IBlog> {
    return this.http.delete<IBlog>(this.baseUrl+"Delete/"+id);
  }

}
