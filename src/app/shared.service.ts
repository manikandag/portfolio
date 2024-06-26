import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  exp: any = [
    {
      title: 'Procurement Management System',
      sub: 'Ionic/Angular -  (DEC 2022 – MAR 2023)',
      text: 'Procurement Management System (PMS) is a softwareapplication for the operations of hospitality accommodations and commercial residential rental properties. Analyzed and optimized UIand back-end application code for efficiency and performance.Experienced of working on Ionic framework and customizing it as per requirements',
      img: 'assets/markus-spiske-wL7pwimB78Q-unsplash.jpg',
    },
    {
      title: 'Customer Relationship Management',
      sub: 'Angular Web Application -  (APR 2023 – MAY 2023)',
      text: 'Customer Relationship Management (CRM) is a software technology for managing all your company’s relationships and interaction with customers and potential customers.The Main goal is to improve business relationships of customers to grow your business.',
      img: 'assets/scott-graham-5fNmWej4tAA-unsplash.jpg',
    },
    {
      title: 'Visitor Management System',
      sub: 'Angular Web Application - (JUN 2023 – DEC 2023)',
      text: 'Visitor management software (VMS) is a software Application that keeps track of visitors entering an establishment, whether it be a business, school, or public building.These visitors include customers delivery workers, job applicants, consultants, inspectors, students and anyone else entering a workplace that isn’t an employee',
      img: 'assets/christiann-koepke-dQyS2pMYtok-unsplash.jpg',
    },
  ];
  events: any = [
    {
      title: 'SSLC',
      specialization: '',
      yop: '2016',
      institute: 'S.F.S Martic. Hr. Sec. School,Pudukkottai',
      marks: '481/500',
      percentage: '96.2%',
    },
    {
      title: 'HSC',
      specialization: 'Bio-Maths',
      yop: '2018',
      institute: 'Karpaga Vinayaga Martic. Hr. Sec. School,Pudukkottai',
      marks: '867/1200',
      percentage: '72.3%',
    },
    {
      title: 'B.Tech. (UG) ',
      specialization: 'Information Technology',
      yop: '2022',
      institute: 'Sri Krishna College Of Engg. And Tech.,Coimbatore',
      marks: '7.01/10',
      percentage: '70%',
    },
    {
      title: 'Front end Developing',
      specialization: 'Angular',
      yop: '2022',
      institute: 'Besant Technologies,Chennai',
      marks: '',
      percentage: '',
    },
  ];
  menu: any = [
    {
      label: 'About',
      url: '#about',
    },
    {
      label: 'Experience',
      url: '#experience',
    },
    {
      label: 'Skills',
      url: '#skills',
    },
    {
      label: 'Education',
      url: '#education',
    },
    {
      label: 'Contact Me',
      url: '#contact',
    },
  ];
  skll_crd = [
    { title: 'HTML/CSS', width: 'width:90%', value: '90' },
    { title: 'TypeScript', width: 'width:85%', value: '85' },
    { title: 'JavaScript', width: 'width:80%', value: '80' },
    { title: 'Angular', width: 'width:80%', value: '80' },
    { title: 'Ionic', width: 'width:75%', value: '75' },
    { title: 'Bootstrap', width: 'width:70%', value: '70' },
    { title: 'Prime ng', width: 'width:85%', value: '85' },
    { title: 'Angular Material', width: 'width:70%', value: '70' },
    { title: '.Net Core', width: 'width:50%', value: '50' },
    { title: 'PostgreSQL', width: 'width:70%', value: '70' },
    { title: 'GitHub', width: 'width:60%', value: '60' },
    { title: 'SVN', width: 'width:50%', value: '50' }
  ];
}
