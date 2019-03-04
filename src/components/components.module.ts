import { NgModule } from '@angular/core';
import { CallbackComponent } from './callback/callback';
import { TeamLogoComponent } from './team-logo/team-logo';
@NgModule({
	declarations: [CallbackComponent, TeamLogoComponent],
	imports: [],
	exports: [CallbackComponent, TeamLogoComponent]
})
export class ComponentsModule {}
