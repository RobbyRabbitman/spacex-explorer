import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@spacex/shared/features/theme';

@Component({
  selector: 'spacex-rockets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly theme: ThemeService) {}
  ngOnInit(): void {
    this.theme.toggleTheme().subscribe();
  }
}
