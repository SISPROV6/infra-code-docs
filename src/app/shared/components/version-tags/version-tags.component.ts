import { Component } from '@angular/core';
import { NpmService } from '../../services/npm.service';

@Component({
  selector: 'version-tags',
  standalone: true,
  imports: [],
  templateUrl: './version-tags.component.html',
  styleUrl: './version-tags.component.scss'
})
export class VersionTagsComponent {

  // #region ==========> INITIALIZATION <==========
  constructor( public npmService: NpmService ) { }

  ngOnInit(): void {
    this.npmService.getPackageVersion("ngx-sp-infra").subscribe(response => {
      console.log(response);
      
      this.npmService.latest = response["dist-tags"].latest;
      this.npmService.test = response["dist-tags"].test;
    });
  }
  // #endregion ==========> INITIALIZATION <==========

}
