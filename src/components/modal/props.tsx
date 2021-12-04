import React from 'react';

export declare type props = {
  toggle?: (event: any) => void;
  isVisible: boolean;
  title: string;
  modalFooter?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  classNameTitle?: string;
};
