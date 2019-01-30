import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchMode: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onOpenModal() {
    this.modalService.setModalState("form");
  }

}
