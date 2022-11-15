function parseCount(toParseInt){
   let result = Number.parseInt(toParseInt,10);
   myError = new Error("Невалидное значение");
   if (Number.isNaN(result)){
       throw myError; 
   }
   else {return result;};
}

function validateCount(toParse){    
   try {
       let result = parseCount(toParse);
       return result;
   } catch(myError) {
       console.log(myError);
       return myError;
   }
}

class Triangle {
   constructor (a,b,c){
       this.triangleError = new Error("Треугольник с такими сторонами не существует");
       this.sideA = a;
       this.sideB = b;
       this.sideC = c;
       if ((this.sideA+this.sideB) < this.sideC || (this.sideB+this.sideC) < this.sideA || (this.sideA + this.sideC) < this.sideB){
           throw this.triangleError;
       }
   }

   getPerimeter(){
       return this.sideC+this.sideB + this.sideA;
   }

   getArea(){
       let p = this.getPerimeter()/2;
       let square = Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC)).toFixed(3);
       return Number.parseFloat(square);
   }
}

function getTriangle(a,b,c){
   let triError = new Error("Треугольник с такими сторонами не существует");
   try { 
      return new Triangle(a,b,c);
   }catch (triError){
       let errorTriangle = new Triangle(10,10,10);
       errorTriangle.getArea = () => {
           return String("Ошибка! Треугольник не существует");
       }
       errorTriangle.getPerimeter  = () =>{
           return String("Ошибка! Треугольник не существует");
       }
       return errorTriangle;
   }
}