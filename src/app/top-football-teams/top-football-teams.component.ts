import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-top-football-teams',
    templateUrl: './top-football-teams.component.html',
    styleUrls: ['./top-football-teams.component.css'],
    providers: [DataService]
})
export class TopFootballTeamsComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) {
    }

    top_teams = [];

    ngOnInit(): void {
        this.dataService.getTopFootballTeamsData().subscribe(data => {
            this.top_teams = data;
        });
    }

    goToTeamDossier(teamId) {
        // this.teamId = data.id
        this.router.navigate(['/team', teamId]);
    }

}
