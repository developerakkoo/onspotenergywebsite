import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myDesign';
  detail= {
    name: '',
    number: ''
  }
  fillalldetail = false
  // name = "";
  // number: number | undefined;

  constructor( private rout: Router, private http : HttpClient ){}

  navigateto(val:any){
    this.rout.navigate([val]);
  }

  whatsappMe(){    
    if(!this.detail.name || !this.detail.number ){
        console.log("fill all details");
        
    }else {
      let {name, number} = this.detail

      //  this.http.post(`http://api.whatsapp.com/send?phone=${8999150141}&name=${name}&number=${number}`, {}).subscribe(res => {
      //   console.log(res);
        
      //  })

      console.log("data saved successfully!"+ name, number);
      
    }
  }
}
