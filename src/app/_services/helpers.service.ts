import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class HelpersService {
  constructor() { }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  returnDateObject(dayLabel: string): any {
    let dd: number;
    let mm: number;
    let yyyy: number;
    const newDate = new Date();
    mm = newDate.getMonth() + 1;
    yyyy = newDate.getFullYear();
    if (dayLabel === 'today') {
      dd = newDate.getDate();
    }

    const dateObject: any = {
      year: yyyy,
      month: mm,
      day: dd
    };
    return dateObject;
  }

  formatDateForBackEndWithoutTime(dateObject: any): string {
    if (dateObject == null) {
      return null;
    }
    const year = dateObject.year;
    const month = Number(dateObject.month);
    const day = Number(dateObject.day);

    const dayFormated: string = day < 10 ? '0' + String(day) : String(day);
    const monthFormated: string =
      month < 10 ? '0' + String(month) : String(month);

    const formatedDate =
      String(year) + '-' + monthFormated + '-' + dayFormated;
    return formatedDate;
  }

  formatDateForFrontEnd(date: string): any {
    if (date === '' || date === undefined || date === null) {
      return null;
    }
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const formattedDate: any = {
      year: Number(year),
      month: Number(month),
      day: Number(day)
    };

    return formattedDate;
  }

  brlFormat(currency: string) {
    const numero = Number(currency)
      .toFixed(2)
      .split('.');
    numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',').toString();
  }
}
