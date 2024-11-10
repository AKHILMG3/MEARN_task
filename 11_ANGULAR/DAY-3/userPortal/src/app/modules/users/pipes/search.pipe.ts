import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userListArray:any[], searchKey:string): any[] {

    const result:any=[]
    if(!userListArray || searchKey==""){
      return userListArray
    }
    else{
      userListArray.map((item:any)=>{
        //item.name===searchKey ? push to new array
        if(item.name.toLowerCase().trim().includeds(searchKey.toLowerCase().trim()))
          return result.push(item)
      })
    }

    return result;
  }

}
