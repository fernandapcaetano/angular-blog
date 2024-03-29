import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = 'https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder.png'
  @Input()
  author:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  id:string = '0'

  constructor() { }

  ngOnInit(): void {
  }

}
