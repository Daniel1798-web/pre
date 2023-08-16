import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { VisitCountService } from 'src/app/service/visit-count.service';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss']
})
export class OpinionsComponent implements OnInit {
  constructor( private visitCount : VisitCountService) { }

  @Output() showOpinionComponent = new EventEmitter<boolean>();
  opinions:Array<any> = []

  @ViewChild('scroleable')scrollTeam: any;
  opinion:boolean = true;
  avatares:Array<any> = ["assets/imagenU.png","assets/imagenU.png","assets/avatar1.png","assets/avatar2.png","assets/avatar3.png","assets/avatar4.png"]

  shareOpinion(click:any){
    if(click === 'opinionClick'){
      this.opinion = true

    }else{
      this.opinion = false

    }
  }

  next(){
    const cosa =   this.scrollTeam.nativeElement
    cosa.scrollLeft += 160
    }
  
    prev(){
      const cosa =   this.scrollTeam.nativeElement
      cosa.scrollLeft -= 160

   
      }
      ngOnInit(): void {
        try {
          this.visitCount.opinionData().subscribe(
            (data: any) => {
              console.log(data);
      
              data.forEach(async (item: any) => {
                const arrayBufferView = new Uint8Array(item.picUser.data);
                const blob = new Blob([arrayBufferView], { type: 'image/png' });
      
                const reader = new FileReader();
                reader.onload = function(event) {
                  item.picUser = event.target?.result;
                  item.picUser = item.picUser.replace(/^data:image\/\w+;base64,/, '')
                };
                reader.readAsDataURL(blob);
              });
      
              console.log(data);
              this.opinions = data;
            },
            (error: any) => {
              console.error('Error fetching or processing data:', error);
            }
          );
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }
  userImg:string = "assets/imagenU.png"
  secondText:boolean = false;
  contador:number = 0;
  openFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userImg = reader.result as string;
        this.secondText = true

      };
      reader.readAsDataURL(file);
    }
  }

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

  refreshOpinions(){
    try {
      this.visitCount.opinionData().subscribe(
        (data: any) => {
          console.log(data);
  
          data.forEach(async (item: any) => {
            const arrayBufferView = new Uint8Array(item.picUser.data);
            const blob = new Blob([arrayBufferView], { type: 'image/png' });
  
            const reader = new FileReader();
            reader.onload = function(event) {
              item.picUser = event.target?.result;
              item.picUser = item.picUser.replace(/^data:image\/\w+;base64,/, '')
            };
            reader.readAsDataURL(blob);
          });
  
          console.log(data);
          this.opinions = data;
        },
        (error: any) => {
          console.error('Error fetching or processing data:', error);
        }
      );
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

}
