//our root app component
import { Component, NgModule, VERSION, AfterViewInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import stylesCss from "../styles.css";
import { ModalEditComponent } from "./modal-edit.component";
import { ModalAddComponent } from "./modal-add.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private _users: User[];

  name: string;
  family: string;
  birthday: LocalDate = null;
  editingIndex: number;
  isFormValid = true;
  isBirthdayValid = true;

  constructor(private modalService: NgbModal) {
    this._users = [
      new User("Ali", "Delshad", null),
      new User("Hamid", "Sadeghi", null),
      new User("Amir", "Olfat", null),
      new User("Keyvan", "Nasr", null)
    ];
  }

  get users(): User[] {
    return this._users;
  }

  delete(index: number) {
    this._users.splice(index, 1);
  }

  setEditUser(index: number): void {
    const modal = this.modalService.open(ModalEditComponent);
    modal.componentInstance.name = this._users[index].name;
    modal.componentInstance.family = this._users[index].family;
    modal.componentInstance.birthday = this._users[index].birthday;
    modal.componentInstance.isFormValid = this.isFormValid;
    modal.componentInstance.isBirthdayValid = this.isBirthdayValid;

    modal.result.then(result => {
      this._users[index] = result;
    });

    this.editingIndex = index;
  }

  edit(): void {
    this._users[this.editingIndex] = new User(this.name, this.family);
    this.editingIndex = undefined;
    this.name = "";
    this.family = "";
  }

  add(): void {
    const modal = this.modalService.open(ModalAddComponent);
    modal.componentInstance.isFormValid = this.isFormValid;
    modal.componentInstance.isBirthdayValid = this.isBirthdayValid;

    modal.result.then(result => {
      this.users.push(result);
    });

    if (
      this.name !== undefined &&
      this.family !== undefined &&
      this.birthday !== null
    ) {
      this._users.push(new User(this.name, this.family));
      this.name = "";
      this.family = "";
      this.isFormValid = true;
      this.birthday = {} as LocalDate;
    } else {
      this.isFormValid = false;
    }

    if (this.birthday !== null) {
      this.isBirthdayValid = true;
    } else {
      this.isBirthdayValid = false;
    }
  }
}

export class AppModule {}

export class User {
  private _name: string;
  private _family: string;
  private _itemNum: number;
  private _birthday: LocalDate;

  constructor(
    name: string,
    family: string,
    itemNum?: number,
    birthday?: LocalDate
  ) {
    this._name = name;
    this._family = family;
    this._birthday = birthday;
    this._itemNum = itemNum;
  }

  get name(): string {
    return this._name;
  }

  get family(): string {
    return this._family;
  }

  get itemNum(): number {
    return this._itemNum;
  }

  get birthday(): LocalDate {
    return this._birthday;
  }
}

export interface LocalDate {
  day: number;
  month: number;
  year: number;
}
