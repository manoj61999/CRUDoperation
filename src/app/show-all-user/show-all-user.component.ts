import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  Users: any;
  finduser: any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.fetchuser()
  }

  //show all the record from Mongodb .........

  fetchuser(){
    return this.data.getUsers().subscribe((items:any)=> {
      console.log(items)
      this.Users = items;
      this.finduser =this.Users.Result;
  })
  }
}
