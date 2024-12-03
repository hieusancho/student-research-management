import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrl: './council.component.scss'
})
export class CouncilComponent {
  councils: any[] = [];
  topics: any[] = [];
  isModalVisible = false;
  isEditMode = false;
  councilForm: FormGroup;

  constructor(private fb: FormBuilder, 
              //private http: HttpClient
    ) {
    this.councilForm = this.fb.group({
      councilCode: [''],
      name: [''],
      topicId: [''],
      members: [''],
    });
  }

  ngOnInit(): void {
    // this.loadCouncils();
    // this.loadTopics();
  }

  
  // loadCouncils(): void {
  //   this.http.get('/api/councils').subscribe(
  //     (data: any[]) => (this.councils = data),
  //     (error) => console.error('Error loading councils:', error)
  //   );
  // }

  // loadTopics(): void {
  //   this.http.get('/api/topics').subscribe(
  //     (data: any[]) => (this.topics = data),
  //     (error) => console.error('Error loading topics:', error)
  //   );
  // }

  // Open the modal to add a new council
  openAddCouncilModal(): void {
    this.isEditMode = false;
    this.councilForm.reset();
    this.isModalVisible = true;
  }

  openEditCouncilModal(council: any): void {
    this.isEditMode = true;
    this.councilForm.patchValue(council);
    this.isModalVisible = true;
  }


  saveCouncil(): void {
    // const councilData = this.councilForm.value;

    // if (this.isEditMode) {
    //   this.http.put(`/api/councils/${councilData.id}`, councilData).subscribe(
    //     () => {
    //       //this.loadCouncils();
    //       this.closeModal();
    //     },
    //     (error) => console.error('Error updating council:', error)
    //   );
    // } else {
    //   this.http.post('/api/councils', councilData).subscribe(
    //     () => {
    //      // this.loadCouncils();
    //       this.closeModal();
    //     },
    //     (error) => console.error('Error adding council:', error)
    //   );
    // }
  }

  // deleteCouncil(council: any): void {
  //   this.http.delete(`/api/councils/${council.id}`).subscribe(
  //     () => this.loadCouncils(),
  //     (error) => console.error('Error deleting council:', error)
  //   );
  // }

  // Close the modal
  closeModal(): void {
    this.isModalVisible = false;
  }
}
