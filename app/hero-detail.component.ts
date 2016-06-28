import { Component, Input } from '@angular/core';
import { Hero } from './hero';

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

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}