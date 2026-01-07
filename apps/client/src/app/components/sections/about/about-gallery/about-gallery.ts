import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-about-gallery',
    standalone: true,
    imports: [NgIconsModule, NgOptimizedImage],
    templateUrl: `about-gallery.html`
})
export class AboutGallerySection {
    protected images = [
        {
            src: '/resources/images/bottom1.jpg',
            alt: 'Gallery photo 1'
        },
        {
            src: '/resources/images/bottom2.jpg',
            alt: 'Gallery photo 2'
        },
        {
            src: '/resources/images/bottom2.jpg',
            alt: 'Gallery photo 2'
        },
        {
            src: '/resources/images/bottom2.jpg',
            alt: 'Gallery photo 2'
        },
    ];
}
