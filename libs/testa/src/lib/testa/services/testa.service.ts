import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import {
  Observable,
  Subject,
  shareReplay
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestAService {
  private readonly _testSignal: WritableSignal<boolean>;
  private readonly _testX: Subject<boolean>;
  private readonly _testX$: Observable<boolean>;

  constructor() {
    this._testSignal = signal(false);
    this._testX = new Subject<boolean>();
    this._testX$ = this._testX.pipe(shareReplay({ refCount: false, bufferSize: 1 }));
  }

  nextTestVal(val: boolean): void {
    this._testX.next(val);
  }

  get testSignal(): Signal<boolean> {
    return this._testSignal.asReadonly();
  }

  get test$(): Observable<boolean> {
    return this._testX$;
  }

  get getter1(): boolean {
    return false;
  }
}
