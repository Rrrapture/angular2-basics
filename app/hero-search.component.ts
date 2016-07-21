import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero>;
    searchSubject = new Subject<string>();
    //a Subject is both an Observable and a producer of 
    // an observable event stream
    //this searchSubject produces an Observable of strings

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}

    // Push a search term into the observable stream
    search(term: string) { this.searchSubject.next(term); }

    ngOnInit() {
        this.heroes = this.searchSubject
            .asObservable()// cast as Observable
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term// switch to new observable each time
                //return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([])
                )
            .catch(error => {
                //todo: real error handling
                console.log(error);
                return Observable.throw(error);
            });
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}