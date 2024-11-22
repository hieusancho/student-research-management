import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  

  students = [
    { studentId: 'SV001', name: 'Nguyễn Văn Hà', class: '2010A04',department:"CNTT",  status: 'Đang học' },
    { studentId: 'SV002', name: 'Trần Thị Linh', class: '2010A05' ,department:"Ngôn ngữ anh", status: 'Đã tốt nghiệp' },
    { studentId: 'SV003', name: 'Lê Minh Khôi', class: '2010A03',department:"Công nghệ sinh học", status: 'Tạm nghỉ' },
    { studentId: 'SV004', name: 'Nguyễn Quốc Hiếu', class: '2010A04',department:"CNTT" , status: 'Đang học' },
    { studentId: 'SV005', name: 'Đỗ Đăng Định', class: '2010A05',department:"CNTP" , status: 'Đã tốt nghiệp' },
    { studentId: 'SV006', name: 'Đặng Quang Huy', class: '2010A03',department:"Quản trị khách sạn", status: 'Tạm nghỉ' },
    { studentId: 'SV007', name: 'Phạm Anh Dũng', class: '2010A04',department:"Luật", status: 'Đang học' },
    { studentId: 'SV008', name: 'Trần Thị Liên', class: '2010A05',department:"CNTT", status: 'Đã tốt nghiệp' },
    { studentId: 'SV009', name: 'Ngô Thanh Đạt', class: '2010A03',department:"Kế toán", status: 'Tạm nghỉ' },
    { studentId: 'SV0010', name: 'Trần Văn Nam', class: '2010A05',department:"Kiến trúc", status: 'Đã tốt nghiệp' },
    { studentId: 'SV0011', name: 'Trịnh Văn Phú', class: '2010A03',department:"Quản trị kinh doanh", status: 'Tạm nghỉ' },
  ];

  isModalVisible = false;
  isEditMode = false;
  studentForm!: FormGroup;
  editingStudentIndex!: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentId: ['', Validators.required],
      name: ['', Validators.required],
      class: ['', Validators.required],
      department: ['', Validators.required],
      status: ['Đang học', Validators.required],
    });
  }

  openAddStudentModal() {
    this.isEditMode = false;
    this.isModalVisible = true;
    this.studentForm.reset({ status: 'Đang học' });
  }

  openEditStudentModal(student: any) {
    this.isEditMode = true;
    this.isModalVisible = true;
    this.studentForm.setValue({
      studentId: student.studentId,
      name: student.name,
      class: student.class,
      status: student.status,
    });
    this.editingStudentIndex = this.students.indexOf(student);
  }

  saveStudent() {
    if (this.studentForm.invalid) return;

    if (this.isEditMode) {
      this.students[this.editingStudentIndex] = this.studentForm.value;
    } else {
      this.students.push(this.studentForm.value);
    }
    this.closeModal();
  }

  deleteStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
