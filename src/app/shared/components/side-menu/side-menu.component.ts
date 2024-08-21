import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { InfraModule } from "ngx-sp-infra";
import { IMenuItemStructure } from "../../utils/imenu-item-structure.model";
import { MenuConfig } from "../../utils/menu-config";
import { filter } from "rxjs";

@Component({
  selector: "side-menu",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InfraModule
  ],
  templateUrl: "./side-menu.component.html",
  styleUrl: "./side-menu.component.scss"
})
export class SideMenuComponent implements OnInit {
  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public menuItems: IMenuItemStructure[] = [];
  public menuConfig: MenuConfig = new MenuConfig(true);
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM BUILDER
  // [...]
  // #endregion FORM BUILDER

  // #region FORM FIELDS
  // [...]
  // #endregion FORM FIELDS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.menuItems = this.menuConfig.initializeMenu(this._router.url);
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => { this.menuConfig!.updateRouteSelection(this._router.url, this.menuItems!) });
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICES <==========

  // #region PREPARATION
  // [...]
  // #endregion PREPARATION

  // #region GET
  // [...]
  // #endregion GET

  // #region POST
  // [...]
  // #endregion POST

  // #region DELETE
  // [...]
  // #endregion DELETE

  // #endregion ==========> SERVICES <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
