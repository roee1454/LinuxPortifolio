import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, NgIconsModule],
  templateUrl: './skills.html'
})
export class SkillsSectionComponent {
  public isOpen = signal(false);
  protected isTyping = signal(false);
  protected showContent = signal(false);

  protected skillsCategories = [
    {
      name: 'Languages',
      items: 'TypeScript, JavaScript, C/C++, Kotlin, Rust, Bash'
    },
    {
      name: 'Frameworks',
      items: 'Angular, Next.js, NestJS, React, React Native'
    },
    {
      name: 'Databases',
      items: 'PostgreSQL, Redis, Firebase, MongoDB'
    },
    {
      name: 'DevOps & Cloud',
      items: 'GitHub Actions, Docker, Google Cloud, Railway, Cloudflare'
    }
  ];

  protected info = [
    { key: 'OS', value: 'Arch Linux x86_64' },
    { key: 'Shell', value: 'bash 5.2.21' },
  ];

  open() {
    this.isOpen.set(true);
    this.isTyping.set(true);
    this.showContent.set(false);
    
    // Simulate typing neofetch
    setTimeout(() => {
      this.isTyping.set(false);
      this.showContent.set(true);
    }, 3000);
  }

  close() {
    this.isOpen.set(false);
  }
}
