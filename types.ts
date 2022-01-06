export interface Bank {
  name: string;
  code: string | null;
  slug: string;
  ussd: USSD;
}

interface USSD {
  code: string | null;
}

export type Callback<T> = (err: Error | null, data: T) => void;
