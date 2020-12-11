import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { LocalDate } from "./app.component";

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html"
})
export class ModalEditComponent implements OnInit {
  @Input() public name: string;
  @Input() public family: string;
  @Input() public birthday: LocalDate;
  @Input() public isFormValid: boolean;
  @Input() public isBirthdayValid: boolean;

  constructor(private modalService: NgbActiveModal) {}

  ngOnInit(): void {}

  edit(): void {
    if (
      this.name !== undefined &&
      this.family !== undefined
    ) {
      console.log("lol");
      this.modalService.close({
        name: this.name,
        family: this.family,
        birthday: this.birthday
      });
    } else {
      this.isFormValid = false;
    }

    if (this.birthday !== undefined) {
      this.isBirthdayValid = true;
    } else {
      this.isBirthdayValid = false;
    }
  }
}
