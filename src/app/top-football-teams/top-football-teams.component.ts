import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-top-football-teams',
  templateUrl: './top-football-teams.component.html',
  styleUrls: ['./top-football-teams.component.css'],
  providers: [DataService]
})
export class TopFootballTeamsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  topTeams = [];

  ngOnInit(): void {
    this.dataService.getTopFootballTeamsData().subscribe(data => {
      console.log('in top teams', data);
      this.topTeams = data;
    });
  }

}
