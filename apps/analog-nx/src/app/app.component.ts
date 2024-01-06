import { TestaComponent } from '@analog-nx/testa';
import { TestbComponent } from '@analog-nx/testb';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, TestaComponent, TestbComponent],
  selector: 'analog-nx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'analog-nx';
}
