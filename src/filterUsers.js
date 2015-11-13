export class FilterValueConverter {
  toView(array, value) {
    return array.filter(a => {
      //console.log(a.apellido.indexOf(value), a.apellido,value);
      return (a.apellido.toLowerCase().indexOf(value.toLowerCase()) > -1) || (a.nombre.toLowerCase().indexOf(value.toLowerCase()) > -1);
    })
  }
}