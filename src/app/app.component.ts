import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Papa } from 'ngx-papaparse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectPB';
  data = '';
  image = '';
  datalist;
  heading='';
  QUERY= [ '1. Number of Corona related tweets count country-wise [Source: Twitter API]',
   '2. Number of Corona tweets received in a day on hourly basis [Source: Twitter API]',
    '3. Date-wise death trend over months of feb and march from all the states in USA [Source: COVID Tracking Project API]',
    '4. Percentage of corona cases of maximum effected countries and continents [Source: COVID Tracking Project API]',
   '5. Top 5 hashtags related to corona [Source: Twitter API]',
  '6. Age wise death trend [Source: CDC]',
  '7. Patients hospitalized trend over months of feb and march from all states in USA [Source: COVID Tracking Project API]',
    '8. Number of Corona related tweets count location-wise [Source: Twitter API]',
    '9. State-wise death trend over months of feb and march from all the states in USA [Source: COVID Tracking Project API]',
  '10. Press news publications vs their frequency of publishing [Source: COVID Tracking Project API]',
  '11.Continent-wise corona cases as of 2020-24-4 [Source: COVID Tracking Project API]', '12. Recovery rate of corona victims country-wise [Source: COVID Tracking Project API'];

  constructor(private http: HttpClient, private papa: Papa) {
  }

  loadQuery(val) {
    this.papa.parse('assets/query' + val +  '.csv', {
      download: true,
      skipEmptyLines: true,
      complete: (result) => {
        this.datalist = result.data;
        console.log(this.datalist);
      }
    });
    this.image = 'assets/Query' + val + '.png';
    this.heading = this.QUERY[val-1];
  }
}


