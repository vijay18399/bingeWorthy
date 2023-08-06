import { Component } from '@angular/core';
@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="breadcrumb">
      <ul>
        <li routerLink="">Home</li>
        <li><i class="fa-solid fa-angle-right"></i></li>
        <li routerLink="movies">Movies</li>
      </ul>
    </div>
  `,
  styles: [
    `
      @import 'mixins';
      .breadcrumb {
        width: 100%;
        height: 49px;
        ul {
          width: 90vw;
          margin: 5px 12px;
          background-color: #f8f8f8;
          border-radius: 10px;
          padding: 12px;
          display: flex;
          li {
            margin: 0px 5px;
            color: $color_2;
            cursor: pointer;
            i {
              color: #3a3a3a;
            }
          }
        }
      }
    `,
  ],
})
export class BreadcrumbComponent {}
