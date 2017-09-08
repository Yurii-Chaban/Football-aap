import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-get-json-content',
    templateUrl: './get-json-content.component.html',
    styleUrls: ['./get-json-content.component.css'],
    providers: [DataService]
})
export class GetJsonContentComponent implements OnInit {

    constructor(private dataService: DataService) {}

    results = [];

    ngOnInit(): void {
        this.dataService.getData().subscribe(data => {
            console.log('in component', data);
            this.results = data;
        });
    }

}
