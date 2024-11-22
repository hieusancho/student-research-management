import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/dist/types/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/api';  // Địa chỉ API

  constructor(private http: HttpClient) { }

  // Lấy danh sách từ API
  getList(entity: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${entity}`);
  }

  // Lấy dữ liệu theo ID
  getById(entity: string, id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${entity}/${id}`);
  }

  // Thêm mới một bản ghi
  add(entity: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${entity}`, data);
  }

  // Cập nhật bản ghi theo ID
  update(entity: string, id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${entity}/${id}`, data);
  }

  // Xóa một bản ghi theo ID
  delete(entity: string, id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${entity}/${id}`);
  } 



  // register(data: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, data);
  // }

  // login(data: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, data);
  // }
}
