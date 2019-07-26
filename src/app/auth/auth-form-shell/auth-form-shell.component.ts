import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-form-shell',
  templateUrl: './auth-form-shell.component.html',
  styleUrls: ['./auth-form-shell.component.scss']
})
export class AuthFormShellComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }
    case: string;
    $locationSub: Subscription;
    @Input() footer = true;
    @Input() header = true;

  ngOnInit() {
    this.$locationSub = this.route.url.subscribe(url => this.case = url[url.length -1].path);
  }

  ngOnDestroy() {
    this.$locationSub.unsubscribe();
  }

}
