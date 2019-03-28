import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }
   
  getItems()
{
    return [
    {"id":1,
    "color":"blue",
    "size":"L",
    "price":1600,
    "img":"../assets/img/11.jpg",
    "url":"assets/img/11.jpg"
  },
    {"id":2,"color":"blue","size":"S","price":1800,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":3,"color":"brown","size":"M","price":3200,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":4,"color":"brown","size":"XL","price":4000,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":5,"color":"cream","size":"S","price":4200,"img":"assets/img/13.jpg","url":"assets/img/13.jpg"},
    {"id":6,"color":"cream","size":"L","price":4800,"img":"assets/img/13.jpg","url":"assets/img/13.jpg"},
    {"id":7,"color":"grey","size":"XL","price":5000,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":8,"color":"grey","size":"S","price":5500,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":9,"color":"orange","size":"L","price":6000,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":10,"color":"orange","size":"M","price":6300,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":11,"color":"pink","size":"M","price":7000,"img":"assets/img/13.jpg","url":"assets/img/13.jpg"},
    {"id":12,"color":"pink","size":"XL","price":7500,"img":"assets/img/13.jpg","url":"assets/img/13.jpg"},
    {"id":13,"color":"red","size":"S","price":10000,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":14,"color":"red","size":"L","price":10500,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":15,"color":"white","size":"XL","price":14000,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":16,"color":"white","size":"M","price":14500,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
    {"id":17,"color":"blue","size":"S","price":1800,"img":"assets/img/11.jpg","url":"assets/img/11.jpg"},
    {"id":18,"color":"brown","size":"M","price":3200,"img":"assets/img/12.jpg","url":"assets/img/12.jpg"},
  ];
  }
}