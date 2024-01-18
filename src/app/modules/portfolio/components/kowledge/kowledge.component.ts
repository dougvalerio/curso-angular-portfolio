import { Component, signal } from '@angular/core';
// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-kowledge',
  standalone: true,
  imports: [],
  templateUrl: './kowledge.component.html',
  styleUrl: './kowledge.component.scss'
})
export class KowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de typescript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
  ])
}
