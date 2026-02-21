import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.css'
})
export class ParentcategoryComponent implements OnInit {

  masterSrv = inject(MasterService);

  gridList: any[] = [];
  deptList: any[] = [];

  newObj: any = {
    id: '',
    categoryId: 0,
    categoryName: '',
    deptId: ''
  };

  ngOnInit(): void {
    this.getGridData();
    this.getDepartments();
  }

  // =========================
  // LOAD DATA
  // =========================

  getGridData() {

  this.masterSrv.getAllpCategory().subscribe((categories: any[]) => {

    this.masterSrv.getAllDepartments().subscribe((departments: any[]) => {

      this.deptList = departments;

      // Map deptName dynamically
      this.gridList = categories.map(cat => {

        const dept = departments.find(d => d.id === cat.deptId);

        return {
          ...cat,
          deptName: dept ? dept.deptName : 'N/A'
        };

      });

    });

  });

}

  getDepartments() {
    this.masterSrv.getAllDepartments().subscribe((res: any[]) => {
      this.deptList = res;
    });
  }

  // =========================
  // SAVE CATEGORY
  // =========================

  save() {

    const newName = this.newObj.categoryName.trim().toLowerCase();

    if (!newName) {
      alert('Category name is required');
      return;
    }

    const selectedDept = this.deptList.find(
      d => d.id === this.newObj.deptId
    );

    if (!selectedDept) {
      alert('Please select department');
      return;
    }

    // Duplicate check inside same department
    const isDuplicate = this.gridList.some(cat =>
      cat.categoryName.trim().toLowerCase() === newName &&
      cat.deptId === this.newObj.deptId
    );

    if (isDuplicate) {
      alert('Category already exists in this department');
      return;
    }

    const payload = {
      categoryName: this.newObj.categoryName.trim(),
      deptId: this.newObj.deptId,
      deptName: selectedDept.deptName,
      categoryId: Date.now()
    };

    this.masterSrv.createpCategorys(payload).subscribe({
      next: () => {
        alert('Category created successfully');
        this.resetForm();
        this.getGridData();
      },
      error: () => {
        alert('Error while creating category');
      }
    });
  }

  // =========================
  // UPDATE CATEGORY
  // =========================

  update() {

    const newName = this.newObj.categoryName.trim().toLowerCase();

    if (!newName) {
      alert('Category name is required');
      return;
    }

    const selectedDept = this.deptList.find(
      d => d.id === this.newObj.deptId
    );

    if (!selectedDept) {
      alert('Please select department');
      return;
    }

    const isDuplicate = this.gridList.some(cat =>
      cat.categoryName.trim().toLowerCase() === newName &&
      cat.deptId === this.newObj.deptId &&
      cat.id !== this.newObj.id   // exclude current row
    );

    if (isDuplicate) {
      alert('Category already exists in this department');
      return;
    }

    const payload = {
      ...this.newObj,
      categoryName: this.newObj.categoryName.trim(),
      deptName: selectedDept.deptName
    };

    this.masterSrv.updatepCategory(this.newObj.id, payload)
      .subscribe({
        next: () => {
          alert('Category updated successfully');
          this.resetForm();
          this.getGridData();
        },
        error: () => {
          alert('Error while updating category');
        }
      });
  }

  // =========================
  // EDIT
  // =========================

  onEdit(data: any) {
    this.newObj = { ...data };
  }

  // =========================
  // DELETE
  // =========================

  onDelete(id: string) {

    const isDelete = confirm('Are you sure you want to delete this category?');

    if (isDelete) {
      this.masterSrv.deletepCategory(id).subscribe({
        next: () => {
          alert('Category deleted successfully');
          this.getGridData();
        },
        error: () => {
          alert('Error while deleting category');
        }
      });
    }
  }

  // =========================
  // RESET
  // =========================

  resetForm() {
    this.newObj = {
      id: '',
      categoryId: 0,
      categoryName: '',
      deptId: ''
    };
  }

}