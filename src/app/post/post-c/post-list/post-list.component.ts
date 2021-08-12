import { Component } from '@angular/core';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  })

export class postlistComponent {

    post=[
        {title:"first",content: "this is first"},
        {title:"second",content:"this is second"},
        {title:"third",content:"this is third"}
    
    ]
  

  }