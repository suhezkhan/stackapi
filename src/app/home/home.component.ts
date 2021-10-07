import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data= []; 
  name = 'Angular'; 
  // res = [];
  // public articleDetail: any = {};

  public details: any = [];
  public detail: any = {};

  

  constructor(
    private backendService: BackendService,
    private router: Router,
    public activeRoute: ActivatedRoute
     ) { }

  ngOnInit() {

    // this.getQuestionsList();
    this.getAllQuestionsList()

  }

  // getQuestionsList () {
  //   this.backendService.get().subscribe((res : any)  =>{
  //     console.log("res....API", JSON.stringify(res));
  //     this.data = res.items;
  //   }
  //    ,
  //   (err) => {
  //     console.log("err....API", err);
  //   }) 
      
  // }

  getAllQuestionsList () {
    this.backendService.questionList().subscribe((res : any)  =>{
      console.log("res....API", JSON.stringify(res));
      this.data = res.items;
    }
     ,
    (err) => {
      console.log("err....API", err);
    }) 
      
  }

      //single article detail
      public getQuestionDetail(question_id) {

      // this.backendService.articleDetail = this.details.filter((res) => res.id === article_id)[0];
    console.log("question_id ....API", question_id);

      this.router.navigate(['/detail', question_id]);
    }



}
