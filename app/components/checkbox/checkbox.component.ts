import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "Checkbox",
    template: `
    <Image
        [src]="checked ? 'res://checkbox_checked' : 'res://checkbox_unchecked'"
        class="checkbox"
        (tap)="onTap()">
    </Image>
    `
})
export class CheckboxComponent {
    @Output() public tap: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public checked: boolean = false;

    constructor() {
    }

    public onTap(): void {
        this.tap.emit(this.checked);
    }
}