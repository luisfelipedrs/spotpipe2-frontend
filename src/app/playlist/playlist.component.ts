import { Component } from '@angular/core';
import { Music } from 'src/music';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  
  musicList: Music[] = [
    {
      title: 'Love Me Like This',
      artist: 'NMIXX',
      duration: '3:08'
    },
    {
      title: 'Poppy (Korean Ver.)',
      artist: 'Stayc',
      duration: '2:58'
    },
    {
      title: 'Spicy',
      artist: 'Aespa',
      duration: '3:17'
    },
    {
      title: 'Super Shy',
      artist: 'New Jeans',
      duration: '3:08'
    },
    {
      title: 'Cupid',
      artist: 'Fifty Fifty',
      duration: '2:54'
    },
    {
      title: 'Sugar Rush Rise',
      artist: 'TxT',
      duration: '3:06'
    },
    {
      title: 'Knock',
      artist: 'Lee Chaeyeon',
      duration: '2:53'
    }
  ]
}
