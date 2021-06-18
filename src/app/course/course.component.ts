import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = [
    { 'id': 1, 'name': 'Learn Arduino', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course01.png' },
    { 'id': 2, 'name': 'Learn AWS', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course02.png' },
    { 'id': 3, 'name': 'Learn C++', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course03.png' },
    { 'id': 4, 'name': 'Learn CSS', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course04.png' },
    { 'id': 5, 'name': 'Learn Java', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course05.png' },
    { 'id': 6, 'name': 'Learn jQuery', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course06.png' },
    { 'id': 7, 'name': 'Learn JavaScript', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course07.png' },
    { 'id': 8, 'name': 'Learn HTML', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course08.png' },
    { 'id': 9, 'name': 'Learn SQL', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course09.jpeg' },
    { 'id': 10, 'name': 'Learn Python', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.', 'image': '../../assets/images/course010.png' },
    { 'id': 9, 'name': 'Learn SE Development', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.', 'image': '../../assets/images/course011.png' },
    { 'id': 10, 'name': 'Learn Email marketing', 'description': 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.', 'image': '../../assets/images/course012.png' },
    
  ]

}
