export interface ITitleTableType {
  title: string;
  isSort?: boolean;
  sortValue?: string;
  sortKey?: string;
}

export interface IItemsTableType {
  itemOrigin: any;
  content: {
    title?: string | number;
    isNo?: boolean;
    isTreeTitle?: boolean;
    isToggle?: boolean;
    toggleValue?: boolean;
  }[];
  noAction?: boolean;
  canEdit?: boolean;
  canView?: boolean;
  canDelete?: boolean;
}
