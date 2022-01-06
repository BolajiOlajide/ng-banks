export interface Bank {
  name: string;
  code: string | null;
  slug: string;
  ussd: USSD;
}

interface USSD {
  code: string | null;
}
