import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-top-subjects',
  templateUrl: './top-subjects.component.html',
  styleUrls: ['./top-subjects.component.css'],
  providers: [DataService]
})
export class TopSubjectsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  top_subject_results = [];

  ngOnInit(): void {
    this.dataService.getTopSubjectData().subscribe(data => {
      // console.log('in top subject results', data);
      this.top_subject_results = data;
    });
  }

}
