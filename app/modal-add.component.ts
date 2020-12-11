<p>Name :
	<input [(ngModel)]="name" type="text" />
	<small class="error" *ngIf="!isFormValid && name === undefined">The name is required</small>
</p>
<p>Family :
	<input [(ngModel)]="family" type="text" />
	<small class="error" *ngIf="!isFormValid && family === undefined">The family name is required</small>
</p>
<p>Family :
	<input [(ngModel)]="birthday" type="date" />
	<small class="error" *ngIf="!isBirthdayValid && this.birthday === undefined">The birthday is required</small>
</p>
<input (click)="add()" type="button" value="Add"  />
