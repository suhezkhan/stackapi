import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Detaildata } from './detaildata';
import { filter , map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class BackendService {

heros= [];

public items: any = {};

constructor( private httpClient: HttpClient ) { } 

public get()
{  
// return this.httpClient.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow");  
return this.httpClient.get("https://api.stackexchange.com/2.3/articles?order=desc&sort=activity&site=stackoverflow");  

}

public questionList()
{  
  return this.httpClient.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow");  

  }

  public commentList()
  {  
    return this.httpClient.get("https://api.stackexchange.com/2.3/comments?order=desc&sort=creation&site=stackoverflow");  

    }
  



//single article detail
public articleDetail(article_id) {
// return this.httpClient.get(`${this.apiURLM}/patients/data?pId=${id}`, httpOption);
return this.httpClient.get(`https://api.stackexchange.com/2.3/articles/{ids}?order=desc&sort=activity&site=stackoverflow=${article_id}`);

}

  //single question id answer detail
  public questionDetail(question_id) {
    return this.httpClient.get("https://api.stackexchange.com/2.3/questions/"+question_id+"/answers?order=desc&sort=activity&site=stackoverflow");

  }


        //single question id detail
        public questionDetailOnly(question_id) {
          return this.httpClient.get("https://api.stackexchange.com/2.3/questions/"+question_id+"?order=desc&sort=activity&site=stackoverflow");
      
        }




}
