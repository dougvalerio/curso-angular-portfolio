import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule, DialogProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/focus-timer.png',
      alt: 'Projeto Focus Timer',
      title: 'Focus Timer',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Teste do Focus timer',
          href: 'https://dougvalerio.github.io/focus-timer-2/'
        }
      ]
    },
    {
      src: 'assets/img/projects/focus-timer.png',
      alt: 'Projeto Focus Timer',
      title: 'Focus Timer',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Teste do Focus timer',
          href: 'https://dougvalerio.github.io/focus-timer-2/'
        }
      ]
    },
    {
      src: 'assets/img/projects/focus-timer.png',
      alt: 'Projeto Focus Timer',
      title: 'Focus Timer',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Teste do Focus timer',
          href: 'https://dougvalerio.github.io/focus-timer-2/'
        }
      ]
    },
    {
      src: 'assets/img/projects/focus-timer.png',
      alt: 'Projeto Focus Timer',
      title: 'Focus Timer',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Teste do Focus timer',
          href: 'https://dougvalerio.github.io/focus-timer-2/'
        }
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
