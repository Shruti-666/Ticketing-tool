import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  ngOnInit(): void {
    this.getDept();
  }
  masterSrv = inject(MasterService);
  deptList: any[] = [];
  newDeptObj: any = {
    deptId: 0,
    deptName: '',
    createdDate: '',
  };
  getDept() {
    this.masterSrv.getAllDepartments().subscribe((res) => {
      this.deptList = res;
    });
  }

  saveDept() {
    // Trim and normalize name
    const newName = this.newDeptObj.deptName.trim().toLowerCase();

    if (!newName) {
      alert('Department name is required');
      return;
    }

    // Step 1: Get existing departments
    this.masterSrv.getAllDepartments().subscribe((deptList: any[]) => {
      // Step 2: Check duplicate
      const isDuplicate = deptList.some(
        (dept) => dept.deptName.trim().toLowerCase() === newName
      );

      if (isDuplicate) {
        alert('Department name already exists');
        return;
      }

      // Step 3: Create department
      const payload = {
        deptName: this.newDeptObj.deptName.trim(),
        createdDate: this.newDeptObj.createdDate || new Date().toISOString(),
      };

      this.masterSrv.createNewDepartments(payload).subscribe({
        next: () => {
          alert('Department created successfully');

          // Reset form
          this.newDeptObj = {
            deptId: 0,
            deptName: '',
            createdDate: '',
          };

          this.getDept();
        },
        error: () => {
          alert('Error while creating department');
        },
      });
    });
  }

 updateDept() {

  const newName = this.newDeptObj.deptName.trim().toLowerCase();

  if (!newName) {
    alert('Department name is required');
    return;
  }

  this.masterSrv.getAllDepartments().subscribe((deptList: any[]) => {

    const isDuplicate = deptList.some(
      (dept) =>
        dept.deptName.trim().toLowerCase() === newName &&
        dept.id !== this.newDeptObj.id   // exclude current row
    );

    if (isDuplicate) {
      alert('Department name already exists');
      return;
    }

    const payload = {
      ...this.newDeptObj,
      deptName: this.newDeptObj.deptName.trim()
    };

    this.masterSrv.updateDepartments(this.newDeptObj.id, payload)
      .subscribe({
        next: () => {
          alert('Department updated successfully');

          this.newDeptObj = {
            deptId: 0,
            deptName: '',
            createdDate: ''
          };

          this.getDept();
        },
        error: () => {
          alert('Error while updating department');
        }
      });

  });
}

  onEdit(data: any) {
    this.newDeptObj = {...data};
  }

  onDelete(id: string) {
    console.log('Delete ID:', id); // Debug log
    const isDelete = confirm('Are you sure you want to delete this department?');
    if (isDelete) {
      
      this.masterSrv.deleteDepartments(id).subscribe({
        next: () => {
          alert('Department deleted successfully');
          this.getDept();
        },
        error: () => {
          alert('Error while deleting department');
        }
      });
    }
  }
}
