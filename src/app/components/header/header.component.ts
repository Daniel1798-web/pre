import { FormGroup,FormControl, NgModel, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { VisitCountService } from 'src/app/service/visit-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor(
    public _MessageService: MessageService,
    private fb:FormBuilder,
    private visitCount: VisitCountService
    ){ 
      /*this.formulario = this.fb.group({
        name :['', [Validators.required, Validators.maxLength(2)]],
        asunto : ['', [Validators.required, Validators.minLength(4)]],
        email : ['', [Validators.required, Validators.minLength(4)]],
        mensaje : ['', [Validators.required, Validators.minLength(4)]]
      })*/
     
    }

    errores(){
      this.formulario = this.fb.group({
         name : new FormControl ('', [Validators.required, Validators.minLength(2)]),
        asunto : ['', Validators.required,],
        email : ['',  Validators.required],
        mensaje : ['', Validators.required]
      })
    }

  texto0 = "";
  texto1 = "";
  texto2 = "";
  texto3 = "";
  enviado = false;
  enviadoErr = false;
  state:boolean = true;
  showVisits:Array<object> = [];


  activeMenu:boolean = false;

  activeTalk:boolean = false;

  nameField = new FormControl('soy un control');
  formulario:any; 
  formu = new FormGroup({
    name : new FormControl ('', [Validators.required, Validators.minLength(2)]),
    asunto : new FormControl ('', [Validators.required, Validators.minLength(2)]),
    email : new FormControl ('', [Validators.required,Validators.email]),
    mensaje : new FormControl ('', [Validators.required,Validators.minLength(2)]),
  });

  get formucontrol():FormControl{
    return this.formu.get('name') as FormControl
  }

  get formucontrol2():FormControl{
    return this.formu.get('asunto') as FormControl
  }

  get formucontrol3():FormControl{
    return this.formu.get('email') as FormControl
  }
  get formucontrol4():FormControl{
    return this.formu.get('mensaje') as FormControl
  }


  updateMa():void{
    const control = this.formu.get('name') as FormControl;
    
  }

  @Output()
  propagar = new EventEmitter<boolean>() 

  ngOnInit(): void {
   this.errores()
   this.mandarVisita()
   this.ContadorVisita()
  }



  menu(){
    this.activeMenu = !this.activeMenu
  }

  talk(){
    this.activeTalk = !this.activeTalk
    this.activeMenu = false
    this.propagar.emit(this.activeTalk)
  }

  backeando(){
    this.activeTalk = false
    this.propagar.emit(this.activeTalk)
    this.formu.reset()

  }

  ContadorVisita() {
    this.visitCount.visitCount().subscribe(
      (data: any) => {
        console.log(data);
        this.showVisits = data
        console.log(this.showVisits.length)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  mandarVisita() { this.visitCount.mandarVisita().subscribe() }
  

  
 verificar(){
  this.texto0 = ""
  this.texto1 = ""
  this.texto2 = ""
  this.texto3 = ""

 }

 verificar2(){
  console.log("eje")
  if(this.formucontrol.valid && this.formucontrol2.valid && this.formucontrol3.valid && this.formucontrol4.valid){

   return this.state = false
  }
  else{
   return this.state = true
  }
 }

 contactForm(form:any) {
  console.log("ss")

  this._MessageService.sendMessage(form).subscribe(()=>{
   
    //const i = document.getElementById('formularioId')
    try{
      console.log("exito")
      this.verificar()
      this.enviado = true
     this.formu.reset()
    }
    catch(error){
      console.log(error + "falló")
      this.enviadoErr = true;

  
    }
  })
  
  }

  co(){
    this._MessageService.rec().subscribe(c => console.log(c))
  }

  /*initFormParent():void{
    this.formParent = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(4)]);
      asunto : new FormControl('', [Validators.required, Validators.minLength(4)]);
      email : new FormControl('', [Validators.required, Validators.minLength(4)]);
      mensaje : new FormControl('', [Validators.required, Validators.minLength(4)]);
    })
  }*/

}
