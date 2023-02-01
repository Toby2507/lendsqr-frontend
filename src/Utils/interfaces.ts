export interface userInterface {
  id: string;
  createdAt: Date;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: Date;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

export interface menuItemInterface {
  menuTitle: string;
  menuIcon: string;
  menuUrl: string;
}

export interface sidemenuInterface {
  customers: menuItemInterface[],
  business: menuItemInterface[],
  settings: menuItemInterface[];
}