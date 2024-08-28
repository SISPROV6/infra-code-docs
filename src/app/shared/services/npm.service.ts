import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpmService {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private apiUrl = 'https://registry.npmjs.org/';
  // #endregion PRIVATE

  // #region PUBLIC
  public latest: string = "";
  public test: string = "";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor( private _httpClient: HttpClient ) { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region GET
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getPackageVersion(packageName: string): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}${packageName}`);
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
