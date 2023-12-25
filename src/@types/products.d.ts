/* eslint-disable no-use-before-define */
export type ProductType = {
  title: string;
  preDescription: string;
  descriptionCard: string;
  detailsHref: string;
  slug: string;
  selected?: boolean;
  itemsSolutions: string[];
  secundaryTitle?: string;
  secundaryDescription?: string;
  accordeons?: AccordeonType[];
  descriptionDetails?: string;
  listDetails?: {
    activatedBall: boolean;
    list: ListDetails[];
  };
};

export type AccordeonType = {
  id: number;
  title: string;
  description: string;
};

export type ListDetails = {
  id: number;
  title?: string;
  description: string;
};
