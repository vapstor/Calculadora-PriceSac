var submit = new Vue({
    el: '#form',
    data: {
        escolha: '',
        prestacoes: '',
        valor: '',
        entrada: '',
        juros: ''
    },
    methods: {
      isValid: function() {
        return this.prestacoes != '' && this.valor != '' && this.entrada !='' && this.juros !='';
       },
      // escolha_usuario: function() {
      //   return app_decisao.escolha_usuario;
      // }
    },
});

var app_price = new Vue({
    el: '#resultadosPrice',
    data: {
      entrada: ''
    },
    computed:{
      get_entrada: function() {
        return submit.entrada;
      },
      saldo_devedor: function() {
        var PV = submit.valor;
        console.log(PV)
        var i = submit.juros/100;
        console.log(i)
        var n = submit.prestacoes;
        console.log(n)
        var pmt = "";
        var aux = Math.pow(1+i, n);
        aux = 1- 1/aux;
        pmt = PV*(i/aux);
        console.log(pmt)
        return pmt
      }
    }
  });

// var escolha = new Vue({
//   el: "#sacXprice",
//   data: {
//     escolha: "sac",
//   },
//   computed: {
//     escolha_usuario: function () {
//       if($('#sac').hasClass('active')) {
//          this.escolha = "sac";
//          return "sac";
//       } else {
//           this.escolha = "price";
//           return "price";
//       }
//     }
//   },
// })

// var sort = new Vue({
//   el: '#listener-ordenar',
//     methods : {
//       sort_list: function (event) {
//         if ($('#sort_numbers').hasClass('fa-sort-numeric-desc')) {
//           app.lista_telefones = (_.orderBy(app.lista_telefones,['quantidade'], ['desc']));
//         } else {
//           app.lista_telefones = (_.orderBy(app.lista_telefones,['quantidade'], ['asc']));
//         }
//       },
//     }
// });