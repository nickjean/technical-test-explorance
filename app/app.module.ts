import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalEditComponent } from "./modal-edit.component";
import { ModalAddComponent } from "./modal-add.component";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ModalEditComponent,
    ModalAddComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalEditComponent, ModalAddComponent]
})
export class AppModule {}
