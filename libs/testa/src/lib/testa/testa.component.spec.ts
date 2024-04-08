import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { TestAService } from './services/testa.service';
import { TestaComponent } from './testa.component';

describe('TestaComponent', () => {
  let component: TestaComponent;
  let fixture: ComponentFixture<TestaComponent>;
  let testAService: TestAService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestaComponent],
      providers: [TestAService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaComponent);
    component = fixture.componentInstance;

    testAService = fixture.debugElement.injector.get(TestAService);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('#constructor', () => {
    it('should spy the property (getter) test$', () => {
      // 1/ Does not spy anything, the `nextTestVal` still trigger the subscription `VALLLLLLLLLLLLLLLLLLL true`
      vi.spyOn(testAService, 'test$', 'get').mockReturnValue(EMPTY);

      fixture.detectChanges();

      testAService.nextTestVal(true);

      expect(component).toBeTruthy();
    });
  });

  describe('@testTitle', () => {
    it('should display the title', () => {
      // 2/ It is underlined as red but when starting the tests there's no compile error and it works fine
      vi.spyOn(testAService, 'testSignal', 'get').mockReturnValue(signal(true).asReadonly());

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[data-testid="testTitle"]`))).toBeTruthy();
    });

    it('should not display the title', () => {
      // 2/ It is underlined as red but when starting the tests there's no compile error and it works fine
      vi.spyOn(testAService, 'testSignal', 'get').mockReturnValue(signal(false).asReadonly());

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[data-testid="testTitle"]`))).toBeFalsy();
    });
  });

  // Another test that properly spy a getter, no problem here
  describe('@testParagraph', () => {
    it('should display the paragraph', () => {
      // 2/ It is underlined as red but when starting the tests there's no compile error and it works fine
      vi.spyOn(testAService, 'getter1', 'get').mockReturnValue(true);

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[data-testid="testParagraph"]`))).toBeTruthy();
    });

    it('should not display the paragraph', () => {
      // 2/ It is underlined as red but when starting the tests there's no compile error and it works fine
      vi.spyOn(testAService, 'getter1', 'get').mockReturnValue(false);

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[data-testid="testParagraph"]`))).toBeFalsy();
    });
  });
});
