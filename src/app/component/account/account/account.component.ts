import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  accounts = [
    {
      id: '1',
      username: 'SV001',
      fullName: 'Nguyễn Văn HIếu',
      gender: 'Nam',
      birthDate: '2001-01-01',
      email: 'hieu@gmail.com',
      phone: '0123456789',
      password: 'password123',
      role: 'Sinh viên',
    },
    {
      id: '2',
      username: 'SV002',
      fullName: 'Trần Văn Dũng',
      gender: 'Nam',
      birthDate: '2000-03-02',
      email: 'dung@gmail.com',
      phone: '0987654321',
      password: 'password456',
      role: 'Sinh viên',
    },
    {
      id: '3',
      username: 'SV004',
      fullName: 'Trần Thị Linh',
      gender: 'Nữ',
      birthDate: '2003-03-02',
      email: 'linh@gmail.com',
      phone: '09876543200',
      password: 'password000',
      role: 'Sinh viên',
    },
    {
      id: '4',
      username: 'GV002',
      fullName: 'Đặng Quang Huy',
      gender: 'Nam',
      birthDate: '1994-03-02',
      email: 'huy@gmail.com',
      phone: '09876543210',
      password: 'password999',
      role: 'Giảng viên',
    },
    {
      id: '5',
      username: 'GV005',
      fullName: 'Trần Thị Tâm',
      gender: 'Nữ',
      birthDate: '1991-03-02',
      email: 'tam@gmail.com',
      phone: '0987654354',
      password: 'password019',
      role: 'Giảng viên',
    },
    {
      id: '6',
      username: 'SV008',
      fullName: 'Trần Văn Tùng',
      gender: 'Nam',
      birthDate: '2002-03-02',
      email: 'tung@gmail.com',
      phone: '0987654999',
      password: 'password023',
      role: 'Sinh viên',
    },
    {
      id: '7',
      username: 'GV007',
      fullName: 'Trần Thị Liên',
      gender: 'Nữ',
      birthDate: '1994-03-02',
      email: 'lien@gmail.com',
      phone: '0987654321',
      password: 'password456',
      role: 'Giảng viên',
    },
   
  ];

  isModalVisible = false;
  accountForm!: FormGroup;
  editingAccount: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  openAccountModal(account: any = null) {
    this.isModalVisible = true;
    if (account) {
      this.editingAccount = account;
      this.accountForm.setValue({
        username: account.username,
        fullName: account.fullName,
        gender: account.gender,
        birthDate: account.birthDate,
        email: account.email,
        phone: account.phone,
        password: account.password,
        role: account.role,
      });
    } else {
      this.accountForm.reset();
      this.editingAccount = null;
    }
  }

  saveAccount() {
    if (this.accountForm.invalid) return;

    const accountData = this.accountForm.value;

    if (this.editingAccount) {
      // Chỉnh sửa tài khoản
      this.editingAccount.username = accountData.username;
      this.editingAccount.fullName = accountData.fullName;
      this.editingAccount.gender = accountData.gender;
      this.editingAccount.birthDate = accountData.birthDate;
      this.editingAccount.email = accountData.email;
      this.editingAccount.phone = accountData.phone;
      this.editingAccount.password = accountData.password;
      this.editingAccount.role = accountData.role;
    } else {
      // Thêm tài khoản mới
      const newAccount = {
        id: (this.accounts.length + 1).toString(),
        ...accountData,
      };
      this.accounts.push(newAccount);
    }

    this.closeModal();
  }

  deleteAccount(id: string) {
    this.accounts = this.accounts.filter(account => account.id !== id);
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
