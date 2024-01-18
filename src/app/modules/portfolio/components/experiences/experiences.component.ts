import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Front-End",
        p: "Velejar Software | Jan 2024 - Atual"
      },
      text: "Atuando no desenvolvimento de toda parte visual para o novo sistema que vai ser lançado pela empresa, utilizando as teconologias HTML5, CSS3, Javascript, Typescript e Angular",
    },
    {
      summary: {
        strong: "Agente Censitário de Administração e Informática",
        p: "IBGE | Out 2022 - Dez 2022 (Temporário)"
      },
      text: "Contratação e desligamentos de recenseadores. Gerenciamento dos custos de locomoção. Organização e administração dos postos de coleta. Instalação e configuração de equipamentos eletrônicos. Suporte às atividades do escritório.",
    },
    {
      summary: {
        strong: "Suporte de Rede (Helpdesk)",
        p: "Vicontec Internet | Ago 2021 - Dez 2021"
      },
      text: "Apoio as atividades de suporte de redes.Atendimento ao cliente. Configuração de roteadores. Monitoramento de redes. Uso de sistema Mikrotik, Winbox, UNM2000, The Dude, Zabbix e Grafana.",
    },
    {
      summary: {
        strong: "Call center",
        p: "He-Net Telecomunicações | Jan 2017 - Fev 2018"
      },
      text: "Atendimento ao cliente. Configuração de roteadores. Monitoramento de redes. Uso de sistema Winbox, ANM2000, The Dude. Analise de viabilidade técnica. Solução de problemas financeiro. Atuação na área comercial.",
    },
  ])
}
