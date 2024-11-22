import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  results = [
    { id: 1, topicCode: 'DT001', description: 'Đề tài đạt yêu cầu xuất sắc', score: 9.5, feedback: 'Rất tốt' },
    { id: 2, topicCode: 'DT002', description: 'Đề tài hoàn thành tốt', score: 8.0, feedback: 'Tốt' },
    { id: 3, topicCode: 'DT005', description: 'Đề tài đạt yêu cầu ', score: 7, feedback: 'Chấp nhận được' },
    { id: 4, topicCode: 'DT004', description: 'Đề tài hoàn thành tốt', score: 8.0, feedback: 'Tốt' },
    { id: 5, topicCode: 'DT003', description: 'Đề tài đạt yêu cầu xuất sắc', score: 9.5, feedback: 'Rất tốt' },
    { id: 6, topicCode: 'DT002', description: 'Đề tài hoàn thành tốt', score: 8.0, feedback: 'Tốt' },
  ];

  resultForm!: FormGroup;
  isModalVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resultForm = this.fb.group({
      topicCode: ['', Validators.required],
      description: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      feedback: ['', Validators.required],
    });
  }

  openResultModal(): void {
    this.resultForm.reset();
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  saveResult(): void {
    if (this.resultForm.invalid) {
      return;
    }

    const resultData = this.resultForm.value;
    const newId = this.results.length ? Math.max(...this.results.map(r => r.id)) + 1 : 1;
    this.results.push({ id: newId, ...resultData });

    this.closeModal();
  }

  deleteResult(id: number): void {
    const index = this.results.findIndex(r => r.id === id);
    if (index !== -1) {
      this.results.splice(index, 1);
    }
  }
}
