import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  progresses = [
    { id: 1, progressCode: 'PD001', topicCode: 'DT001', startTime: '2024-01-01', endTime: '2024-01-10', reportContent: 'Báo cáo lần 1', status: 'Đang thực hiện' },
    { id: 2, progressCode: 'PD002', topicCode: 'DT002', startTime: '2024-02-01', endTime: '2024-02-15', reportContent: 'Báo cáo lần 2', status: 'Hoàn thành' },
    { id: 3, progressCode: 'PD003', topicCode: 'DT003', startTime: '2024-01-01', endTime: '2024-01-10', reportContent: 'Báo cáo lần 1', status: 'Đang thực hiện' },
    { id: 4, progressCode: 'PD004', topicCode: 'DT005', startTime: '2024-02-01', endTime: '2024-02-15', reportContent: 'Báo cáo lần 2', status: 'Hoàn thành' },
    { id: 5, progressCode: 'PD005', topicCode: 'DT004', startTime: '2024-01-01', endTime: '2024-01-10', reportContent: 'Báo cáo lần 1', status: 'Đang thực hiện' },
    { id: 6, progressCode: 'PD006', topicCode: 'DT006', startTime: '2024-02-01', endTime: '2024-02-15', reportContent: 'Báo cáo lần 2', status: 'Hoàn thành' },
  ];

  progressForm!: FormGroup;
  isModalVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.progressForm = this.fb.group({
      progressCode: ['', Validators.required],
      topicCode: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      reportContent: ['', Validators.required],
      status: ['Đang thực hiện', Validators.required],
    });
  }

  openProgressModal(): void {
    this.progressForm.reset();
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  saveProgress(): void {
    if (this.progressForm.invalid) {
      return;
    }

    const progressData = this.progressForm.value;
    const newId = this.progresses.length ? Math.max(...this.progresses.map(p => p.id)) + 1 : 1;
    this.progresses.push({ id: newId, ...progressData });

    this.closeModal();
  }

  deleteProgress(id: number): void {
    const index = this.progresses.findIndex(p => p.id === id);
    if (index !== -1) {
      this.progresses.splice(index, 1);
    }
  }
}
