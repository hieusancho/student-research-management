import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrl: './outline.component.scss'
})
export class OutlineComponent {
  outlines = [
    { id: 1, outlineCode: 'DC001', topicCode: 'DT001', content: 'Ứng dụng AI trong y tế', dueDate: '2024-11-01', status: 'Chưa nộp' },
    { id: 2, outlineCode: 'DC002', topicCode: 'DT002', content: 'Nghiên cứu và ứng dụng SVM trong dự đoán vi khuẩn kháng kháng sinh', dueDate: '2024-10-15', status: 'Đã nộp' },
    { id: 3, outlineCode: 'DC003', topicCode: 'DT0011', content: 'Phân tích dữ liệu lớn tích hợp AI', dueDate: '2024-11-01', status: 'Chưa nộp' },
    { id: 4, outlineCode: 'DC004', topicCode: 'DT009', content: 'Khai phá Luật kết hợp trên cơ sở dữ liệu hệ thống Siêu thị tiện lơi', dueDate: '2024-10-15', status: 'Đã nộp' },
    { id: 5, outlineCode: 'DC005', topicCode: 'DT003', content: 'Phân tích dữ liệu lớn tích hợp AI', dueDate: '2024-11-01', status: 'Chưa nộp' },
    { id: 6, outlineCode: 'DC006', topicCode: 'DT005', content: 'Tìm hiểu lập trình game với công nghệ mới', dueDate: '2024-11-11', status: 'Đã nộp' },
    { id: 7, outlineCode: 'DC007', topicCode: 'DT007', content: 'Tìm hiểu lập trình game với Python và ứng dụng', dueDate: '2024-11-01', status: 'Chưa nộp' },
    { id: 8, outlineCode: 'DC008', topicCode: 'DT006', content: 'Phát triển phần mềm quản lý sổ sách', dueDate: '2024-10-15', status: 'Đã nộp' },
    
  ];

  outlineForm!: FormGroup;
  isModalVisible = false;
  editingOutline = false;
  selectedOutline: any = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.outlineForm = this.fb.group({
      outlineCode: ['', Validators.required],
      topicCode: ['', Validators.required],
      content: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['Chưa nộp', Validators.required],
    });
  }

  openOutlineModal(outline: any = null): void {
    if (outline) {
      this.editingOutline = true;
      this.selectedOutline = outline;
      this.outlineForm.patchValue(outline);
    } else {
      this.editingOutline = false;
      this.selectedOutline = null;
      this.outlineForm.reset();
    }
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  saveOutline(): void {
    if (this.outlineForm.invalid) {
      return;
    }

    const outlineData = this.outlineForm.value;
    if (this.editingOutline) {
      // Edit existing outline
      const index = this.outlines.findIndex(o => o.id === this.selectedOutline.id);
      this.outlines[index] = { ...this.selectedOutline, ...outlineData };
    } else {
      // Add new outline
      const newId = this.outlines.length ? Math.max(...this.outlines.map(o => o.id)) + 1 : 1;
      this.outlines.push({ id: newId, ...outlineData });
    }

    this.closeModal();
  }

  deleteOutline(id: number): void {
    const index = this.outlines.findIndex(o => o.id === id);
    if (index !== -1) {
      this.outlines.splice(index, 1);
    }
  }
}
