import { Component } from "@angular/core";
import { ExperiencePopoverComponent } from "../../../ui/elements/experience-popover/experience-popover";
import { Experience } from "@/app/types";
@Component({
    selector: "app-experience",
    templateUrl: "experience.html",
    imports: [ExperiencePopoverComponent]
})
export class ExperienceComponent {
    protected experiences: Experience[] = [
        {
            src: "/resources/icons/idf.png",
            title: "IDF",
            past: false,
            position: "Software Developer",
            descirption: "Developing cutting-edge software solutions for military applications, focusing on full-stack development and system architecture.",
            from: new Date("2023-08-08"),
            to: new Date("2026-03-23"),
            siteUrl: "https://www.idf.il"
        },
        {
            src: "/resources/icons/julius.jpg",
            title: "Julius Agency",
            past: true,
            position: "Software Developer",
            descirption: "Delivered applications using Next.js and React Native, deploying web and mobile products with Github CI/CD, Firebase and Railway.",
            from: new Date("2024-02-02"),
            to: new Date("2024-12-31"),
            siteUrl: "https://julius-agency.co.il/he"
        }
    ]; 
}