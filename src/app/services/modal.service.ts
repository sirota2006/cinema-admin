import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import IMovie from '../interfaces/IMovie';

export declare type ModalMode = 'delete' | 'form';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalState: boolean = false;
  deleteMode: boolean = false;
  formMode: boolean = false;
  editMovie$: Subject<IMovie> = new Subject()

  constructor() { }

  setModalState(modalState: ModalMode) {
    this.modalState = true;
    this.toggleModalMode(modalState);
  }

  private toggleModalMode(modalMode: ModalMode) {
    this.deleteMode = false;
    this.formMode = false;

    switch (modalMode) {
      case "delete":
        this.deleteMode = true;
        break;
      case "form":
        this.formMode = true;
        break;
      default:
        this.deleteMode = false;
        this.formMode = false;
    }
  }

  editMovie(movie: IMovie) {
    this.setModalState("form");
    this.editMovie$.next(movie);
  }

}
