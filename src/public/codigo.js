var app = new Vue({
   el : "main",
   data:{
       grados :[0,1,2,3,4,5,6,7,8,9,10,11],
       materias :['Matemática','Español','Biologia','Deporte'],
       parentesco :['Padre','Madre','Tia','Tio','Hermana','Hermano'],
       tipo_sangre : ['A+','A-','B+','B-','O+','O-'],
       
       pagina_activa : null,

    
       listado_estudiante:[],
       grado_procesar : [],
       grado_escolar : null,

       Estudiantes_Matricula : [],
       Estudiantes_Matricula2 : [],
       
        estudiante :{
           identificacion : null,
           nombre : null,
           apellido : null,
           fecha_nacimiento : null,
           edad : null,
           direccion : null,
           data_escolar : {
               ultimo_grado : null,
               materia_preferida : null,
               ultimo_promedio : null,
           }, 
           data_acudiente:{
              nombre : null,
              apellido : null,
              parentesco : null,
              celular1 : null,
              celular2 : null,
         
           },  
           data_medicos:{
             tipo_sangre : null,
             alergico_a : null,
             alergico_b : null,
             padece_enfermedad : null,
             nombre_enfermedad : null,

           },
          
        },
        ventanas :[true,false,false,false],
        activo : 0,
        titulo : 'CAPTURA DATOS ESTUDIANTE',
        msg_boton : "Guardar",
        edicion : false,
        pos_edicion : 0,
        
   },
   created: function () {
      //para pintar lo datos al iniciar  la app vue
      this.got();
    },
   methods: {
       procesar(){
           switch (this.edicion) {
               case false:
                   this.guardar();
                   break;
           
               case true:
                  this.editar();
                   break;
           }
       },
       guardar(){
        
        let resultado = JSON.parse(JSON.stringify(this.estudiante))
        this.Estudiantes_Matricula2.push(resultado); 
        this.send();
        this.Estudiantes_Matricula2.splice(0, 1);
        location.reload()
       },

       limpiar()
       {
           this.estudiante.identificacion = null;
           this.estudiante.nombre = null;
           this.estudiante.apellido = null;
           this.estudiante.fecha_nacimiento = null;
           this.estudiante.edad = null;
           this.estudiante.direccion = null;
           this.estudiante.data_escolar.ultimo_grado = null;
           this.estudiante.data_escolar.materia_preferida = null;
           this.estudiante.data_escolar.ultimo_promedio = null;
           this.estudiante.data_acudiente.nombre = null;
           this.estudiante.data_acudiente.apellido = null;
           this.estudiante.data_acudiente.parentesco = null;
           this.estudiante.data_acudiente.celular1 = null;
           this.estudiante.data_acudiente.celular2 = null;
           this.estudiante.data_medicos.tipo_sangre = null;
           this.estudiante.data_medicos.alergico_a = null;
           this.estudiante.data_medicos.alergico_b = null;
           this.estudiante.data_medicos.padece_enfermedad = null;
           this.estudiante.data_medicos.nombre_enfermedad = null;
          },
       

       carga_datos(){
        
        this.estudiante.identificacion = this.Estudiantes_Matricula[this.pos_edicion].identificacion;
        this.estudiante.nombre = this.Estudiantes_Matricula[this.pos_edicion].nombre;
        this.estudiante.apellido = this.Estudiantes_Matricula[this.pos_edicion].apellido;
        this.estudiante.fecha_nacimiento = this.Estudiantes_Matricula[this.pos_edicion].fecha_nacimiento;
        this.estudiante.edad = this.Estudiantes_Matricula[this.pos_edicion].edad
        this.estudiante.direccion = this.Estudiantes_Matricula[this.pos_edicion].direccion;
        this.estudiante.data_escolar.ultimo_grado = this.Estudiantes_Matricula[this.pos_edicion].data_escolar.ultimo_grado;
        this.estudiante.data_escolar.materia_preferida = this.Estudiantes_Matricula[this.pos_edicion].data_escolar.materia_preferida;
        this.estudiante.data_escolar.ultimo_promedio = this.Estudiantes_Matricula[this.pos_edicion].data_escolar.ultimo_promedio;
        this.estudiante.data_acudiente.nombre = this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.nombre;
        this.estudiante.data_acudiente.apellido = this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.apellido;
        this.estudiante.data_acudiente.parentesco = this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.parentesco;
        this.estudiante.data_acudiente.celular1 = this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.celular1;
        this.estudiante.data_acudiente.celular2 = this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.celular2;
        this.estudiante.data_medicos.tipo_sangre = this.Estudiantes_Matricula[this.pos_edicion].data_medicos.tipo_sangre;
        this.estudiante.data_medicos.alergico_a = this.Estudiantes_Matricula[this.pos_edicion].data_medicos.alergico_a;
        this.estudiante.data_medicos.alergico_b = this.Estudiantes_Matricula[this.pos_edicion].data_medicos.alergico_b;
        this.estudiante.data_medicos.padece_enfermedad = this.Estudiantes_Matricula[this.pos_edicion].data_medicos.padece_enfermedad;
        this.estudiante.data_medicos.nombre_enfermedad = this.Estudiantes_Matricula[this.pos_edicion].data_medicos.nombre_enfermedad;
       },
       activar(v)
       {
           if (v != 1)
            {
             this.ventanas[this.activo] = false;
             this.ventanas[v] = true;
             this.activo = v;
            }
         switch (v) {

            case 0:
                this.titulo = "CAPTURA DATOS ESTUDIANTE";
                this.msg_boton = "Guardar";
                this.edicion = false;
                this.limpiar();
                 break;
             case 1:
                if (this.Estudiantes_Matricula.length > 0)
                {
                this.titulo = "LISTADO DATOS ESTUDIANTE";
                this.msg_boton = "Editar";
                this.edicion = true;
                this.carga_datos();
                
                }
                break;
            case 2:{
                 this.titulo = "LISTADO ESTUDIANTES POR CURSO";
                 this.grado_escolar = null;
                 this.grado_procesar = this.Estudiantes_Matricula.filter(estu => estu.data_escolar.ultimo_grado+1 == this.grado_escolar);
            }
            
                  
         
         }

       },
       editar(){
         this.Estudiantes_Matricula[this.pos_edicion].identificacion = this.estudiante.identificacion;
         this.Estudiantes_Matricula[this.pos_edicion].nombre = this.estudiante.nombre;
         this.Estudiantes_Matricula[this.pos_edicion].apellido = this.estudiante.apellido;
         this.Estudiantes_Matricula[this.pos_edicion].fecha_nacimiento =this.estudiante.fecha_nacimiento;
         this.Estudiantes_Matricula[this.pos_edicion].edad = this.estudiante.edad;
         this.Estudiantes_Matricula[this.pos_edicion].direccion =  this.estudiante.direccion;
         this.Estudiantes_Matricula[this.pos_edicion].data_escolar.ultimo_grado = this.estudiante.data_escolar.ultimo_grado ;
         this.Estudiantes_Matricula[this.pos_edicion].data_escolar.materia_preferida =  this.estudiante.data_escolar.materia_preferida;
         this.Estudiantes_Matricula[this.pos_edicion].data_escolar.ultimo_promedio =  this.estudiante.data_escolar.ultimo_promedio;
         this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.nombre = this.estudiante.data_acudiente.nombre;
         this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.apellido = this.estudiante.data_acudiente.apellido;
         this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.parentesco =  this.estudiante.data_acudiente.parentesco;
         this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.celular1 =this.estudiante.data_acudiente.celular1;
         this.Estudiantes_Matricula[this.pos_edicion].data_acudiente.celular2 = this.estudiante.data_acudiente.celular2;
         this.Estudiantes_Matricula[this.pos_edicion].data_medicos.tipo_sangre = this.estudiante.data_medicos.tipo_sangre;
         this.Estudiantes_Matricula[this.pos_edicion].data_medicos.alergico_a =  this.estudiante.data_medicos.alergico_a;
         this.Estudiantes_Matricula[this.pos_edicion].data_medicos.alergico_b =  this.estudiante.data_medicos.alergico_b;
         this.Estudiantes_Matricula[this.pos_edicion].data_medicos.padece_enfermedad =  this.estudiante.data_medicos.padece_enfermedad;
         this.Estudiantes_Matricula[this.pos_edicion].data_medicos.nombre_enfermedad =  this.estudiante.data_medicos.nombre_enfermedad;
         this.update(this.Estudiantes_Matricula[this.pos_edicion]._id)
         this.activar(0)
       },
       siguiente(){
         if (this.pos_edicion < this.Estudiantes_Matricula.length -1)
         {
          this.pos_edicion++;
          this.carga_datos();
         }
       },
       anterior(){
        if (this.pos_edicion > 0)
        {
         this.pos_edicion--;
         this.carga_datos();
        }
      }, 

      alumnos_matricular(){
         this.grado_procesar = this.Estudiantes_Matricula.filter(estu => estu.data_escolar.ultimo_grado+1 == this.grado_escolar);
      },

      borrar_inscripcion(id){
         //eliminar archivos del server
         fetch('/inicio/'+id,{
            method:'DELETE',
            headers: {
              'Accept':'application/json' ,
              'Content-type':'application/json'
            },
          })
        .then(res => res.json())
        .then(data => { this.got(),console.log(data)});
         this.activar(2)
   
        
         
      },
    

     
      listado_estudiante_grado(i){
         
            for (i= 0; i< this.escuela.archivo.length; i++){
               if (this.escuela.archivo[i].data_escolar.ultimo_grado  +1 == this.grado_escolar) {
                  this.listado_estudiante = this.escuela.archivo.filter(est => est.data_escolar.ultimo_grado  +1 == this.grado_escolar)
            } 
         }   
         return this.activar(3);
      },
 //eviar datos al seridor
      send() {
         
           fetch('/inicio',{
             method:'POST',
             body: JSON.stringify(this.Estudiantes_Matricula2[0]),
             headers: {
               'Accept':'application/json' ,
               'Content-type':'application/json'
             },
           })
         .then(res => res.json())
         .then(data => {console.log(data)});
         

    
   },  
 //obtener los datos enviados al server.
   got(){
      fetch('/inicio')
      .then(res => res.json())
      .then(data => {this.Estudiantes_Matricula = data,console.log(data)});
    },
   //actualizar datos del server
   update(id){
      fetch('/inicio/' + id,
              {
                method: 'PUT',
                body: JSON.stringify(this.Estudiantes_Matricula[this.pos_edicion]),
                headers: {
                  'Accept':'application/json' ,
                  'Content-type':'application/json'
                },
              })
              .then(res => res.json())
              .then(data => { this.got(),console.log(data)});
   }

   }
   
    
})