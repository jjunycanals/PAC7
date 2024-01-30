import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() componentSelected = new EventEmitter<string>();

  showComponent(component: string): void {
    this.componentSelected.emit(component);
  }
  opcioArticleList:boolean =false;
  opcioFormTemplate:boolean=false;
  opcioFormReactive:boolean=false;
  opcioLogin:boolean=true;
  opcioRegister:boolean=false;
  opcioArticleDetail:boolean=false;

  mostraArticleList(){
    this.opcioArticleList=true;
    this.opcioFormReactive=false;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }

  mostraFormReactive(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }
  mostraFormTemplate(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }
  mostraLogin(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }
  mostraRegister(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }
  mostraArticleDetail(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true;
    this.opcioFormTemplate=false;
    this.opcioLogin=false;
    this.opcioRegister=false;
    this.opcioArticleDetail=false;
  }


}
