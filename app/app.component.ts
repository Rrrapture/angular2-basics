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

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    public heroes = HEROES;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
