import { NgModule } from '@angular/core';

import { TeamLogoComponent } from './team-logo/team-logo';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [TeamLogoComponent],
	imports: [CommonModule],
	exports: [TeamLogoComponent]
})
export class ComponentsModule {}
