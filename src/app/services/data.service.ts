import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    getData(): Observable<Array<object>> {
        return this.http.get('/assets/JSONData.json')
            .map(res => {
                console.log('data', res);
                return res.json();
            })
            .catch(error => {
                console.log(error);
                return Observable.of<Object>([]);
            });
    }

    getCountryData(): Observable<Array<object>> {
        return this.http.get('/assets/countryJson.json')
            .map(res => {
                console.log('data', res);
                return res.json();
            })
            .catch(error => {
                console.log(error);
                return Observable.of<Object>([]);
            });
    }

    getTopSubjectData(): Observable<Array<object>> {
        return this.http.get('/assets/top-subject.json')
            .map(res => {
                console.log('data', res);
                return res.json();
            })
            .catch(error => {
                console.log(error);
                return Observable.of<Object>([]);
            });
    }

    getTopFootballTeamsData(): Observable<Array<object>> {
        return this.http.get('/assets/top-football-teams.json')
            .map(res => {
                console.log('data', res);
                return res.json();
            })
            .catch(error => {
                console.log(error);
                return Observable.of<Object>([]);
            });
    }



}
