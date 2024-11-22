import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrl: './lecturer.component.scss'
})
export class LecturerComponent {
  lecturers = [
    { lecturerId: 'GV001', name: 'Nguyễn Văn Hà', department: 'CNTT', degree: 'Thạc sĩ' },
    { lecturerId: 'GV002', name: 'Trần Thị Liên', department: 'CNTP', degree: 'Thạc sĩ' },
    { lecturerId: 'GV003', name: 'Lê Minh Cường', department: 'Quản trị khách sạn', degree: 'Tiến sĩ' },
    { lecturerId: 'GV004', name: 'Nguyễn Văn Kiên', department: 'CNTT', degree: 'Thạc sĩ' },
    { lecturerId: 'GV005', name: 'Trần Văn Nam', department: 'Quản trị kinh doanh', degree: 'Tiến sĩ' },
    { lecturerId: 'GV006', name: 'Lê Văn Khôi', department: 'Kế toán', degree: 'Thạc sĩ' },
    { lecturerId: 'GV007', name: 'Nguyễn Văn Hồng', department: 'CNTT', degree: 'Thạc sĩ' },
    { lecturerId: 'GV008', name: 'Trần Thị Kim', department: 'Kiến trúc', degree: 'Thạc sĩ' },
    { lecturerId: 'GV009', name: 'Lê Minh Khang', department: 'Luật', degree: 'Tiến sĩ' },
    { lecturerId: 'GV0010', name: 'Lê Minh Hiếu', department: 'Ngôn ngữ Anh', degree: 'Thạc sĩ' },
  ];

  isModalVisible = false;
  isEditMode = false;
  lecturerForm!: FormGroup;
  editingLecturerIndex!: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.lecturerForm = this.fb.group({
      lecturerId: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      degree: ['Tiến sĩ', Validators.required],
    });
  }

  openAddLecturerModal() {
    this.isEditMode = false;
    this.isModalVisible = true;
    this.lecturerForm.reset({ degree: 'Tiến sĩ' });
  }

  openEditLecturerModal(lecturer: any) {
    this.isEditMode = true;
    this.isModalVisible = true;
    this.lecturerForm.setValue({
      lecturerId: lecturer.lecturerId,
      name: lecturer.name,
      department: lecturer.department,
      degree: lecturer.degree,
    });
    this.editingLecturerIndex = this.lecturers.indexOf(lecturer);
  }

  saveLecturer() {
    if (this.lecturerForm.invalid) return;

    if (this.isEditMode) {
      this.lecturers[this.editingLecturerIndex] = this.lecturerForm.value;
    } else {
      this.lecturers.push(this.lecturerForm.value);
    }
    this.closeModal();
  }

  deleteLecturer(lecturer: any) {
    const index = this.lecturers.indexOf(lecturer);
    if (index !== -1) {
      this.lecturers.splice(index, 1);
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
