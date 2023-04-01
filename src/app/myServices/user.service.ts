import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../myinterface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //create
  register(e:User)
  {
    return this.http.post<User>('http://localhost:3000/user',e);
  }
  //get / fatch
  get(){
    return this.http.get<User[]>('http://localhost:3000/user');
  }

}
