import { Component } from '@angular/core';
@Component({
  selector: 'input-upload',
  template: `
    <div class="input-upload-container">
      <div class="dragdrop">
        <i class="fa-solid fa-file-circle-plus"></i>
        <h2>Select Poster File to Upload</h2>
        <span>or drag and drop it here</span>
      </div>
      <div class="input-container">
        <label>Poster URL </label>
        <input type="url" value="" />
      </div>
    </div>
  `,
  styles: [
    `
      @import 'mixins';

      .input-upload-container {
        .dragdrop {
          position: relative;
          width: 300px;
          margin: 5px;
          border: 2px dashed gainsboro;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 18px;
            font-weight: 900;
          }
          i {
            color: gainsboro;
          }
          span {
            color: rgb(176, 172, 172);
          }
        }

        .input-container {
          @include inputContainer(true);
          width: 250px;
          margin: 10px;
        }
      }
    `,
  ],
})
export class InputUploadComponent {}
