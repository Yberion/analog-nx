import { TestcComponent } from '@analog-nx/testc';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'analog-nx-testf',
  standalone: true,
  imports: [TestcComponent],
  templateUrl: './testf.component.html',
  styleUrl: './testf.component.scss',
})
export class TestfComponent implements OnInit {
  public testBS = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.testBS.next(true);
  }
}
