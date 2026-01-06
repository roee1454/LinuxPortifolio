import { Component, input } from "@angular/core";

@Component({
    selector: "popover-text",
    templateUrl: "popover-text.html",
    standalone: true,
    imports: []
})
export class PopoverText {
    trigger = input.required<string>();
}
