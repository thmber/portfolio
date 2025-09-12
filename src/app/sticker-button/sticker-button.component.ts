import { CommonModule } from '@angular/common';
import { Component, Input, inject} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sticker-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticker-button.component.html',
  styleUrl: './sticker-button.component.scss'
})
export class StickerButtonComponent {     
  
  @Input({}) stickerColor:number = 1;
  @Input({}) stickerKind:number = 1;

    Data = inject(AppService);

featuredButtonLetters = [['F','e','a','t','u','r','e','d'],
  ['P','r','o','j','e','c','t'],
['C','h','e','c','k'],
['a','l','l'],
['d','e','t','a','i','l','s']];
featuredButtonDegrees = [[-73, -64, -54, -45, -36, -27, -19, -9],
  [9, 18, 27, 36, 45, 54, 63],
  [63,53,44,35,27],
  [9, 3, -1],
  [-15, -24, -32, -39, -46, -51, -58]]  

logoButtonLetters = [['-'],
    ['T','h','o','m','a','s'],
    ['M','a','h','l','e','r'],
    ['F','u','l','l'],
    ['S','t','a','c','k'],
    ['D','e','v','e','l','o','p','e','r']]
logoButtonDegreesTop = [ [-70],
      [-64,-58,-52,-45,-38,-33],
      [-23,-16,-10,-5,-1,4],
      [13,19,23,26],
      [33,38,43,49,55],
      [64,70, 75, 80, 84, 88, 94, 100, 105]]
logoButtonDegreesBottom = [ [110],
          [115, 121, 127, 134, 141, 146],
          [158,165,171,176,180,185],
          [193,199,203,206],
          [213,218,223,229,235],
          [244,250, 255, 260, 264, 268, 274, 280, 285]]
}

