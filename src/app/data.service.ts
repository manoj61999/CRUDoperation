import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

//user : registration.. (user.component.ts)

export class user {
  UserName: String | undefined;
	UserId: String | undefined;
	email: String | undefined;
	password: String | undefined;
	phone: Number | undefined;
  address: String | undefined;
  gender : string | undefined;
}

//userlogin : login.....(userlogin.component.ts)

export class userlogin {
  email: string | undefined;
  password : string | undefined;
}
export class showuser {
  email: string | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:4000';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }




  
  //dsiplay the records from the database (MongoDb)..........
  //showuser..
  
  getUsers(): Observable<user> {
    return this.httpClient.get<user>(this.endPoint + '/api/readalluser');
  }




















  //getting values from the angular ..........
  //userRegistration (user.component.ts)...........

  addUser(data: FormGroup): Observable<user> {
    
    let senddata={
      "UserName":data.value.username,
      "UserId":data.value.userid,
      "email":data.value.email,
      "password":data.value.password,
      "phone":data.value.phone,
      "address":data.value.address,
      "gender":data.value.gender
    }
    console.log(senddata,"userdetails")
    return this.httpClient.post<user>(this.endPoint + '/api/register', JSON.stringify(senddata), this.httpHeader)
  }

  
  //userlogin (userlogin.component.ts).........

  findUser(data: FormGroup): Observable<userlogin> {

    let finddata ={
      "email":data.value.email,
      "password":data.value.password
    }
    console.log(finddata,"userlogin")
    return this.httpClient.post<userlogin>(this.endPoint +'/api/login', JSON.stringify(finddata), this.httpHeader)
  }

  userdetails(data: FormGroup): Observable<showuser> {

    let showdata = {
      "email":data.value.email
    }
    console.log(showdata,"showuserdetails")
    return this.httpClient.post<showuser>(this.endPoint +'/api/showuser', JSON.stringify(showdata), this.httpHeader)
  }















}
