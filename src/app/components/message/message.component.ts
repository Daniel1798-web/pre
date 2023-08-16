import { Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { VisitCountService } from 'src/app/service/visit-count.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor( private visitCount : VisitCountService) { }

  @Output() showOpinionComponent = new EventEmitter<boolean>();
  userImg:string = "assets/imagenU.png"
  secondText:boolean = false;
  contador:number = 0;

  nameUser:string = "";
  opinionUser:string = "";

  imagesUser:Array<any> = ["assets/imagenU.png","assets/avatar1.png","assets/avatar2.png","assets/avatar3.png","assets/avatar4.png"]
  mensajeSucces:boolean = false;
  errorMessage:string = "";
  spinner:boolean = false;
  ngOnInit(): void {
  }
  


  openFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
    const maxSizeMB = 5;
    if (file) {
      const isPng = file.type === 'image/png'; // Verifica si es un archivo PNG
  
      if (isPng && file.size <= maxSizeMB * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          this.userImg = reader.result as string;
          this.secondText = true;
        };
        reader.readAsDataURL(file);
      } else {
        // No es un archivo PNG, puedes mostrar un mensaje de error o tomar alguna otra acción
        console.log('Por favor selecciona un archivo PNG.');
      }
    }
  }




  async sendOpinion() {
    if( this.contador > 0){

      var data:any = {
        nombre : this.nameUser, 
        opinion : this.opinionUser, 
        picUser : this.imagesUser[this.contador],
        contador : this.contador + 1
      }
    }else{

      const imagen = this.userImg.replace(/^data:image\/\w+;base64,/, '')
      var data:any = {
        nombre : this.nameUser, 
        opinion : this.opinionUser, 
        picUser : imagen,
        contador : 0
      }
    }
    this.spinner = true;

    this.visitCount.mandarOpinion(data).subscribe(
      (response: any) => {
        this.spinner = false;

        // Aquí manejas la respuesta exitosa si es necesario
        this.mensajeSucces = true;
        console.log("exito");
        this.userImg = "assets/imagenU.png";
        this.nameUser = "";
        this.opinionUser = "";
    
        setTimeout(() => {
          this.mensajeSucces = false;
        }, 3000);
      },
      (error: any) => {
        this.spinner = false;

        // Aquí manejas el error de la petición
        console.log(error + "falló");
        this.errorMessage = "The image is too heavy";
    
        setTimeout(() => {
          this.mensajeSucces = false;
        }, 15000);
      }
    );
  
  console.log(data)}

  changeImgRigth(){
    if(this.contador === 4 ){
      this.contador = this.contador;
    }else{
      this.userImg = "assets/imagenU.png";
      this.secondText = false;
      this.contador = this.contador + 1;
    }
  
  }

  changeImgLeft(){
    if(this.contador === 0 ){
      this.contador = this.contador;
    }else{
      this.userImg = "assets/imagenU.png";
      this.secondText = false;
      this.contador = this.contador - 1;
    }
  
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnScroll($event:Event){
    let scrollOffset = $event;
    console.log("scroll: ", scrollOffset);
  }


  convertBlobToBase64(blob: any ): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }

}
