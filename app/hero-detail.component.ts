import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-hero-detail',
    template: `
        <article *ngIf="hero">
            <h3>{{hero.name}} details!</h3>
            <label>id: 
                <input readonly="true" value="{{hero.id}}">
            </label>
            <br>
            <label>name: 
                <input type="text" [(ngModel)]="hero.name" placeholder="Add name here">
            </label>
        </article>
    `
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];//+ converts to a number
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    @Input()
    hero: Hero;
}