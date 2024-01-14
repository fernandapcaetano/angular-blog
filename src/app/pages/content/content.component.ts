import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsBlog } from "../../../assets/data/postsBlog";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ''
  contentTitle:string = ''
  contentDescription = ''

  private id:string | null = '0'

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => 
      this.id = value.get('id')

      
    )
    this.setValuesToContent(this.id)
  }

  setValuesToContent(id:string | null){
    const result = postsBlog.filter(
      article => article.id.toString() == this.id
    )[0]

    this.contentTitle = result.title
    this.photoCover = result.photo
    this.contentDescription = result.description
  }

}
