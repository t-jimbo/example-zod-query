export type DefaultValues = {
  id: number;
  content: string;
  hideCompleted: boolean;
  createdAt: Date;
  category: number[];
};

export type SearchFormProps = {
  defaultValues?: DefaultValues;
};

export const SearchForm: React.FC<SearchFormProps> = ({ defaultValues }) => {
  return null;
};
