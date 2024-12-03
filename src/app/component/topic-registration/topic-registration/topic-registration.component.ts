import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-registration',
  templateUrl: './topic-registration.component.html',
  styleUrl: './topic-registration.component.scss'
})

export class TopicRegistrationComponent {
  topics: any[] = [];
  successMessage: string = '';

  constructor(
    //private http: HttpClient
    ) {}

  ngOnInit(): void {
   // this.loadTopics();
  }

  // Load available topics from the server
  // loadTopics(): void {
  //   this.http.get<any[]>('/api/topics').subscribe(
  //     (data) => {
  //       this.topics = data;
  //     },
  //     (error) => {
  //       console.error('Error loading topics:', error);
  //     }
  //   );
  // }

  // registerTopic(topic: any): void {
  //   const payload = { topicId: topic.id, studentId: 'STUDENT_ID' }; // Replace 'STUDENT_ID' with actual student ID.

  //   this.http.post('/api/register-topic', payload).subscribe(
  //     (response) => {
  //       topic.status = 'Đã đăng ký'; // Update the topic status locally
  //       this.successMessage = `Đăng ký đề tài "${topic.name}" thành công!`;
  //     },
  //     (error) => {
  //       console.error('Error registering topic:', error);
  //     }
  //   );
  // }
}
