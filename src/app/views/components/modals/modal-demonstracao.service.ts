import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDemonstracaoService {

  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region GET
  public getConfig(): Observable<{ ID: number, NAME: string, PASSWORD: string, DOMAIN: string }> {
    const retorno: { ID: number, NAME: string, PASSWORD: string, DOMAIN: string } = {
      ID: 1579,
      DOMAIN: "SISPROV6",
      NAME: "Desenvolvedor",
      PASSWORD: "__dev_sispro"
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========

}
