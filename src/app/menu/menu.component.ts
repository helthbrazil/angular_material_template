import { TranslateService } from 'ng2-translate';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import { fadeAnimation } from '../animations/fadeAnimation';
throwError('hello');

export interface ItemMenu {
  label: string;
  componente: string;
  icon: string;
}

/** @title Responsive sidenav */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [fadeAnimation]
})
export class MenuComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  opened: boolean;
  fillerNav: Array<ItemMenu>;
  itemSelecionado: ItemMenu;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router, private bottomSheet: MatBottomSheet,
    private translateService: TranslateService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.opened = true;
    this.itensMenu();
    this.atualizarSelecionado();
  }

  atualizarSelecionado() {
    setTimeout(() => {
      const url = this.router.url;
      const item = this.fillerNav.find(items => items.componente === url);
      if (item) {
        this.itemSelecionado = item;
      }
    }, 100);
  }

  atualizarIdioma(cod: number) {
    switch (cod) {
      case 1:
        this.translateService.use('pt');
        break;

      case 2:
        this.translateService.use('en');
        break;
    }
  }

  itensMenu() {
    this.fillerNav = new Array<ItemMenu>();
    this.fillerNav.push({ label: 'componentes', componente: '/demo', icon: 'assets/images/svg/demo.svg' });
    this.fillerNav.push({ label: 'cep', componente: '/busca_cep', icon: 'assets/images/svg/location.svg' });
    this.fillerNav.push({ label: 'angular', componente: '/angular_docs', icon: 'assets/images/svg/angular.svg' });
    this.fillerNav.push({ label: 'anotacoes', componente: '/anotacoes', icon: 'assets/images/svg/notes.svg' });
    this.fillerNav.push({ label: 'dragDrop', componente: '/drag_drop', icon: 'assets/images/svg/move.svg' });
    this.fillerNav.push({ label: 'diretivas', componente: '/diretivas', icon: 'assets/images/svg/move.svg' });
    this.fillerNav.push({ label: 'tabelas', componente: '/tabelas', icon: 'assets/images/svg/table.svg' });
    this.fillerNav.push({ label: 'gráficos', componente: '/graficos', icon: 'assets/images/svg/charts.svg' });
    this.fillerNav.push({ label: 'sobre', componente: '/sobre', icon: 'assets/images/svg/information.svg' });
    /* this.fillerNav.push({ label: 'Teste', componente: '/teste', icon: 'assets/images/svg/e.svg' }); */
  }

  /*  sobre() {
     this.itemSelecionado = this.fillerNav.find(items => items.componente === '/sobre');
   } */

  deslogar() {

  }

  selecionarItem(item: ItemMenu) {
    this.itemSelecionado = item;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
// tslint:disable-next-line:component-class-suffix
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
