import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>{{title}}</h1><article>{{hero}} details!</article>'
})

export class AppComponent {
	title = 'Tour of Heroes';
	hero = 'Windstorm';
}