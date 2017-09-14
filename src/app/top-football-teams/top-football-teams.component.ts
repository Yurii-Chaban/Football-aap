import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

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
    teamsDossier = [];

    ngOnInit(): void {
        this.getAllTeamsDossier();
        this.dataService.getTopFootballTeamsData().subscribe(data => {
            this.top_teams = data;
        });
    }

    private getAllTeamsDossier() {
        // this.dataService.getTopFootballTeamsData(this.teamId);
        this.dataService.getTopFootballTeamsData().subscribe(
            dossier => {
                this.teamsDossier.push(Object.assign({}, (dossier as any).total, {
                    rout_link: (dossier as any).rout_link,
                    id: (dossier as any).id
                }));
            }
        );
    }


    goToTeamDossier(teamId) {
        // this.teamId = data.id
        this.router.navigate(['/team', teamId]);
    }

}
