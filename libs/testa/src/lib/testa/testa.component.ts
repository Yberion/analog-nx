import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TestAService } from './services/testa.service';

@Component({
  selector: 'analog-nx-testa',
  standalone: true,
  imports: [],
  templateUrl: './testa.component.html',
  styleUrl: './testa.component.scss',
})
export class TestaComponent {
  public readonly testAService: TestAService = inject(TestAService);

  constructor() {
    this.testAService.test$.pipe(takeUntilDestroyed()).subscribe((val) => console.log('VALLLLLLLLLLLLLLLLLLL', val));
  }
}
