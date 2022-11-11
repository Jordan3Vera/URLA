import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SubjectService } from 'src/app/shared/service/subject.service';
import * as FileSaver from 'file-saver';
import { jsPDF } from 'jspdf';
import autotable from 'jspdf-autotable';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title,
              private subjectSvc: SubjectService ) 
  { }

  subjectItems: any[] = [];

  //La cabecera de la tabla
  colsTable = [
    { field: 'id', header: '#'},
    { field: 'code', header: 'Código'},
    { field: 'career', header: 'Carrera'},
    { field: 'duration', header: 'Duración'},
    { field: 'contact', header: 'Contacto'},
    { field: 'phone', header: 'Teléfono'},
    { field: 'address', header: 'Dirección'},
    { field: 'country', header: 'País'},
    { field: 'province', header: 'Provincia'},
    { field: 'city', header: 'Ciudad'},
    { field: 'head_area', header: 'Jefe de área'},
    { field: 'floor', header: 'Piso'}
  ];
  //Los valores dados per recuerda que va en la API Fake esto
  itemsTable = [
    { 
      id: 1,
      code: 'A321432',
      career: 'Ingeniería Ambiental',
      duration: 4,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 2
    },
    { 
      id: 2,
      code: 'A321433',
      career: 'Ingeniería Civil',
      duration: 5,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 1
    },
    { 
      id: 3,
      code: 'A3214300',
      career: 'Profesorado de Educación Física',
      duration: 4,
      contact: 'Andrea Rincón',
      phone: '3364652140',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Burgos',
      floor: 1
    },
    { 
      id: 4,
      code: 'A321512',
      career: 'Medicina',
      duration: 7,
      contact: 'Raúl Muñoz',
      phone: '3364665663',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Josefina Pratti',
      floor: 0
    },
    { 
      id: 5,
      code: 'A321650',
      career: 'Ingeniería Mecánica',
      duration: 5,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 2
    },
    { 
      id: 6,
      code: 'A321321',
      career: 'Odontología',
      duration: 5,
      contact: 'Raúl Muñoz',
      phone: '3364665663',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Josefina Pratti',
      floor: 0
    },
    { 
      id: 7,
      code: 'A321021',
      career: 'Kinesiología',
      duration: 5,
      contact: 'Raúl Muñoz',
      phone: '3364665663',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Josefina Patrri',
      floor: 1
    },
    {
      id: 8, 
      code: 'A321923',
      career: 'Ingeniería en Sistemas y Software',
      duration: 5,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 1
    },
    { 
      id: 9,
      code: 'A321000',
      career: 'Profesorado de Historia',
      duration: 4,
      contact: 'Andrea Rincón',
      phone: '3364652140',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Burgos',
      floor: 1
    },
    {
      id: 10, 
      code: 'A321333',
      career: 'Ingeniería Química',
      duration: 5,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 1
    },
    {
      id: 11, 
      code: 'A321452',
      career: 'Ingeniería Industrial',
      duration: 5,
      contact: 'Ignacio Rosas',
      phone: '3364251022',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'Ciudad Autonóma de Buenos Aires',
      head_area: 'Manuel Lombardi',
      floor: 2
    },
    {
      id: 12, 
      code: 'A321984',
      career: 'Enfermería',
      duration: 3,
      contact: 'Raúl Muñoz',
      phone: '3364652140',
      address: 'Av. Puerto Madero 2354',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Josefina Pratti',
      floor: 0
    },
    { 
      id: 13,
      code: 'A321101',
      career: 'Licenciatura en Diseño Gráfico',
      duration: 4,
      contact: 'Jordani Alanco',
      phone: '3364002103',
      address: 'Nación 1235',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'San Nicolás de los Arroyos',
      head_area: 'Nicolás Primo',
      floor: 0
    },
    { 
      id: 14,
      code: 'A321433',
      career: 'Tecnicatura Superior en Análisis de Sistemas Informáticos',
      duration: 3,
      contact: 'Matías Llanos',
      phone: '3364032165',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Laura Fernandez',
      floor: 0
    },
    {
      id: 15, 
      code: 'A321778',
      career: 'Administración Financiera',
      duration: 4,
      contact: 'Matías Llanos',
      phone: '3364032165',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Laura Fernandez',
      floor: 0
    },
    {
      id: 16, 
      code: 'A321654',
      career: 'Licenciatura en Arquitectura',
      duration: 6,
      contact: 'Jordani Alanco',
      phone: '3364002103',
      address: 'Nación 1235',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'San Nicolás de los Arroyos',
      head_area: 'Manuel Lombardi',
      floor: 0
    },
    {
      id: 17, 
      code: 'A321410',
      career: 'Tecnicatura Superior en Recursos Humanos',
      duration: 4,
      contact: 'Matías Llanos',
      phone: '3364652140',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Laura Fernandez',
      floor: 0
    },
    {
      id: 18,
      code: 'A321997',
      career: 'Licenciatura en Gestión Empresarial',
      duration: 4,
      contact: 'Jordani Alanco',
      phone: '3364002103',
      address: 'Nación 1235',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'San Nicolás de los Arroyos',
      head_area: 'Nicolás Primo',
      floor: 0
    },
    {
      id: 19,
      code: 'A321788',
      career: 'Tecnicatura Superior de Higiene y Seguridad en el Trabajo',
      duration: 3,
      contact: 'Matías Llanos',
      phone: '3364032165',
      address: 'Delto los Andes 1450',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Laura Fernanadez',
      floor: 0
    },
    {
      id: 20,
      code: 'A321665',
      career: 'Licenciatura en Diseño Industrial',
      duration: 5,
      contact: 'Jordani Alanco',
      phone: '3364002103',
      address: 'Nación 1235',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'San Nicolás de los Arroyos',
      head_area: 'Nicolás Primo',
      floor: 0
    },
    {
      id: 21,
      code: 'A321223',
      career: 'Tecnicatura Superior en Logística',
      duration: 3,
      contact: 'Matías Llanos',
      phone: '3364032165',
      address: 'Nación 1235',
      country: 'Argentina',
      province: 'Buenos Aires',
      city: 'La Plata',
      head_area: 'Laura Fernandez',
      floor: 0
    }
  ];

  exportColumns: any[] = [];


  ngOnInit(): void {
    this.page.setTitle("URLA");
    this.storage.set('isLoggedIn', false);

    // Para el carousel 
    this.subjectSvc.Subjects().subscribe({
      next: (data) => {
        console.log(data);
        let j = Object.values(data);
        j.map(x => this.subjectItems = x);
      },
      error: (err) => {
        throw new Error("Error" + err);
      }
    });

    this.exportColumns = this.colsTable.map(col => ({title: col.header, dataKey: col.field}));
  }

  // Methods 
  // Exportar excel
  exportExcel(){
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.itemsTable);
      const workbook = { Sheets: { 'data': worksheet}, SheetNames: ['data']};
      const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveExcelFile(excelBuffer, 'signatures');
    });
  }
  
  saveExcelFile(buffer: any, fileName: string): void{
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  // Exportando y generando pdf 
  exportPdf(){  
    // let currentDate = new Date.now();

    const pdf = new jsPDF();

    pdf.setFontSize(24);
    pdf.setFont('currier');
    pdf.text("Registro de todas las asignaturas de la institución",10,10);
    autotable(pdf, {
      head: [['#','Código','Carrera','Duración','Contacto','Teléfono','Dirección','Jefe de área','Piso']],
      body: this.itemsTable.map(e => [
        '# ' + e.id, //identidad
        e.code, //código de área
        e.career, //carrera
        e.duration + ' años', //duración
        e.contact, //contacto
        e.phone, //teléfono
        `${e.address} - ${e.country} - ${e.province} - ${e.city}`, //lolidad
        e.head_area, //jefe de área
        e.floor == 0 ? '-' : e.floor //departamento o casa
      ])
    });
    pdf.getCreationDate(Date.now().toString());
    pdf.save("Asignaturas.pdf");
  }

   

}