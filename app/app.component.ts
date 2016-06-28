import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <article>
        <h2>{{hero.name}} details!</h2>
        <label>id: <input readonly="true" value="{{hero.id}}"></label><br>
        <label>name: <input type="text" [(ngModel)]="hero.name" placeholder="Add name here"></label>
    </article>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}