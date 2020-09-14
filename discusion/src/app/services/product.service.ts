import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // Traer los datos de firebase
  productList: AngularFireList<any>;

  
  selectedProduct: Student = new Student();

  constructor(private firebase: AngularFireDatabase) { }

  
  getProducts() { 
    return this.productList = this.firebase.list('student');
  }


  insertProduct(student: Student) {
 
    this.productList.push({
      name: student.name,
      lastname: student.lastname,
      age: student.age
    
    });
  }

  
  updateProduct(student: Student) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productList.update(student.$key, {
      name: student.name,
      lastname: student.lastname,
      age: student.age
      
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
