import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userInfo = this.activatedRoute.snapshot.data.userInfo;
  }

}
