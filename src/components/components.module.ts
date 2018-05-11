import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TeamLogoComponent } from './team-logo/team-logo';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [TeamLogoComponent],
	imports: [CommonModule, IonicModule],
	exports: [TeamLogoComponent]
})
export class ComponentsModule {}
