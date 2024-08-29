import { Pipe, PipeTransform } from '@angular/core';
import { IconModel } from 'ngx-sp-infra';

@Pipe({
  name: 'iconFilter',
  standalone: true,
  pure: false
})
export class IconFilterPipe implements PipeTransform {

  transform(list: IconModel[], search: string, categoria: string | null): IconModel[] {
    return list.filter(e =>
      ( e.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      || e.tags && e.tags.some( tag => tag.includes(search.toLocaleLowerCase()) ) )
      && categoria != null ? e.categoria == categoria : true
    );
  }

}
