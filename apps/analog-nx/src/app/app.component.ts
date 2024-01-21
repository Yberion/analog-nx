import { TestaComponent } from '@analog-nx/testa';
import { TestbComponent } from '@analog-nx/testb';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, TestaComponent, TestbComponent],
  selector: 'analog-nx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'analog-nx';

  public testBS = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.testBS.next(true);
  }
}
