import { Component, OnInit } from '@angular/core';
import { Books } from '../../books';
import { BookService } from '../../services/book.service';



@Component({
  selector: 'app-product-list-skoob',
  templateUrl: './product-list-skoob.component.html',
  styleUrls: ['./product-list-skoob.component.css']
})
export class ProductListSkoobComponent implements OnInit {

  filtroDeLivro: Books[] = [] ;
  
  _livros: Books[] = [];
  
  _filtrarPor!: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this._livros = this.bookService.retieveAll()
    this.filtroDeLivro = this._livros
    
  }

  set filtro(value: string) {
    this._filtrarPor = value;

    this.filtroDeLivro = this._livros.filter((livro: Books) => livro.bookName.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1)
  }

  get filtro() {
    return this._filtrarPor;
  }




}
