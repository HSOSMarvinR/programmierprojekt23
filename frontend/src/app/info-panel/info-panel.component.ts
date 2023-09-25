import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';



interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  providers: [MessageService]
})
export class InfoPanelComponent {
  items: MenuItem[];
  constructor(private messageService: MessageService) {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
  ];
  }
  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
}

update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
}

delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
}
}
