import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIconLinkComponent } from './github-icon-link.component';

describe('GithubIconLinkComponent', () => {
  let component: GithubIconLinkComponent;
  let fixture: ComponentFixture<GithubIconLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubIconLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
