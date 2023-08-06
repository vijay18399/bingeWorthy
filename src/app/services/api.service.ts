import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}/api`; // Replace with your API endpoint
  constructor(private http: HttpClient) {}
  createContent(content:any) {
    return this.http.post<any>(`${this.apiUrl}/contents`, content);
  }
  getContent(params: any) {
    const queryParams = {
      params: {
        perPage: params.perPage,
        page: params.page,
      },
    };
    return this.http.get<any>(`${this.apiUrl}/contents`, queryParams);
  }
  getContentById(id:string){
    return this.http.get<any>(`${this.apiUrl}/contents/${id}`);
  }
  updateContent(id:string,content:any){
    return this.http.put<any>(`${this.apiUrl}/contents/${id}`,content);
  }
  deleteContent(id:string){
    return this.http.delete<any>(`${this.apiUrl}/contents/${id}`);
  }
  createActor(actor: any) {
    return this.http.post<any>(`${this.apiUrl}/actors`, actor);
  }

  getActorById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/actors/${id}`);
  }

  updateActor(id: string, actor: any) {
    return this.http.put<any>(`${this.apiUrl}/actors/${id}`, actor);
  }

  deleteActor(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/actors/${id}`);
  }



}
