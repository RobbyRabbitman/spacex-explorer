import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { ForceComponent } from './force/force.component';
import { LengthComponent } from './length/length.component';
import { MassComponent } from './mass/mass.component';
import { UtilUnitModule } from '@spacex/shared/util/util-unit';
import { SelectUnitComponent } from './select-unit/select-unit.component';
import { ToggleUnitComponent } from './toggle-unit/toggle-unit.component';

@NgModule({
  imports: [
    CommonModule,
    UtilUnitModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  declarations: [
    MassComponent,
    LengthComponent,
    ForceComponent,
    SelectUnitComponent,
    ToggleUnitComponent,
  ],
  exports: [
    MassComponent,
    LengthComponent,
    ForceComponent,
    SelectUnitComponent,
    ToggleUnitComponent,
  ],
})
export class UiUnitModule {
  public static readonly ICONS = ['weight_lb', 'weight_kg'];
  private static INITIALIZE = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    if (UiUnitModule.INITIALIZE) {
      this.init();
      UiUnitModule.INITIALIZE = false;
    }
  }

  private init(): void {
    UiUnitModule.ICONS.forEach((icon) =>
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${icon}.svg`
        )
      )
    );
  }
}
