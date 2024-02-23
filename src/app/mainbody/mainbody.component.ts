import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import  { Swiper } from 'swiper'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})



export class MainbodyComponent implements OnInit {


  breakpoints = {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
  };

  breakpointsForOurClients = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  ngOnInit(): void {

  }
  



  data = [
    {
      data:1,
      imgurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/BSNL_logo_with_slogan.svg/1200px-BSNL_logo_with_slogan.svg.png'
    },
    {
      data:2,
      imgurl:'https://www.wildlifeindia.co.uk/wp-content/uploads/2023/01/logo-wilfelife.png'
    },
    {
      data:3,
      imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOOLv6hlU3Uml57PqwkeKcycbcpXOI9tttMBXBjNl8Q&s'
    },
    {
      data:4,
      imgurl:'https://portal.tradebrains.in/_next/image?url=https%3A%2F%2Ftradebrains-portal.s3.ap-south-1.amazonaws.com%2FNIFTY50%2FTORNTPOWER.png&w=384&q=75'
    }

  ]


}
