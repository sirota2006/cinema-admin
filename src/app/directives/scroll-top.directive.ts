import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { Observable } from 'rxjs';
import IMovie from '../interfaces/IMovie';

@Directive({
  selector: '[scrollTop]'
})
export class ScrollTopDirective {
  @select('selectedMovie') selectedMovie$: Observable<IMovie>;

  constructor(private el: ElementRef, private ngRedux: NgRedux<IAppState>) {
    this.selectedMovie$.subscribe(() => this.el.nativeElement.scrollIntoView());
  }




}
