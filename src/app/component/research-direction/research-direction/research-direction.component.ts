import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-research-direction',
  templateUrl: './research-direction.component.html',
  styleUrl: './research-direction.component.scss'
})
export class ResearchDirectionComponent {
  guidances: any[] = [];
  guidanceForm: FormGroup;
  isModalVisible = false;
  isEditMode = false;
  currentGuidanceId: string | null = null;

  private entityName = 'guidance'; // Tên endpoint API cho Hướng nghiên cứu

  constructor( //private dataService: DataService,
              private fb: FormBuilder) {
    this.guidanceForm = this.fb.group({
      name: [''],
      description: [''],
      teacherId: [''],
    });
  }

  ngOnInit(): void {
    this.loadGuidances();
  }

  loadGuidances(): void {
    // this.dataService.getList(this.entityName).subscribe((data) => {
    //   this.guidances = data;
    // });
  }

  openModal(): void {
    this.isModalVisible = true;
    this.isEditMode = false;
    this.guidanceForm.reset();
  }

  editGuidance(guidance: any): void {
    this.isModalVisible = true;
    this.isEditMode = true;
    this.currentGuidanceId = guidance.id;
    this.guidanceForm.patchValue({
      name: guidance.name,
      description: guidance.description,
      teacherId: guidance.teacherId,
    });
  }

  saveGuidance(): void {
    // const data = this.guidanceForm.value;
    // if (this.isEditMode && this.currentGuidanceId) {
    //   this.dataService.update(this.entityName, this.currentGuidanceId, data).subscribe(() => {
    //     this.loadGuidances();
    //     this.closeModal();
    //   });
    // } else {
    //   this.dataService.add(this.entityName, data).subscribe(() => {
    //     this.loadGuidances();
    //     this.closeModal();
    //   });
    // }
  }

  deleteGuidance(id: string): void {
    // this.dataService.delete(this.entityName, id).subscribe(() => {
    //   this.loadGuidances();
    // });
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.currentGuidanceId = null;
  }
}
