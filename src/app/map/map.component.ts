import { Component, OnInit } from '@angular/core';
import * as Cartographer from '../../assets/Cartographer/dist/cartographer.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})

export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map = Cartographer.map('map', {
      zoomControl: false,
      preferCanvas: true
    }).setView([53.902262, 27.561840], 7);

    Cartographer.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}