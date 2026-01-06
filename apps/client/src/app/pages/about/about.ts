import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { SocialLinkComponent } from '../../components/ui/typography/social-link/social-link';
import { TextLink } from '../../components/ui/typography/text-link/text-link';
import { PopoverText } from '../../components/ui/typography/popover-text/popover-text';
import { Social } from '@/app/types';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-about',
    templateUrl: './about.html',
    standalone: true,
    imports: [NgIconsModule, SocialLinkComponent, TextLink, PopoverText, NgOptimizedImage]
})
export class AboutComponent {
    protected socials = [
        {
            icon: "lucideGithub",
            text: "Github",
            url: "https://github.com/roee1454"
        },
        {
            icon: "lucideLinkedin",
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/roee-heily-5176872a6/"
        },
        {
            icon: "lucideMail",
            text: "Email",
            url: "mailto:roee1454@gmail.com"
        }
    ] satisfies Social[]
}