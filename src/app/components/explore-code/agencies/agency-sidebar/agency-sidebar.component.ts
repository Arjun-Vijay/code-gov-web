import { Component } from '@angular/core';
import { AgencyService } from '../../../../services/agency';
import { MobileService } from '../../../../services/mobile';

@Component({
  selector: 'agency-sidebar',
  styles: [require('./agency-sidebar.style.scss')],
  template: require('./agency-sidebar.template.html')
})

export class AgencySidebarComponent {
  menuActive: boolean;
  agencies;

  constructor(
    private agencyService: AgencyService,
    private mobileService: MobileService) {

    this.menuActive = false;

    mobileService.activeMobileMenu$.subscribe(
      menuStatus => {
        this.menuActive = menuStatus;
      }
    );
  }

  ngOnInit() {
    this.agencies = this.agencyService.getAgencies();
  }
}
