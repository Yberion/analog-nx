import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Event, NavigationEnd, NavigationSkipped, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'analog-nx-testa',
  standalone: true,
  imports: [RouterModule, MatSidenavModule],
  templateUrl: './testa.component.html',
  styleUrl: './testa.component.scss',
})
export class TestaComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(
    private readonly router: Router,
  ) {
    this.router.events
      .pipe(
        filter((event: Event) => (event instanceof NavigationEnd || event instanceof NavigationSkipped) && this.sidenav.opened),
      )
      .subscribe(() => {
        this.sidenav.close();
      });
  }
}
