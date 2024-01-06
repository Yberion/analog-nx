import { TestcComponent } from '@analog-nx/testc';
import { Component } from '@angular/core';

@Component({
  selector: 'analog-nx-testb',
  standalone: true,
  imports: [TestcComponent],
  templateUrl: './testb.component.html',
  styleUrl: './testb.component.scss',
})
export class TestbComponent {}
