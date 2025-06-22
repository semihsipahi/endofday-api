export type TransactionTypeField = {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "date";
  required?: boolean;
  options?: string[];
};
