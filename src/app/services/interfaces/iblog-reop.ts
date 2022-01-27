import { Observable } from "rxjs";
import { IBlog } from "src/app/models/iblog";

export interface IBlogReop {
    getAll():Observable<IBlog[]>,
    getById(id: number):Observable<IBlog>,
    add(model:IBlog):Observable<IBlog>,   
    edit(model:IBlog):Observable<IBlog>, 
    delete(id:number):Observable<IBlog>     
}
