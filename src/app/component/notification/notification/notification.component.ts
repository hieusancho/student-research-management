import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  notifications = [
    {
      id: '1',
      title: 'Thông báo cuộc họp',
      content: 'Cuộc họp sẽ diễn ra vào lúc 10h sáng ngày mai.',
      time: new Date(),
      receiverId: 'SV001',
      creatorId: 'GV001',
    },
    {
      id: '2',
      title: 'Thông báo nộp báo cáo',
      content: 'Hạn nộp bài tập là ngày 25/11/2024.',
      time: new Date(),
      receiverId: 'SV002',
      creatorId: 'GV002',
    },
    {
      id: '3',
      title: 'Thông báo nộp tiến độ',
      content: 'Hạn nộp tiến độ là ngày 25/12/2023.',
      time: new Date(),
      receiverId: 'SV003',
      creatorId: 'GV003',
    },
    {
      id: '4',
      title: 'Thông báo thu đề cương',
      content: 'Hạn thu đề cương là ngày 11/11/2024.',
      time: new Date(),
      receiverId: 'SV002',
      creatorId: 'GV004',
    },
    {
      id: '5',
      title: 'Thông báo lịch họp',
      content: 'Lịch họp là ngày 25/11/2024.',
      time: new Date(),
      receiverId: 'SV004',
      creatorId: 'GV003',
    },
  ];

  isModalVisible = false;
  notificationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      receiverId: ['', Validators.required],
      creatorId: ['', Validators.required],
    });
  }

  openNotificationModal() {
    this.isModalVisible = true;
    this.notificationForm.reset();
  }

  saveNotification() {
    if (this.notificationForm.invalid) return;

    const newNotification = {
      id: (this.notifications.length + 1).toString(),
      ...this.notificationForm.value,
      time: new Date(),
    };
    this.notifications.push(newNotification);
    this.closeModal();
  }

  deleteNotification(id: string) {
    this.notifications = this.notifications.filter(
      (notification) => notification.id !== id
    );
  }
  
  closeModal() {
    this.isModalVisible = false;
  }
}
