import { IMenuItemStructure } from "./imenu-item-structure.model";


/** Classe responsável por configurar as opções do menu. */
export class MenuConfig {
   constructor(isStaticMenu: boolean) { this._isMenuStatic = isStaticMenu; }


   private _menuOptions: IMenuItemStructure[] = [];

   /** Indica se o menu é estático ou dinâmico. */
   private _isMenuStatic: boolean = false;
   
   /** Obtém as opções do menu. */
   public get menuOptions(): IMenuItemStructure[] { return this._menuOptions; }
   public set menuOptions(value: IMenuItemStructure[]) { this._menuOptions = value; }

   /** Inicializa as opções do menu com base na rota atual e em uma lista personalizada (opcional).
    * @param currentRoute A rota atual da aplicação
    * @param customList Uma lista personalizada de opções de menu (opcional).
    * @returns As opções do menu inicializadas.
    */
   public initializeMenu(currentRoute: string, customList?: IMenuItemStructure[]): IMenuItemStructure[] {

      if (this._isMenuStatic) {
         const menuItems = [
            { id: 1, label: "Início", descricao: "Tela inicial", icon: "casa", route: "/inicio", isSelected: currentRoute.includes("inicio"), isExpandable: false },
            { id: 2, label: "Componentes (Angular)", descricao: "Componentes (Angular)", icon: "janelas", route: "/componentes", isSelected: currentRoute.includes("components"), isExpandable: false },
            //{ id: 2, label: "Componentes (C# .NET)", descricao: "Componentes (C# .NET)", icon: "janelas", route: "/componentes-backend", isSelected: currentRoute.includes("components"), isExpandable: false },
            { id: 3, label: "Estrutura", descricao: "Componentes", icon: "fluxo", route: "/estrutura", isSelected: currentRoute.includes("estrutura"), isExpandable: false },
            { id: 4, label: "Models e Records (Classes)", descricao: "Models e Records (Classes)", icon: "cubo", route: "/models", isSelected: currentRoute.includes("models"), isExpandable: false },
            { id: 5, label: "Templates", descricao: "Templates", icon: "tabela-fixa", route: "/templates", isSelected: currentRoute.includes("templates"), isExpandable: false },
            { id: 6, label: "Webservices (APIs)", descricao: "Webservices (APIs)", icon: "cubo", route: "/webservices", isSelected: currentRoute.includes("webservices"), isExpandable: false },
         ];

         this.updateRouteSelection(currentRoute, menuItems);
         return menuItems;
      }

      this.updateRouteSelection(currentRoute, customList ?? []);
      return customList ?? [];
   }

   public updateRouteSelection(currentRoute: string, currentList: IMenuItemStructure[]): IMenuItemStructure[] {
      currentList.forEach((item) => {
         if (item.children) { item.children.forEach((child: IMenuItemStructure) => { child.isSelected = currentRoute.includes(child.route); }) }

         const anyChildSelected = item.children ? item.children.some((child: IMenuItemStructure) => child.isSelected === true ) : false;
         item.isSelected = false;

         if (!item.children && currentRoute.includes(item.route)) { item.isSelected = true; }
         else if (item.children && anyChildSelected) { item.isSelected = true; }
      })

      return currentList;
   }
   
   /** Inicializa as opções do menu dropdown com base em uma lista personalizada (opcional).
     * @param primaryDropdownList Uma lista personalizada de opções do dropdown (opcional).
    * @returns As opções do dropdown inicializadas.
    */
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public initializeMenuDropdown(primaryDropdownList: Array<any>): Array<any>[] {

      primaryDropdownList = [
         /*
         { id: 1, icon: 'assets/icons/sispro/corporativo.svg', label: 'Corporativo', URL: 'Corporativo', secondary_level: null },
         { id: 2, icon: 'assets/icons/sispro/contratos.svg', label: 'Contratos', URL: 'Contratos', secondary_level: null },
         { id: 3, icon: 'assets/icons/sispro/fiscal.svg', label: 'Fiscal', URL: 'Fiscal', secondary_level: null },
         { id: 4, icon: 'assets/icons/sispro/contabilidade.svg', label: 'Contabilidade', URL: 'Contabilidade', secondary_level: null },
         { id: 5, icon: 'assets/icons/sispro/recursos-humanos.svg', label: 'Recursos Humanos', URL: '',
            secondary_level: [
               { id: 201, icon: 'assets/icons/sispro/recursos-humanos.svg', label: 'Folha de Pagamento', URL: 'Folha' },
               { id: 202, icon: 'assets/icons/sispro/recursos-humanos.svg', label: 'eSocial', URL: 'eSocial' },
               { id: 203, icon: 'assets/icons/sispro/recursos-humanos.svg', label: 'Workflow', URL: 'Workflow' },
               { id: 204, icon: 'assets/icons/sispro/recursos-humanos.svg', label: 'PortalRh', URL: 'PortalRh' }
            ]
         },
         { id: 6, icon: 'assets/icons/sispro/financeiro.svg', label: 'Financeiro', URL: 'Financeiro', secondary_level: null },
         { id: 7, icon: 'assets/icons/sispro/suprimentos.svg', label: 'Suprimentos', URL: '',
            secondary_level: [
               { id: 701, icon: 'assets/icons/sispro/suprimentos.svg', label: 'Compras', URL: 'Compras' },
               { id: 702, icon: 'assets/icons/sispro/suprimentos.svg', label: 'Recebimento', URL: 'Recebimento' },
               { id: 703, icon: 'assets/icons/sispro/suprimentos.svg', label: 'Estoque', URL: 'Estoque' }
           ]
         },
         { id: 8, icon: 'assets/icons/sispro/vendas.svg', label: 'Negociação', URL: 'Vendas', secondary_level: null },
         { id: 9, icon: 'assets/icons/sispro/patrimonio.svg', label: 'Patrimônio', URL: 'Patrimonio', secondary_level: null }
         */
      ]

      return primaryDropdownList;
   }

}
