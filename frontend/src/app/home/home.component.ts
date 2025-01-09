import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, MatButtonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button mat-flat-button class="primary" type="button">Search</button>
      </form>
      <section class="results"></section>
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
