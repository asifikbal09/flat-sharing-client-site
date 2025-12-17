"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const CustomModal = ({ children }: { children: ReactNode }) => {
  return <Dialog>{children}</Dialog>;
};

export default CustomModal;
