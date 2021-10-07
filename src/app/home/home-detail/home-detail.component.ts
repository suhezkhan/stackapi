  import { Component, OnInit } from '@angular/core';
  import { BackendService } from '../../backend.service';
  import { Router, ActivatedRoute } from '@angular/router';
  import { Detaildata } from '../../detaildata';

  import {Observable} from 'rxjs';



  @Component({
    selector: 'app-home-detail',
    templateUrl: './home-detail.component.html',
    styleUrls: ['./home-detail.component.css']
  })
  export class HomeDetailComponent implements OnInit {

    // detaildata : Observable<Detaildata>
    detaildata : Detaildata ;
    datas: any; 
    commentDatas: any;


    constructor(
      private backendService: BackendService,
      private router: Router,
      public route: ActivatedRoute
    ) {
      this.heros = this.backendService.heros
    }

    ngOnInit(): void {
      const id= this.route.snapshot.params['id'];
      console.log("questionList id data", id); 

      this.getQuestionDetailOnly(id);
      this.getComment();


    }


    public getQuestionDetailOnly(id) {

      this.backendService.questionDetailOnly(id).subscribe((res: any) => {

        this.datas = res.items
        console.log("question detail only", this.datas); 

      })


    }

    public getComment() {

      this.backendService.commentList().subscribe((res: any) => {

        this.commentDatas = res.items
        console.log("commentList data", this.commentDatas); 

      })


    }

    heros : string[];
    inputComment =null;
    btnDisable = false;
    Adding = false;
    
    AddComment(){


    this.heros.push(this.inputComment);
    console.log("AddMore data", this.heros); 
    
    this.inputComment = null;
    this.Adding = false;
    

    }


  }
