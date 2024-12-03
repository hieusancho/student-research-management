import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {
  topics = [
    {
      topicCode:'DT001',
      name: 'Ứng dụng AI trong y tế',
      leader: 'Nguyễn Quang Hải',
      student: ['Nguyễn Văn Hiếu',' Nguyễn Quang Hải', 'Ngô Tùng Quốc'],
      teacher: 'TS. Lê Văn Xuân',
      status: 'Đang thực hiện',
    },
    {
      topicCode:'DT002',
      name: 'Phát triển phần mềm quản lý sổ sách',
      leader: 'Nguyễn Văn Kiên',
      student: ['Nguyễn Văn Kiên',' Nguyễn Thành Huy'],
      teacher: 'PGS. Nguyễn Thành Huy',
      status: 'Hoàn thành',
    },
    {
      topicCode:'DT003',
      name: 'Tìm hiểu các thư viện của Python và phân tích dữ liệu chỉ số cơ thể bệnh béo phì',
      leader: 'Nguyễn Văn Quang',
      student: ['Nguyễn Văn Quang',' Đặng Quang Huy'],
      teacher: 'TS. Phạm Văn Dũng',
      status: 'Chờ duyệt',
    },
    {
      topicCode:'DT004',
      name: 'Tìm hiểu các thư viện của R và phân tích dữ liệu kết quả học tập sinh viên',
      leader: 'Nguyễn Huy Hải',
      student: ['Nguyễn Văn Duy',' Nguyễn Huy Hải'],
      teacher: 'TS. Lê Hữu Dũng',
      status: 'Chờ duyệt',
    },
    {
      topicCode:'DT005',
      name: 'Phát hiện word-based DGA botnet sử dụng học máy',
      leader: 'Ngô Thanh Đạt',
      student: ['Nguyễn Văn Hiếu',' Ngô Thanh Đạt'],
      teacher: 'TS. Phạm Văn Dương',
      status: 'Chờ duyệt',
    },
    {
      topicCode:'DT006',
      name: 'Khai phá Luật kết hợp trên cơ sở dữ liệu hệ thống Siêu thị tiện lơi',
      leader: 'Nguyễn Xuân Định',
      student: ['Nguyễn Xuân Định',' Nguyễn Quang Hải'],
      teacher: 'TS. Lưu Thị Nga',
      status: 'Chờ duyệt',
    },
    {
      topicCode:'DT007',
      name: 'Lọc và phân loại bình luận tiêu cực trên fanpage sử dụng khai phá Luật',
      leader: 'Ngô Sĩ Dương',
      student: ['Phạm Xuân Định',' Ngô Sĩ Dương'],
      teacher: 'TS. Phạm Văn Tiến',
      status: 'Đang thực hiện',
    },
    {
      topicCode:'DT008',
      name: 'Nghiên cứu và ứng dụng SVM trong dự đoán vi khuẩn kháng kháng sinh',
      leader: 'Lê thành An',
      student: ['Lê Văn Đại',' Lê thành An'],
      teacher: 'TS. Phạm Văn Dũng',
      status: 'Đang thực hiện',
    },
    {
      topicCode:'DT009',
      name: 'Tìm hiểu thư viện pygame và phát triển game endless runner',
      leader: 'Nguyễn Xuân Dương',
      student: ['Nguyễn Xuân Dương',' Nguyễn Văn Tiến'],
      teacher: 'TS. Phạm Văn Đông',
      status: 'Hoàn thành',
    },
    {
      topicCode:'DT0010',
      name: 'Phân tích dữ liệu lớn tích hợp AI',
      leader: 'Nguyễn Văn Hải',
      student: ['Nguyễn Quốc Hà',' Nguyễn Văn Hải'],
      teacher: 'TS. Nguyễn Quang Hải',
      status: 'Hoàn thành',
    },
    {
      topicCode:'DT0011',
      name: 'Tìm hiểu Unity và phát triển game sinh tồn trên đảo hoang 3d',
      leader: 'Lê thành Chương',
      student: ['Nguyễn Văn Hiếu',' Lê thành Chương'],
      teacher: 'TS. Lê Thành Chương',
      status: 'Hoàn thành',
    },
    {
      topicCode:'DT0012',
      name: 'Tìm hiểu lập trình game với Python và ứng dụng',
      leader: 'Nguyễn Quốc Hiếu',
      student: ['Nguyễn Quang Đạt',' Nguyễn Quốc Hiếu'],
      teacher: 'TS. Nguyễn Thành Công',
      status: 'Hoàn thành',
    },
    
  ];

  isModalVisible = false;
  isEditMode = false;
  topicForm!: FormGroup;
  editingTopicIndex!: number;

  
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.topicForm = this.fb.group({
      topicCode:  ['', Validators.required],
      name: ['', Validators.required],
      leader:  ['', Validators.required],
      student: ['', Validators.required],
      teacher: ['', Validators.required],
      status: ['Đang thực hiện', Validators.required],
    });
  }

  openAddTopicModal() {
    this.isEditMode = false;
    this.isModalVisible = true;
    this.topicForm.reset({ status: 'Đang thực hiện' });
  }

  openEditTopicModal(topic: any) {
    this.isEditMode = true;
    this.isModalVisible = true;
    this.topicForm.setValue({
      topicCode:topic.topicCode,
      name: topic.name,
      leader: topic.leader,
      student: topic.student,
      teacher: topic.teacher,
      status: topic.status,
    });
    this.editingTopicIndex = this.topics.indexOf(topic);
  }

  saveTopic() {
    if (this.topicForm.invalid) return;

    if (this.isEditMode) {
      this.topics[this.editingTopicIndex] = this.topicForm.value;
    } else {
      this.topics.push(this.topicForm.value);
    }
    this.closeModal();
  }

  deleteTopic(topic: any) {
    const index = this.topics.indexOf(topic);
    if (index !== -1) {
      this.topics.splice(index, 1);
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
