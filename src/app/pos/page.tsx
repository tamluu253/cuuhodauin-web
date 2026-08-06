'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Store,
  LayoutDashboard,
  Package,
  Receipt,
  Users,
  BarChart3,
  User,
  Plus,
  Trash2,
  UserPlus,
  ShoppingCart,
  Printer,
  Search,
  CheckCircle,
  QrCode,
  Banknote,
  DollarSign,
  TrendingUp,
  Boxes,
  AlertTriangle,
  X,
  Lock,
  LogOut,
  ShieldCheck,
  Building2,
  MapPin,
  Calculator,
  UserCheck,
  Briefcase
} from 'lucide-react';

// --- TYPES ---
export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  unit: string;
  costPrice: number;
  price: number;
  stock: number;
}

export interface Customer {
  id: string;
  code: string;
  name: string;
  phone: string;
  email: string;
  companyName?: string;
  shippingAddress?: string;
  points: number;
  totalSpent: number;
}

export interface CartItem {
  productId: string;
  sku: string;
  name: string;
  price: number;
  qty: number;
  subtotal: number;
}

export interface Order {
  id: string;
  createdAt: string;
  customerId: string;
  customerName: string;
  companyName?: string;
  shippingAddress?: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  grandTotal: number;
  paymentMethod: 'CASH' | 'BANK';
  cashGiven: number;
  cashChange: number;
  status: 'COMPLETED';
}

export interface ExpenseRecord {
  id: string;
  date: string;
  title: string;
  category: string;
  amount: number;
  note: string;
}

export interface Employee {
  id: string;
  code: string;
  name: string;
  position: string;
  phone: string;
  salary: number;
  allowance: number;
  status: 'ACTIVE' | 'OFF';
}

export interface UserAccount {
  username: string;
  role: 'CEO' | 'QUANLY_XUONG';
  name: string;
}

// --- 2 ACCOUNTS DATA ---
const VALID_ACCOUNTS: Record<string, { pass: string; role: 'CEO' | 'QUANLY_XUONG'; name: string }> = {
  giamdoc: { pass: 'vnpis2026', role: 'CEO', name: 'Giám Đốc (CEO)' },
  quanly: { pass: 'vnpis123', role: 'QUANLY_XUONG', name: 'Quản Lý Xưởng In' }
};

// --- DEFAULT INITIAL DATA ---
const DEFAULT_PRODUCTS: Product[] = [
  {
    "id": "1",
    "sku": "VNPIS-0001",
    "name": "Chất xử lý 311BSVN",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 874250,
    "price": 1345000,
    "stock": 150
  },
  {
    "id": "2",
    "sku": "VNPIS-0002",
    "name": "Chất xử lý 311BSVN",
    "category": "Dung môi & Phụ gia",
    "unit": "kg",
    "costPrice": 874250,
    "price": 1345000,
    "stock": 150
  },
  {
    "id": "3",
    "sku": "VNPIS-0003",
    "name": "Chất xử lý 320NT5",
    "category": "Dung môi & Phụ gia",
    "unit": "kg",
    "costPrice": 15,
    "price": 1280100,
    "stock": 150
  },
  {
    "id": "4",
    "sku": "VNPIS-0004",
    "name": "Dung môi ABS",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 354250,
    "price": 545000,
    "stock": 150
  },
  {
    "id": "5",
    "sku": "VNPIS-0005",
    "name": "Dung môi Butyl TD01",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 282750,
    "price": 435000,
    "stock": 150
  },
  {
    "id": "6",
    "sku": "VNPIS-0006",
    "name": "Dung môi Isophorone - 783",
    "category": "Dung môi & Phụ gia",
    "unit": "Kg",
    "costPrice": 276250,
    "price": 425000,
    "stock": 150
  },
  {
    "id": "7",
    "sku": "VNPIS-0007",
    "name": "Dung môi Isophorone - 783",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 276250,
    "price": 425000,
    "stock": 150
  },
  {
    "id": "8",
    "sku": "VNPIS-0008",
    "name": "Dung môi Isophorone - 783",
    "category": "Dung môi & Phụ gia",
    "unit": "lít",
    "costPrice": 362381,
    "price": 557510,
    "stock": 150
  },
  {
    "id": "9",
    "sku": "VNPIS-0009",
    "name": "Dung môi NPP 9000",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 276250,
    "price": 425000,
    "stock": 150
  },
  {
    "id": "10",
    "sku": "VNPIS-0010",
    "name": "Dung môi PP",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 354250,
    "price": 545000,
    "stock": 150
  },
  {
    "id": "11",
    "sku": "VNPIS-0011",
    "name": "Dung môi pha mực AS9 1575 (500ml)",
    "category": "Dung môi & Phụ gia",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "12",
    "sku": "VNPIS-0012",
    "name": "Dung môi pha mực MC-2BK124 (1200ml)",
    "category": "Dung môi & Phụ gia",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "13",
    "sku": "VNPIS-0013",
    "name": "Dung môi pha mực MC-2BK124, có chip, dạng lỏng ( 1200ml) (9000010322)",
    "category": "Dung môi & Phụ gia",
    "unit": "Bình",
    "costPrice": 689000,
    "price": 1060000,
    "stock": 150
  },
  {
    "id": "14",
    "sku": "VNPIS-0014",
    "name": "Dung môi pha mực SV-1 màu đen",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 50,
    "price": 10452792,
    "stock": 150
  },
  {
    "id": "15",
    "sku": "VNPIS-0015",
    "name": "Dung môi vệ sinh 120000546 (1 Lít)",
    "category": "Dung môi & Phụ gia",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "16",
    "sku": "VNPIS-0016",
    "name": "Dung môi vệ sinh WL-220 (1 Lít)",
    "category": "Dung môi & Phụ gia",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "17",
    "sku": "VNPIS-0017",
    "name": "Dung môi vệ sinh mực CL-1 màu đen",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 24,
    "price": 4862226,
    "stock": 150
  },
  {
    "id": "18",
    "sku": "VNPIS-0018",
    "name": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRT-DTG-TCUDC3",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 206,
    "price": 83148446,
    "stock": 150
  },
  {
    "id": "19",
    "sku": "VNPIS-0019",
    "name": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRT-DTG-WC",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 249,
    "price": 81012974,
    "stock": 150
  },
  {
    "id": "20",
    "sku": "VNPIS-0020",
    "name": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 562250,
    "price": 865000,
    "stock": 150
  },
  {
    "id": "21",
    "sku": "VNPIS-0021",
    "name": "Nước xử lý PP",
    "category": "Dung môi & Phụ gia",
    "unit": "Lít",
    "costPrice": 552500,
    "price": 850000,
    "stock": 150
  },
  {
    "id": "22",
    "sku": "VNPIS-0022",
    "name": "CHI NHÁNH CÔNG TY CỔ PHẦN KỸ THUẬT SỐ SBC",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Đầu in Ricoh Gen 5 (MH5420) của máy in phun công nghiệp",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "23",
    "sku": "VNPIS-0023",
    "name": "CHI NHÁNH CÔNG TY CỔ PHẦN KỸ THUẬT SỐ SBC",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý,mã PRT-DTG-TCUDC3",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "24",
    "sku": "VNPIS-0024",
    "name": "CHI NHÁNH CÔNG TY TNHH VẬN TẢI VÀ TIẾP VẬN TOÀN CẦU TẠI TP. HCM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "B/L#: 889678599694",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "25",
    "sku": "VNPIS-0025",
    "name": "CHI NHÁNH CÔNG TY TNHH VẬN TẢI VÀ TIẾP VẬN TOÀN CẦU TẠI TP. HCM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "B/L#: 8880  3970  2090",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "26",
    "sku": "VNPIS-0026",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng nhạt (Light Magenta), mã: NF3134J",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "27",
    "sku": "VNPIS-0027",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng sen (Magenta), mã: NF3134B",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "28",
    "sku": "VNPIS-0028",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu vàng (Yellow), mã: NF3134B",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "29",
    "sku": "VNPIS-0029",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Xanh nhạt (Light Cyan), mã: NF3134LZ",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "30",
    "sku": "VNPIS-0030",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu đen (Black), mã: NF3134B",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "31",
    "sku": "VNPIS-0031",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Trắng (White), mã: NF3134W",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "32",
    "sku": "VNPIS-0032",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu son bóng (Varnish), mã: NF3134X",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "33",
    "sku": "VNPIS-0033",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu xanh lam (Cyan), mã: NF3134C",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "34",
    "sku": "VNPIS-0034",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu son bóng (Varnish), mã: NF3134X (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "35",
    "sku": "VNPIS-0035",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu xanh lam (Cyan), mã: NF3134C (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "36",
    "sku": "VNPIS-0036",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Xanh nhạt (Light Cyan), mã: NF3134LZ (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "37",
    "sku": "VNPIS-0037",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng nhạt (Light Magenta), mã: NF3134J (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "38",
    "sku": "VNPIS-0038",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng sen (Magenta), mã: NF3134B (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "39",
    "sku": "VNPIS-0039",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu đen (Black), mã: NF3134B (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "40",
    "sku": "VNPIS-0040",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Trắng (White), mã: NF3134W (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "41",
    "sku": "VNPIS-0041",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu vàng (Yellow), mã: NF3134B (PO10192)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "42",
    "sku": "VNPIS-0042",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN (PO 10353)",
    "costPrice": 9,
    "price": 15,
    "stock": 150
  },
  {
    "id": "43",
    "sku": "VNPIS-0043",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3 (PO 10353)",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "44",
    "sku": "VNPIS-0044",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN  (PO10106)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "45",
    "sku": "VNPIS-0045",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3 (PO10106)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "46",
    "sku": "VNPIS-0046",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3 (PO10301)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "47",
    "sku": "VNPIS-0047",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Trắng (White), mã: NF3134W (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "48",
    "sku": "VNPIS-0048",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu son bóng (Varnish), mã: NF3134X (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "49",
    "sku": "VNPIS-0049",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu đen (Black), mã: NF3134B (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "50",
    "sku": "VNPIS-0050",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng nhạt (Light Magenta), mã: NF3134J (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "51",
    "sku": "VNPIS-0051",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu xanh lam (Cyan), mã: NF3134C (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "52",
    "sku": "VNPIS-0052",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng sen (Magenta), mã: NF3134B (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "53",
    "sku": "VNPIS-0053",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Xanh nhạt (Light Cyan), mã: NF3134LZ (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "54",
    "sku": "VNPIS-0054",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu vàng (Yellow), mã: NF3134B (PO10301)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "55",
    "sku": "VNPIS-0055",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN (PO10301)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "56",
    "sku": "VNPIS-0056",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu son bóng (Varnish), mã: NF3134X (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "57",
    "sku": "VNPIS-0057",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng sen (Magenta), mã: NF3134B (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "58",
    "sku": "VNPIS-0058",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu hồng nhạt (Light Magenta), mã: NF3134J (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "59",
    "sku": "VNPIS-0059",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Trắng (White), mã: NF3134W (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "60",
    "sku": "VNPIS-0060",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu xanh lam (Cyan), mã: NF3134C (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "61",
    "sku": "VNPIS-0061",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu Xanh nhạt (Light Cyan), mã: NF3134LZ (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "62",
    "sku": "VNPIS-0062",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3 (PO 10410)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "63",
    "sku": "VNPIS-0063",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN  (PO 10410)",
    "costPrice": 19,
    "price": 30,
    "stock": 150
  },
  {
    "id": "64",
    "sku": "VNPIS-0064",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu vàng (Yellow), mã: NF3134B (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "65",
    "sku": "VNPIS-0065",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV màu đen (Black), mã: NF3134B (PO 10410)",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "66",
    "sku": "VNPIS-0066",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 320NT5  (PO W10807 )",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "67",
    "sku": "VNPIS-0067",
    "name": "CHI NHÁNH TỔNG CÔNG TY LIKSIN - XÍ NGHIỆP IN BAO BÌ GIẤY LIKSIN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ in gia công",
    "costPrice": 4982,
    "price": 7666,
    "stock": 150
  },
  {
    "id": "68",
    "sku": "VNPIS-0068",
    "name": "CÔNG TY CỔ PHẦN DẦU NHỚT VÀ HÓA CHẤT MIỀN NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dầu nhờn Saturn Anti - Rust Oil 12",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "69",
    "sku": "VNPIS-0069",
    "name": "CÔNG TY CỔ PHẦN KHO VẬN TÂN CẢNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lưu kho từ 4->6 ngày HLHU8321127 - SISL-SE26050263 (1,00 x 3,00)",
    "costPrice": 1,
    "price": 3,
    "stock": 150
  },
  {
    "id": "70",
    "sku": "VNPIS-0070",
    "name": "CÔNG TY CỔ PHẦN KHO VẬN TÂN CẢNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bốc xếp kiểm hóa hàng kho CFS (100% - PDV260318-0045) SKHU9515090 - SISL-SE26020048 (1,00)",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "71",
    "sku": "VNPIS-0071",
    "name": "CÔNG TY CỔ PHẦN SOLOMON PARAGON VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ sửa chữa máy in",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "72",
    "sku": "VNPIS-0072",
    "name": "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ TTC CHÂU THÀNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Xăng RON 95 Mức 3",
    "costPrice": 10,
    "price": 16,
    "stock": 150
  },
  {
    "id": "73",
    "sku": "VNPIS-0073",
    "name": "CÔNG TY CỔ PHẦN TẬP ĐOÀN VNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ tháng 04.2026 Zbox-NAPAS-12 tháng-Zcloud",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "74",
    "sku": "VNPIS-0074",
    "name": "CÔNG TY CỔ PHẦN TỰ ĐỘNG HÓA TOÀN CẦU",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Cảm biến LX-101",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "75",
    "sku": "VNPIS-0075",
    "name": "CÔNG TY CỔ PHẦN UPS VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ bưu chính chuyển phát – (Postal Delivery Service)",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "76",
    "sku": "VNPIS-0076",
    "name": "CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ VÀ THƯƠNG MẠI SOFTDREAMS",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Cấu hình và khởi tạo hệ thống",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "77",
    "sku": "VNPIS-0077",
    "name": "CÔNG TY CỔ PHẦN ẨM THỰC THIÊN LÝ",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Set Gia Đình 2",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "78",
    "sku": "VNPIS-0078",
    "name": "CÔNG TY CỔ PHẦN ỨNG DỤNG BẢN ĐỒ VIỆT",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ in gia công mẫu",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "79",
    "sku": "VNPIS-0079",
    "name": "CÔNG TY HỮU HẠN ĐIỆN CƠ LỤC NHÂN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 91",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "80",
    "sku": "VNPIS-0080",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi pha mực MC-2BK124, có chip, dạng lỏng ( 1200ml) (PO9000009954)",
    "costPrice": 5,
    "price": 9,
    "stock": 150
  },
  {
    "id": "81",
    "sku": "VNPIS-0081",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi vệ sinh WL-220, dạng lỏng ( 1Lit) (PO9000009954)",
    "costPrice": 5,
    "price": 8,
    "stock": 150
  },
  {
    "id": "82",
    "sku": "VNPIS-0082",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in công nghiệp IC-2BK124 (825ml) (PO 9000009954)",
    "costPrice": 7,
    "price": 11,
    "stock": 150
  },
  {
    "id": "83",
    "sku": "VNPIS-0083",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi pha mực MC-2BK124, có chip, dạng lỏng (1200ml) (PO9000009954)",
    "costPrice": 1,
    "price": 3,
    "stock": 150
  },
  {
    "id": "84",
    "sku": "VNPIS-0084",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in công nghiệp IC-2BK124 (825ml) (PO 9000010322)",
    "costPrice": 8,
    "price": 13,
    "stock": 150
  },
  {
    "id": "85",
    "sku": "VNPIS-0085",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi pha mực MC-2BK124, có chip, dạng lỏng ( 1200ml) (9000010322)",
    "costPrice": 13,
    "price": 20,
    "stock": 150
  },
  {
    "id": "86",
    "sku": "VNPIS-0086",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "ĐẦU IN PAD 086-03",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "87",
    "sku": "VNPIS-0087",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 91",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "88",
    "sku": "VNPIS-0088",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vòng gạt mực sứ 100x90x12mm",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "89",
    "sku": "VNPIS-0089",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 50",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "90",
    "sku": "VNPIS-0090",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 100",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "91",
    "sku": "VNPIS-0091",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in-Thick plate bằng thép (100*100*10)mm",
    "costPrice": 22,
    "price": 35,
    "stock": 150
  },
  {
    "id": "92",
    "sku": "VNPIS-0092",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi Isophorone - 783",
    "costPrice": 13,
    "price": 20,
    "stock": 150
  },
  {
    "id": "93",
    "sku": "VNPIS-0093",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi ABS",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "94",
    "sku": "VNPIS-0094",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in 100x250x0.3mm",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "95",
    "sku": "VNPIS-0095",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in PX 40",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "96",
    "sku": "VNPIS-0096",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Inox dày 0.3mm",
    "costPrice": 26,
    "price": 40,
    "stock": 150
  },
  {
    "id": "97",
    "sku": "VNPIS-0097",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -BLACK B cho máy in văn phòng 500 ml ( đen )",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "98",
    "sku": "VNPIS-0098",
    "name": "CÔNG TY TNHH COSOTA VIETNAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE",
    "costPrice": 13,
    "price": 20,
    "stock": 150
  },
  {
    "id": "99",
    "sku": "VNPIS-0099",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP trắng maxx surface",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "100",
    "sku": "VNPIS-0100",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP xanh blue maxx surface",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "101",
    "sku": "VNPIS-0101",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP xám maxx surface",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "102",
    "sku": "VNPIS-0102",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi Isophorone - 783",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "103",
    "sku": "VNPIS-0103",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP vàng maxx surface",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "104",
    "sku": "VNPIS-0104",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in-Thick plate bằng thép (100*100*10)mm",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "105",
    "sku": "VNPIS-0105",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi ABS",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "106",
    "sku": "VNPIS-0106",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi Butyl TD01",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "107",
    "sku": "VNPIS-0107",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 60",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "108",
    "sku": "VNPIS-0108",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 91",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "109",
    "sku": "VNPIS-0109",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 42",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "110",
    "sku": "VNPIS-0110",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 100",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "111",
    "sku": "VNPIS-0111",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC51",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "112",
    "sku": "VNPIS-0112",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Đầu in silicone 2E-92",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "113",
    "sku": "VNPIS-0113",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi NPP 9000",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "114",
    "sku": "VNPIS-0114",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Đầu in silicone 129-1",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "115",
    "sku": "VNPIS-0115",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ sửa chữa máy in",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "116",
    "sku": "VNPIS-0116",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước xử lý PP",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "117",
    "sku": "VNPIS-0117",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP đen maxx surface",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "118",
    "sku": "VNPIS-0118",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Đồ gá sản phẩm làm từ thép tấm",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "119",
    "sku": "VNPIS-0119",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -Cyan C 500 ml ( xanh )",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "120",
    "sku": "VNPIS-0120",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in-Thick plate bằng thép (100*100*10)mm",
    "costPrice": 9,
    "price": 14,
    "stock": 150
  },
  {
    "id": "121",
    "sku": "VNPIS-0121",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in- Thick plate bằng thép (100*150*10)mm",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "122",
    "sku": "VNPIS-0122",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -MAGENTA M 500 ml ( đỏ)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "123",
    "sku": "VNPIS-0123",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP PURITY (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -BLACK B 500 ml ( đen )",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "124",
    "sku": "VNPIS-0124",
    "name": "CÔNG TY TNHH CÔNG NGHỆ AZT VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in TN323",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "125",
    "sku": "VNPIS-0125",
    "name": "CÔNG TY TNHH CÔNG NGHỆ AZT VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Máy Photocopy đa chức năng Konica Minolta bizhub 367",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "126",
    "sku": "VNPIS-0126",
    "name": "CÔNG TY TNHH CÔNG NGHỆ AZT VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bộ truyền và đảo bản gốc tự động DF-628",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "127",
    "sku": "VNPIS-0127",
    "name": "CÔNG TY TNHH CÔNG NGHỆ AZT VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Kệ photo màu đen KT600x650x250 (thấp)L2",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "128",
    "sku": "VNPIS-0128",
    "name": "CÔNG TY TNHH CÔNG NGHỆ CÔNG NGHIỆP WO JIN VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -Cyan C cho máy in văn phòng 500 ml ( xanh )",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "129",
    "sku": "VNPIS-0129",
    "name": "CÔNG TY TNHH CÔNG NGHỆ CÔNG NGHIỆP WO JIN VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Moorim EP -BLACK B cho máy in văn phòng 500 ml ( đen )",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "130",
    "sku": "VNPIS-0130",
    "name": "CÔNG TY TNHH DUBUIT INKS VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "CHẤT TẨY RỬA ĐẦU IN EVOCLEAN SOLVANT HLM 3556 - VN",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "131",
    "sku": "VNPIS-0131",
    "name": "CÔNG TY TNHH DUBUIT INKS VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "MỰC IN EVOJET BLACK E9000",
    "costPrice": 5,
    "price": 9,
    "stock": 150
  },
  {
    "id": "132",
    "sku": "VNPIS-0132",
    "name": "CÔNG TY TNHH DUBUIT INKS VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "MỰC IN EVOJET 4010 BLACK",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "133",
    "sku": "VNPIS-0133",
    "name": "CÔNG TY TNHH DỊCH VỤ TƯ VẤN ANPHA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ tư vấn quản lý doanh nghiệp",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "134",
    "sku": "VNPIS-0134",
    "name": "CÔNG TY TNHH DỊCH VỤ TƯ VẤN ANPHA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ thủ tục về thuế",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "135",
    "sku": "VNPIS-0135",
    "name": "CÔNG TY TNHH GA RAN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Giày bảo hộ lao động LIGERO",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "136",
    "sku": "VNPIS-0136",
    "name": "CÔNG TY TNHH HUY AN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP-100",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "137",
    "sku": "VNPIS-0137",
    "name": "CÔNG TY TNHH HUY AN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 91",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "138",
    "sku": "VNPIS-0138",
    "name": "CÔNG TY TNHH HUY AN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP 26",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "139",
    "sku": "VNPIS-0139",
    "name": "CÔNG TY TNHH HUY AN",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in SPU 91/1",
    "costPrice": 2,
    "price": 4,
    "stock": 150
  },
  {
    "id": "140",
    "sku": "VNPIS-0140",
    "name": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi PP",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "141",
    "sku": "VNPIS-0141",
    "name": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "142",
    "sku": "VNPIS-0142",
    "name": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP 33",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "143",
    "sku": "VNPIS-0143",
    "name": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP 26",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "144",
    "sku": "VNPIS-0144",
    "name": "CÔNG TY TNHH INFINITY LOVE",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "145",
    "sku": "VNPIS-0145",
    "name": "CÔNG TY TNHH JITONG PRECISION HARDWARE VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Inox dày 0.3mm",
    "costPrice": 3,
    "price": 6,
    "stock": 150
  },
  {
    "id": "146",
    "sku": "VNPIS-0146",
    "name": "CÔNG TY TNHH KEO TỔNG HỢP ĐẠI ĐÔNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 320NT5",
    "costPrice": 9,
    "price": 15,
    "stock": 150
  },
  {
    "id": "147",
    "sku": "VNPIS-0147",
    "name": "CÔNG TY TNHH KEO TỔNG HỢP ĐẠI ĐÔNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN",
    "costPrice": 19,
    "price": 30,
    "stock": 150
  },
  {
    "id": "148",
    "sku": "VNPIS-0148",
    "name": "CÔNG TY TNHH KEO TỔNG HỢP ĐẠI ĐÔNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chất xử lý 311BSVN",
    "costPrice": 9,
    "price": 15,
    "stock": 150
  },
  {
    "id": "149",
    "sku": "VNPIS-0149",
    "name": "CÔNG TY TNHH LECI",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bóng đèn UV L03341",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "150",
    "sku": "VNPIS-0150",
    "name": "CÔNG TY TNHH LECI",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bóng đèn UV L01641",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "151",
    "sku": "VNPIS-0151",
    "name": "CÔNG TY TNHH LINH KIỆN CÔNG NGHIỆP ÁNH DƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Xi lanh khí SC 40-150S",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "152",
    "sku": "VNPIS-0152",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu vào H13 - 0203750 (Filter - Hepa)",
    "costPrice": 19,
    "price": 30,
    "stock": 150
  },
  {
    "id": "153",
    "sku": "VNPIS-0153",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH.",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu vào H13 - 0203750 (Filter - Hepa)",
    "costPrice": 13,
    "price": 20,
    "stock": 150
  },
  {
    "id": "154",
    "sku": "VNPIS-0154",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH.",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bóng đèn UV L03341",
    "costPrice": 4,
    "price": 7,
    "stock": 150
  },
  {
    "id": "155",
    "sku": "VNPIS-0155",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH.",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu vào Coarse filter Fru-exp - 0178612",
    "costPrice": 4,
    "price": 7,
    "stock": 150
  },
  {
    "id": "156",
    "sku": "VNPIS-0156",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH.",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu vào Coarse filter - 0206087",
    "costPrice": 5,
    "price": 9,
    "stock": 150
  },
  {
    "id": "157",
    "sku": "VNPIS-0157",
    "name": "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT THÀNH PHỐ HỒ CHÍ MINH - XÍ NGHIỆP IN TÀI CHÍNH.",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu ra Exp - 0173306",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "158",
    "sku": "VNPIS-0158",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 68512)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "159",
    "sku": "VNPIS-0159",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 68512)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "160",
    "sku": "VNPIS-0160",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in Evojet BLack E9000 (PO 67939)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "161",
    "sku": "VNPIS-0161",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "MỰC IN EVOJET BLACK E9000",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "162",
    "sku": "VNPIS-0162",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 69598)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "163",
    "sku": "VNPIS-0163",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "NƯỚC RỬA ĐẦU IN EVOCLEAN SOLVANT HLM 3556 - VN (PO 69598)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "164",
    "sku": "VNPIS-0164",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 69598)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "165",
    "sku": "VNPIS-0165",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 70544)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "166",
    "sku": "VNPIS-0166",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "NƯỚC RỬA ĐẦU IN EVOCLEAN SOLVANT HLM 3556 - VN (PO 70544)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "167",
    "sku": "VNPIS-0167",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 70544)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "168",
    "sku": "VNPIS-0168",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 71778)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "169",
    "sku": "VNPIS-0169",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 71778)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "170",
    "sku": "VNPIS-0170",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 72494)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "171",
    "sku": "VNPIS-0171",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO PO 73996)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "172",
    "sku": "VNPIS-0172",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 73996)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "173",
    "sku": "VNPIS-0173",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO PO 74596)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "174",
    "sku": "VNPIS-0174",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 74596)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "175",
    "sku": "VNPIS-0175",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE (PO 74786)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "176",
    "sku": "VNPIS-0176",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K(PO 74786)",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "177",
    "sku": "VNPIS-0177",
    "name": "CÔNG TY TNHH OKIA OPTICAL VIỆT NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dầu nhờn ANTI-RUST OIL 12",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "178",
    "sku": "VNPIS-0178",
    "name": "CÔNG TY TNHH POWER BEST (VIỆT NAM)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dịch vụ sửa chữa máy in tampon",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "179",
    "sku": "VNPIS-0179",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Máy in tampon 1 màu, cốc mực, dùng khí nén + điện, model: SE-125A",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "180",
    "sku": "VNPIS-0180",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Khuôn in 100x250x0.3mm",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "181",
    "sku": "VNPIS-0181",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in SPU 91/1",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "182",
    "sku": "VNPIS-0182",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Công khắc khuôn in",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "183",
    "sku": "VNPIS-0183",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Dung môi ABS",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "184",
    "sku": "VNPIS-0184",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Gá sản phẩm làm từ tấm inox dày 0.3mm",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "185",
    "sku": "VNPIS-0185",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "MỰC IN MONO-PAD VERMILION 840",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "186",
    "sku": "VNPIS-0186",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Đầu in silicone 15D-27",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "187",
    "sku": "VNPIS-0187",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vòng gạt mực sứ 100x90x12mm",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "188",
    "sku": "VNPIS-0188",
    "name": "CÔNG TY TNHH SX TM QUANG TRUNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Hóa chất - IsoPropyl Alcohol",
    "costPrice": 104,
    "price": 160,
    "stock": 150
  },
  {
    "id": "189",
    "sku": "VNPIS-0189",
    "name": "CÔNG TY TNHH SẢN XUẤT KIM THIẾT",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV dùng in trên mọi bề mặt nhựa",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "190",
    "sku": "VNPIS-0190",
    "name": "CÔNG TY TNHH SẢN XUẤT KIM THIẾT",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in HENKEY - PLUS dùng in trên mọi bề mặt nhựa ( PP, PE, LD, HD, PET, HDPE..)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "191",
    "sku": "VNPIS-0191",
    "name": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI SHINSUNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 100",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "192",
    "sku": "VNPIS-0192",
    "name": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI SHINSUNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in EC 91",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "193",
    "sku": "VNPIS-0193",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHIỆP IN ĐỨC THỊNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Vải lau 1009SLE",
    "costPrice": 13,
    "price": 20,
    "stock": 150
  },
  {
    "id": "194",
    "sku": "VNPIS-0194",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHIỆP IN ĐỨC THỊNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu vào H13 - 0203750 (Filter - Hepa)",
    "costPrice": 7,
    "price": 12,
    "stock": 150
  },
  {
    "id": "195",
    "sku": "VNPIS-0195",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHIỆP IN ĐỨC THỊNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí làm mát trạm in (Filter-air, Fruexp) - 0178612",
    "costPrice": 3,
    "price": 5,
    "stock": 150
  },
  {
    "id": "196",
    "sku": "VNPIS-0196",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHIỆP IN ĐỨC THỊNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí làm mát hệ thống board mạch trạm in (Right side door filter ) - 0206087",
    "costPrice": 1,
    "price": 3,
    "stock": 150
  },
  {
    "id": "197",
    "sku": "VNPIS-0197",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHIỆP IN ĐỨC THỊNH",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tấm lọc khí đầu ra (Filter-airprint-Exp) - 0173306",
    "costPrice": 6,
    "price": 10,
    "stock": 150
  },
  {
    "id": "198",
    "sku": "VNPIS-0198",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT BNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí thuê hệ thống đầu in phun công nghiệp (KTS , Ricoh Gen 5, model CTX1 )",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "199",
    "sku": "VNPIS-0199",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VÀ KỸ THUẬT CÁT LỢI",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Máy photocopy đen trắng bizhub 367",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "200",
    "sku": "VNPIS-0200",
    "name": "CÔNG TY TNHH THƯƠNG MẠI GMK",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRTDTGTCUDC3",
    "costPrice": 48,
    "price": 75,
    "stock": 150
  },
  {
    "id": "201",
    "sku": "VNPIS-0201",
    "name": "CÔNG TY TNHH THƯƠNG MẠI GMK",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước phủ tiền xử lý vải dùng cho máy in, mã PRT-DTG-WC",
    "costPrice": 16,
    "price": 25,
    "stock": 150
  },
  {
    "id": "202",
    "sku": "VNPIS-0202",
    "name": "CÔNG TY TNHH THƯƠNG MẠI VERITEK",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Nước xử lý bề mặt PP",
    "costPrice": 26,
    "price": 40,
    "stock": 150
  },
  {
    "id": "203",
    "sku": "VNPIS-0203",
    "name": "CÔNG TY TNHH TIẾP VẬN VÀ VẬN TẢI QUỐC TẾ LONG HOÀNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "B/L: SISL-SE26020048",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "204",
    "sku": "VNPIS-0204",
    "name": "CÔNG TY TNHH TIẾP VẬN VÀ VẬN TẢI QUỐC TẾ LONG HOÀNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí khai hải quan theo số tờ khai 107995607310",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "205",
    "sku": "VNPIS-0205",
    "name": "CÔNG TY TNHH TIẾP VẬN VÀ VẬN TẢI QUỐC TẾ LONG HOÀNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí khai hải quan theo số tờ khai 107983549700",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "206",
    "sku": "VNPIS-0206",
    "name": "CÔNG TY TNHH TIẾP VẬN VÀ VẬN TẢI QUỐC TẾ LONG HOÀNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí khai hải quan theo số tờ khai 107866106350",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "207",
    "sku": "VNPIS-0207",
    "name": "CÔNG TY TNHH TIẾP VẬN VÀ VẬN TẢI QUỐC TẾ LONG HOÀNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "B/L: LHZHCM25120748SH",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "208",
    "sku": "VNPIS-0208",
    "name": "CÔNG TY TNHH TIẾP VẬN VẬN TẢI QUỐC TẾ VÕ LƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ hải quan TK108343875840",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "209",
    "sku": "VNPIS-0209",
    "name": "CÔNG TY TNHH TIẾP VẬN VẬN TẢI QUỐC TẾ VÕ LƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ hải quan TK108273695720",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "210",
    "sku": "VNPIS-0210",
    "name": "CÔNG TY TNHH TIẾP VẬN VẬN TẢI QUỐC TẾ VÕ LƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Cước hàng không",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "211",
    "sku": "VNPIS-0211",
    "name": "CÔNG TY TNHH TIẾP VẬN VẬN TẢI QUỐC TẾ VÕ LƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ hải quan TK: 108166432401",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "212",
    "sku": "VNPIS-0212",
    "name": "CÔNG TY TNHH TIẾP VẬN VẬN TẢI QUỐC TẾ VÕ LƯƠNG",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ hải quan TK: 108125429200",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "213",
    "sku": "VNPIS-0213",
    "name": "CÔNG TY TNHH TỶ PHƯỚC HÙNG NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in NPP",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "214",
    "sku": "VNPIS-0214",
    "name": "CÔNG TY TNHH TỶ PHƯỚC HÙNG NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in UV dùng in trên mọi bề mặt nhựa",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "215",
    "sku": "VNPIS-0215",
    "name": "CÔNG TY TNHH TỶ PHƯỚC HÙNG NAM",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Mực in HENKEY - PLUS dùng in trên mọi bề mặt nhựa ( PP, PE, LD, HD, PET, HDPE..)",
    "costPrice": 1,
    "price": 2,
    "stock": 150
  },
  {
    "id": "216",
    "sku": "VNPIS-0216",
    "name": "CÔNG TY TNHH YOUI VINA",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Phí dịch vụ sửa chữa máy in tampon",
    "costPrice": 0,
    "price": 1,
    "stock": 150
  },
  {
    "id": "217",
    "sku": "VNPIS-0217",
    "name": "Dịch vụ in gia công",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Tờ",
    "costPrice": 1189,
    "price": 1830,
    "stock": 150
  },
  {
    "id": "218",
    "sku": "VNPIS-0218",
    "name": "Dịch vụ in gia công mẫu",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lần",
    "costPrice": 325000,
    "price": 500000,
    "stock": 150
  },
  {
    "id": "219",
    "sku": "VNPIS-0219",
    "name": "Dịch vụ sửa chữa máy in",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lần",
    "costPrice": 1300000,
    "price": 2000000,
    "stock": 150
  },
  {
    "id": "220",
    "sku": "VNPIS-0220",
    "name": "Dịch vụ sửa chữa máy in tampon",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lần",
    "costPrice": 3250000,
    "price": 5000000,
    "stock": 150
  },
  {
    "id": "221",
    "sku": "VNPIS-0221",
    "name": "Mực in công nghiệp IC-2BK124 (825ml)",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Bình",
    "costPrice": 1597050,
    "price": 2457000,
    "stock": 150
  },
  {
    "id": "222",
    "sku": "VNPIS-0222",
    "name": "Mực in công nghiệp IC-2BK124 (825ml) màu đen",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "223",
    "sku": "VNPIS-0223",
    "name": "Mực in công nghiệp K1 màu đen",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lit",
    "costPrice": 1066000,
    "price": 1640000,
    "stock": 150
  },
  {
    "id": "224",
    "sku": "VNPIS-0224",
    "name": "Mực in công nghiệp K1 màu đen",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lít",
    "costPrice": 13,
    "price": 8807254,
    "stock": 150
  },
  {
    "id": "225",
    "sku": "VNPIS-0225",
    "name": "Mực in công nghiệp LINX 1075 (500ml) màu đen",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Chai",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "226",
    "sku": "VNPIS-0226",
    "name": "Mực in công nghiệp T113 màu đen",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lít",
    "costPrice": 10,
    "price": 15216165,
    "stock": 150
  },
  {
    "id": "227",
    "sku": "VNPIS-0227",
    "name": "Phí dịch vụ sửa chữa máy in tampon",
    "category": "Dịch vụ & Sửa chữa",
    "unit": "Lần",
    "costPrice": 3087500,
    "price": 4750000,
    "stock": 150
  },
  {
    "id": "228",
    "sku": "VNPIS-0228",
    "name": "Bóng đèn UV L01635",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1,
    "price": 2300000,
    "stock": 150
  },
  {
    "id": "229",
    "sku": "VNPIS-0229",
    "name": "Bóng đèn UV L03341",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 8079500,
    "price": 12430000,
    "stock": 150
  },
  {
    "id": "230",
    "sku": "VNPIS-0230",
    "name": "Công khắc khuôn in",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 325000,
    "price": 500000,
    "stock": 150
  },
  {
    "id": "231",
    "sku": "VNPIS-0231",
    "name": "Gá sản phẩm làm từ tấm inox dày 0.3mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 227500,
    "price": 350000,
    "stock": 150
  },
  {
    "id": "232",
    "sku": "VNPIS-0232",
    "name": "Inox dày 0.3mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Tấm",
    "costPrice": 227500,
    "price": 350000,
    "stock": 150
  },
  {
    "id": "233",
    "sku": "VNPIS-0233",
    "name": "Khuôn in 100x250x0.3mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 617500,
    "price": 950000,
    "stock": 150
  },
  {
    "id": "234",
    "sku": "VNPIS-0234",
    "name": "Khuôn in-Thick plate bằng thép (100*100*10)mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1130025,
    "price": 1738500,
    "stock": 150
  },
  {
    "id": "235",
    "sku": "VNPIS-0235",
    "name": "NƯỚC RỬA ĐẦU IN EVOCLEAN SOLVANT HLM 3556 - VN",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "236",
    "sku": "VNPIS-0236",
    "name": "Nước vệ sinh đầu in phun dùng cho máy in kỹ thuật số, mã: UCLS01, 1 chai =1lít, mã cas: 7732-18-5",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Lít",
    "costPrice": 5,
    "price": 2419083,
    "stock": 150
  },
  {
    "id": "237",
    "sku": "VNPIS-0237",
    "name": "Tấm lọc khí  đầu  ra Exp - 0173306  75*75*6mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "238",
    "sku": "VNPIS-0238",
    "name": "Tấm lọc khí  đầu vào Coarse filter Fru-exp - 0178612 288*143*11mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "239",
    "sku": "VNPIS-0239",
    "name": "Tấm lọc khí đầu ra (Filter-airprint-Exp) - 0173306",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 185250,
    "price": 285000,
    "stock": 150
  },
  {
    "id": "240",
    "sku": "VNPIS-0240",
    "name": "Tấm lọc khí đầu ra Exp - 0173306",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 306800,
    "price": 472000,
    "stock": 150
  },
  {
    "id": "241",
    "sku": "VNPIS-0241",
    "name": "Tấm lọc khí đầu vào Coarse filter - 0206087",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1546350,
    "price": 2379000,
    "stock": 150
  },
  {
    "id": "242",
    "sku": "VNPIS-0242",
    "name": "Tấm lọc khí đầu vào Coarse filter - 0206087, 165*165*7mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "243",
    "sku": "VNPIS-0243",
    "name": "Tấm lọc khí đầu vào Coarse filter Fru-exp - 0178612",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1635400,
    "price": 2516000,
    "stock": 150
  },
  {
    "id": "244",
    "sku": "VNPIS-0244",
    "name": "Tấm lọc khí đầu vào H13 - 0203750 (Filter - Hepa)",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1823900,
    "price": 2806000,
    "stock": 150
  },
  {
    "id": "245",
    "sku": "VNPIS-0245",
    "name": "Tấm lọc khí đầu vào H13 - 0203750, 181*81*22mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "246",
    "sku": "VNPIS-0246",
    "name": "Vòng gạt mực sứ 100x90x12mm",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1137500,
    "price": 1750000,
    "stock": 150
  },
  {
    "id": "247",
    "sku": "VNPIS-0247",
    "name": "Vải lau 1009LSE",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Gói",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "248",
    "sku": "VNPIS-0248",
    "name": "Vải lau 1009SLE",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Gói",
    "costPrice": 227500,
    "price": 350000,
    "stock": 150
  },
  {
    "id": "249",
    "sku": "VNPIS-0249",
    "name": "Đầu in Ricoh Gen 5",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 1,
    "price": 45000000,
    "stock": 150
  },
  {
    "id": "250",
    "sku": "VNPIS-0250",
    "name": "Đầu in silicone 129-1",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 347750,
    "price": 535000,
    "stock": 150
  },
  {
    "id": "251",
    "sku": "VNPIS-0251",
    "name": "Đầu in silicone 15D-27",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 276250,
    "price": 425000,
    "stock": 150
  },
  {
    "id": "252",
    "sku": "VNPIS-0252",
    "name": "Đầu in silicone 2E-92",
    "category": "Khuôn & Linh kiện xưởng",
    "unit": "Cái",
    "costPrice": 308750,
    "price": 475000,
    "stock": 150
  },
  {
    "id": "253",
    "sku": "VNPIS-0253",
    "name": "Dung dịch làm sạch đầu phun và hệ thống mực in UV",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "254",
    "sku": "VNPIS-0254",
    "name": "Mực in UV màu Trắng (White), mã: NF3134W",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "255",
    "sku": "VNPIS-0255",
    "name": "Mực in UV màu Xanh nhạt (Light Cyan), mã: NF3134LZ",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "256",
    "sku": "VNPIS-0256",
    "name": "Mực in UV màu hồng nhạt (Light Magenta), mã: NF3134J",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "257",
    "sku": "VNPIS-0257",
    "name": "Mực in UV màu hồng sen (Magenta), mã: NF3134B",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "258",
    "sku": "VNPIS-0258",
    "name": "Mực in UV màu phủ bóng varnish, mã: NF3008X",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "259",
    "sku": "VNPIS-0259",
    "name": "Mực in UV màu son bóng (Varnish), mã: NF3134X",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1121250,
    "price": 1725000,
    "stock": 150
  },
  {
    "id": "260",
    "sku": "VNPIS-0260",
    "name": "Mực in UV màu trắng, mã: NF3134W",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "261",
    "sku": "VNPIS-0261",
    "name": "Mực in UV màu vàng (Yellow), mã: NF3134B",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "262",
    "sku": "VNPIS-0262",
    "name": "Mực in UV màu vàng, mã: NF3134Y",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "263",
    "sku": "VNPIS-0263",
    "name": "Mực in UV màu xanh lam (Cyan), mã: NF3134C",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "264",
    "sku": "VNPIS-0264",
    "name": "Mực in UV màu xanh lam, mã: NF3134C",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "265",
    "sku": "VNPIS-0265",
    "name": "Mực in UV màu xanh nhạt, mã: NF3134Z",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "266",
    "sku": "VNPIS-0266",
    "name": "Mực in UV màu đen (Black), mã: NF3134B",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 1179750,
    "price": 1815000,
    "stock": 150
  },
  {
    "id": "267",
    "sku": "VNPIS-0267",
    "name": "Mực in UV màu đen, mã: NF3134B",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "268",
    "sku": "VNPIS-0268",
    "name": "Mực in UV màu đỏ cờ, mã: NF3134M",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "269",
    "sku": "VNPIS-0269",
    "name": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 5070000,
    "price": 7800000,
    "stock": 150
  },
  {
    "id": "270",
    "sku": "VNPIS-0270",
    "name": "Mực in màu đen, dùng cho máy in kỹ thuật số, mã: UCDR15K, 1 chai = 1 lít, mã cas:  7732-18-5, 111-46-6",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Lít",
    "costPrice": 30,
    "price": 39502646,
    "stock": 150
  },
  {
    "id": "271",
    "sku": "VNPIS-0271",
    "name": "Đèn sấy UV",
    "category": "Mực in Kỹ thuật số & UV",
    "unit": "Cái",
    "costPrice": 1,
    "price": 2500000,
    "stock": 150
  },
  {
    "id": "272",
    "sku": "VNPIS-0272",
    "name": "Bộ truyền và đảo bản gốc tự động DF-628",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "273",
    "sku": "VNPIS-0273",
    "name": "Chân gỗ màu đen",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "274",
    "sku": "VNPIS-0274",
    "name": "Cốc mực 135 x 126 mm",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "275",
    "sku": "VNPIS-0275",
    "name": "In 3D mẫu linh kiện",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 1,
    "price": 350000,
    "stock": 150
  },
  {
    "id": "276",
    "sku": "VNPIS-0276",
    "name": "Máy in tampon 1 màu, cốc mực, dùng khí nén + điện, model: SE-125A",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 3,
    "price": 32878484,
    "stock": 150
  },
  {
    "id": "277",
    "sku": "VNPIS-0277",
    "name": "Máy in tampon 1 màu, cốc mực, model: SE-125B",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 3,
    "price": 59413848,
    "stock": 150
  },
  {
    "id": "278",
    "sku": "VNPIS-0278",
    "name": "Máy photocopy đa chức năng Konica Minolta bizhub 367",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "279",
    "sku": "VNPIS-0279",
    "name": "MỰC IN MONO-PAD VERMILION 840",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 1007500,
    "price": 1550000,
    "stock": 150
  },
  {
    "id": "280",
    "sku": "VNPIS-0280",
    "name": "Mực in EC 100",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 617500,
    "price": 950000,
    "stock": 150
  },
  {
    "id": "281",
    "sku": "VNPIS-0281",
    "name": "Mực in EC 42",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 812500,
    "price": 1250000,
    "stock": 150
  },
  {
    "id": "282",
    "sku": "VNPIS-0282",
    "name": "Mực in EC 60",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 614250,
    "price": 945000,
    "stock": 150
  },
  {
    "id": "283",
    "sku": "VNPIS-0283",
    "name": "Mực in EC 91",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 812500,
    "price": 1250000,
    "stock": 150
  },
  {
    "id": "284",
    "sku": "VNPIS-0284",
    "name": "Mực in EC51",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 614250,
    "price": 945000,
    "stock": 150
  },
  {
    "id": "285",
    "sku": "VNPIS-0285",
    "name": "Mực in Evojet BLack E9000",
    "category": "Mực in Tampon & Lụa",
    "unit": "Lít",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "286",
    "sku": "VNPIS-0286",
    "name": "Mực in NPP",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 568750,
    "price": 875000,
    "stock": 150
  },
  {
    "id": "287",
    "sku": "VNPIS-0287",
    "name": "Mực in NPP 26",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 581750,
    "price": 895000,
    "stock": 150
  },
  {
    "id": "288",
    "sku": "VNPIS-0288",
    "name": "Mực in NPP 33",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 572000,
    "price": 880000,
    "stock": 150
  },
  {
    "id": "289",
    "sku": "VNPIS-0289",
    "name": "Mực in NPP trắng maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 568750,
    "price": 875000,
    "stock": 150
  },
  {
    "id": "290",
    "sku": "VNPIS-0290",
    "name": "Mực in NPP vàng maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 614250,
    "price": 945000,
    "stock": 150
  },
  {
    "id": "291",
    "sku": "VNPIS-0291",
    "name": "Mực in NPP vàng maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Lít",
    "costPrice": 614250,
    "price": 945000,
    "stock": 150
  },
  {
    "id": "292",
    "sku": "VNPIS-0292",
    "name": "Mực in NPP xanh blue maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 812500,
    "price": 1250000,
    "stock": 150
  },
  {
    "id": "293",
    "sku": "VNPIS-0293",
    "name": "Mực in NPP xám maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 812500,
    "price": 1250000,
    "stock": 150
  },
  {
    "id": "294",
    "sku": "VNPIS-0294",
    "name": "Mực in NPP đen maxx surface",
    "category": "Mực in Tampon & Lụa",
    "unit": "Kg",
    "costPrice": 568750,
    "price": 875000,
    "stock": 150
  },
  {
    "id": "295",
    "sku": "VNPIS-0295",
    "name": "Mực in SPU 91/1",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 877500,
    "price": 1350000,
    "stock": 150
  },
  {
    "id": "296",
    "sku": "VNPIS-0296",
    "name": "Mực in TN323",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 0,
    "price": 0,
    "stock": 150
  },
  {
    "id": "297",
    "sku": "VNPIS-0297",
    "name": "Nhôm thanh",
    "category": "Mực in Tampon & Lụa",
    "unit": "kg",
    "costPrice": 14,
    "price": 1391750,
    "stock": 150
  },
  {
    "id": "298",
    "sku": "VNPIS-0298",
    "name": "PhỤ kiện hệ thống CTX1",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 1,
    "price": 12000000,
    "stock": 150
  },
  {
    "id": "299",
    "sku": "VNPIS-0299",
    "name": "SẢN PHẨM HÓA CHẤT - METHYL ETHYL KETONE (MEK)",
    "category": "Mực in Tampon & Lụa",
    "unit": "Lít",
    "costPrice": 13,
    "price": 2080000,
    "stock": 150
  },
  {
    "id": "300",
    "sku": "VNPIS-0300",
    "name": "Tủ Server Điều khiển",
    "category": "Mực in Tampon & Lụa",
    "unit": "Cái",
    "costPrice": 1,
    "price": 75000000,
    "stock": 150
  }
];

const DEFAULT_CUSTOMERS: Customer[] = [
  {
    "id": "1",
    "code": "KH0001",
    "name": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "phone": "Đường số 10, KCN Long Thành, Xã An Phước, Thành Phố Đồng Nai, Việt Nam",
    "email": "khachhang1@vnpis.com",
    "companyName": "CÔNG TY TNHH ILJIN AUTRA VIỆT NAM",
    "shippingAddress": "3603263974",
    "points": 35,
    "totalSpent": 2500000
  },
  {
    "id": "2",
    "code": "KH0002",
    "name": "CÔNG TY CỔ PHẦN ỨNG DỤNG BẢN ĐỒ VIỆT",
    "phone": "03 Trần Nhân Tôn, Phường An Đông, TP Hồ Chí Minh",
    "email": "khachhang2@vnpis.com",
    "companyName": "CÔNG TY CỔ PHẦN ỨNG DỤNG BẢN ĐỒ VIỆT",
    "shippingAddress": "0304729926",
    "points": 70,
    "totalSpent": 5000000
  },
  {
    "id": "3",
    "code": "KH0003",
    "name": "CÔNG TY TNHH POWER BEST (VIỆT NAM)",
    "phone": "Số 25 VSIP II-A đường số 26, khu công nghiệp Việt Nam-Singap, Phường Vĩnh Tân, TP Hồ Chí Minh",
    "email": "khachhang3@vnpis.com",
    "companyName": "CÔNG TY TNHH POWER BEST (VIỆT NAM)",
    "shippingAddress": "3702324723",
    "points": 105,
    "totalSpent": 7500000
  },
  {
    "id": "4",
    "code": "KH0004",
    "name": "CHI NHÁNH TỔNG CÔNG TY LIKSIN - XÍ NGHIỆP IN BAO BÌ GIẤY LIKSIN",
    "phone": "Lô 16-18, Đường số 1, Khu công nghiệp Tân Đức, Xã Đức Hòa, Tây Ninh",
    "email": "khachhang4@vnpis.com",
    "companyName": "CHI NHÁNH TỔNG CÔNG TY LIKSIN - XÍ NGHIỆP IN BAO BÌ GIẤY LIKSIN",
    "shippingAddress": "0301441600-009",
    "points": 140,
    "totalSpent": 10000000
  },
  {
    "id": "5",
    "code": "KH0005",
    "name": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI SHINSUNG",
    "phone": "336/4  - 336/6 đường Hồ Văng Tắng, Ấp 6, Xã Phú Hòa Đông, TP Hồ Chí Minh",
    "email": "khachhang5@vnpis.com",
    "companyName": "pece7177@gmail.com",
    "shippingAddress": "0315256291",
    "points": 175,
    "totalSpent": 12500000
  },
  {
    "id": "6",
    "code": "KH0006",
    "name": "CÔNG TY TNHH CÔNG NGHIỆP NHỰA TINH DIỆU VIỆT NAM",
    "phone": "Tầng 17, Toà nhà Becamex,   230 Đại  Lộ Bình Dương, Phường Phú Lợi, TP Hồ Chí Minh",
    "email": "khachhang6@vnpis.com",
    "companyName": "tinhdieuvn01@gmail.com",
    "shippingAddress": "3703331642",
    "points": 210,
    "totalSpent": 15000000
  },
  {
    "id": "7",
    "code": "KH0007",
    "name": "HỘ KINH DOANH CHU ANH DŨNG",
    "phone": "Số 50 ngõ 497 Âu Cơ, Phường Tây Hồ, TP Hà Nội",
    "email": "khachhang7@vnpis.com",
    "companyName": "a.dung1991@gmail.com",
    "shippingAddress": "001091041656",
    "points": 245,
    "totalSpent": 17500000
  },
  {
    "id": "8",
    "code": "KH0008",
    "name": "CÔNG TY TNHH JITONG PRECISION HARDWARE VIỆT NAM",
    "phone": "62/17 Đường ĐX13, Tổ 36, Khu 07, Phường Bình Dương, TP Hồ Chí Minh",
    "email": "khachhang8@vnpis.com",
    "companyName": "phuongtruc5793@gmail.com",
    "shippingAddress": "3703134355",
    "points": 280,
    "totalSpent": 20000000
  },
  {
    "id": "9",
    "code": "KH0009",
    "name": "CÔNG TY TNHH SILICONE CAO GIA",
    "phone": "Số 120/5 Đường 59, Phường An Hội Tây, TP Hồ Chí Minh",
    "email": "khachhang9@vnpis.com",
    "companyName": "CÔNG TY TNHH SILICONE CAO GIA",
    "shippingAddress": "0318099336",
    "points": 315,
    "totalSpent": 22500000
  },
  {
    "id": "10",
    "code": "KH0010",
    "name": "CÔNG TY CỔ PHẦN SOLOMON PARAGON VIỆT NAM",
    "phone": "Đường số 5, KCN Long Khánh, Phường Bình Lộc, Đồng Nai",
    "email": "khachhang10@vnpis.com",
    "companyName": "mhsourcing001@dg-mingzhen.com",
    "shippingAddress": "3603397720",
    "points": 350,
    "totalSpent": 25000000
  },
  {
    "id": "11",
    "code": "KH0011",
    "name": "CÔNG TY TNHH CÔNG NGHỆ CÔNG NGHIỆP WO JIN VIỆT NAM",
    "phone": "Số 18, Đường DT 747, Khu phố Khánh Lộc, Phường Tân Hiệp, TP Hồ Chí Minh",
    "email": "khachhang11@vnpis.com",
    "companyName": "wojinvn@gmail.com",
    "shippingAddress": "3703247380",
    "points": 385,
    "totalSpent": 27500000
  },
  {
    "id": "12",
    "code": "KH0012",
    "name": "CHI NHÁNH CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ TRI - VIET",
    "phone": "Thửa đất số 321, tờ bản đồ số 9, tổ 3, ấp Tân Phước, Xã Tân Quới, Vĩnh Long",
    "email": "khachhang12@vnpis.com",
    "companyName": "purchasing_tv@tri-viet.com.vn",
    "shippingAddress": "1800631013-001",
    "points": 420,
    "totalSpent": 30000000
  },
  {
    "id": "13",
    "code": "KH0013",
    "name": "CÔNG TY TNHH SẢN XUẤT KIM THIẾT",
    "phone": "373 Đường Lê Đình Chi, Ấp 3, Xã Bình Lợi, TP Hồ Chí Minh",
    "email": "khachhang13@vnpis.com",
    "companyName": "CÔNG TY TNHH SẢN XUẤT KIM THIẾT",
    "shippingAddress": "0315415777",
    "points": 455,
    "totalSpent": 32500000
  },
  {
    "id": "14",
    "code": "KH0014",
    "name": "CÔNG TY TNHH OKIA OPTICAL VIỆT NAM",
    "phone": "Lô D10 và D11, đường số 15, Khu công nghiệp Thuận Đạo mở rộng, Xã Long Cang, Tây Ninh",
    "email": "khachhang14@vnpis.com",
    "companyName": "pur_ovn@okia.com, lan.nguyentu.pur.ovn@okia.com",
    "shippingAddress": "1101946123",
    "points": 490,
    "totalSpent": 35000000
  },
  {
    "id": "15",
    "code": "KH0015",
    "name": "CÔNG TY TNHH BAO BÌ MM VIDON",
    "phone": "Số 15 đường N3, Khu công nghiệp Sóng Thần 3, Khu 1, Phường Bình Dương, TP Hồ Chí Minh",
    "email": "khachhang15@vnpis.com",
    "companyName": "Nguyen.NguyenKim@mm.group",
    "shippingAddress": "3702185082",
    "points": 525,
    "totalSpent": 37500000
  },
  {
    "id": "16",
    "code": "KH0016",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT BNG",
    "phone": "80/12 đường TX43, Khu Phố 25, Phường Thới An, TP Hồ Chí Minh",
    "email": "khachhang16@vnpis.com",
    "companyName": "ledinhbangoc@gmail.com",
    "shippingAddress": "0319067778",
    "points": 560,
    "totalSpent": 40000000
  },
  {
    "id": "17",
    "code": "KH0017",
    "name": "CÔNG TY TNHH NATCO (VIỆT NAM)",
    "phone": "Số 30 Đại Lộ Độc Lập, Khu công nghiệp Việt Nam-Singapore, Phường Bình Hòa , TP Hồ Chí Minh",
    "email": "khachhang17@vnpis.com",
    "companyName": "merry.tran@natcoglobal.com",
    "shippingAddress": "3702506346",
    "points": 595,
    "totalSpent": 42500000
  },
  {
    "id": "18",
    "code": "KH0018",
    "name": "CHI NHÁNH CÔNG TY CỔ PHẦN KỸ THUẬT SỐ SBC",
    "phone": "919/24 Hương Lộ 2, Khu phố 8, Phường Bình Trị Đông, TP Hồ Chí Minh",
    "email": "khachhang18@vnpis.com",
    "companyName": "ketoanthuehcm01@sbcvietnam.com",
    "shippingAddress": "0107161377-001",
    "points": 630,
    "totalSpent": 45000000
  },
  {
    "id": "19",
    "code": "KH0019",
    "name": "CÔNG TY TRÁCH NHIỆM HỮU HẠN MISAN VINA",
    "phone": "Nhà xưởng A1-5.F1, Lô A, Đường Số D3, KCN Nhơn Trạch II- Lộc Khang, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "email": "khachhang19@vnpis.com",
    "companyName": "purchasing@peri-technology.com",
    "shippingAddress": "0315269847",
    "points": 665,
    "totalSpent": 47500000
  },
  {
    "id": "20",
    "code": "KH0020",
    "name": "CÔNG TY TNHH THƯƠNG MẠI GMK",
    "phone": "548 Đường 3/2, Phường Diên Hồng, TP Hồ Chí Minh",
    "email": "khachhang20@vnpis.com",
    "companyName": "gmkhoadon@gmail.com",
    "shippingAddress": "0313377646",
    "points": 700,
    "totalSpent": 50000000
  },
  {
    "id": "21",
    "code": "KH0021",
    "name": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ BÌNH UYÊN",
    "phone": "Số 6 Đường 28A, KP6, Phường Phước Long B, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    "email": "khachhang21@vnpis.com",
    "companyName": "binhuyencompany@gmail.com",
    "shippingAddress": "0318128876",
    "points": 735,
    "totalSpent": 52500000
  }
];

const DEFAULT_ORDERS: Order[] = [
  {
    id: 'HD100001',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    customerId: '1',
    customerName: 'Anh Nguyễn Văn An',
    companyName: 'Công Ty TNHH In Ấn VNPIS',
    shippingAddress: '18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP.HCM',
    items: [
      { productId: '1', sku: 'IN0001', name: 'In Danh Thiếp / Namecard (Hộp 100 cái)', price: 50000, qty: 2, subtotal: 100000 }
    ],
    subtotal: 100000,
    discount: 10000,
    grandTotal: 90000,
    paymentMethod: 'CASH',
    cashGiven: 100000,
    cashChange: 10000,
    status: 'COMPLETED'
  }
];

const DEFAULT_EXPENSES: ExpenseRecord[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], title: 'Mua giấy in Couche 250gsm', category: 'Vật tư xưởng in', amount: 3500000, note: 'Nhập 10 ream giấy từ nhà cung cấp A' },
  { id: '2', date: new Date().toISOString().split('T')[0], title: 'Chi phí tiền điện xưởng tháng này', category: 'Vận hành xưởng', amount: 1800000, note: 'Thanh toán tiền điện máy in KTS & Tampone' }
];

const DEFAULT_EMPLOYEES: Employee[] = [
  { id: '1', code: 'NV0001', name: 'Trần Văn Kỹ Thuyết', position: 'Kỹ thuật viên In Lụa & Tampon', phone: '0901234567', salary: 10000000, allowance: 1000000, status: 'ACTIVE' },
  { id: '2', code: 'NV0002', name: 'Lê Thị Thu Thảo', position: 'Nhân viên Thiết kế & POS', phone: '0938888999', salary: 9000000, allowance: 500000, status: 'ACTIVE' }
];

export default function KiotLitePosPage() {
  // Auth State
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // State 8 Tabs (thêm Accounting & HR)
  const [activeTab, setActiveTab] = useState<'pos' | 'dashboard' | 'products' | 'orders' | 'customers' | 'accounting' | 'hr' | 'reports'>('pos');

  // Core Data States
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [expenses, setExpenses] = useState<ExpenseRecord[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  // POS State
  const [posSearch, setPosSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<'CASH' | 'BANK'>('CASH');
  const [cashGiven, setCashGiven] = useState<string>('');

  // Modals State
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<Order | null>(null);

  // Form Inputs
  const [prodSku, setProdSku] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState('');
  const [prodUnit, setProdUnit] = useState('');
  const [prodCostPrice, setProdCostPrice] = useState<number>(0);
  const [prodPrice, setProdPrice] = useState<number>(0);
  const [prodStock, setProdStock] = useState<number>(10);

  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custCompany, setCustCompany] = useState('');
  const [custAddress, setCustAddress] = useState('');

  const [expTitle, setExpTitle] = useState('');
  const [expCat, setExpCat] = useState('Vật tư xưởng in');
  const [expAmount, setExpAmount] = useState<number>(0);
  const [expNote, setExpNote] = useState('');

  const [empName, setEmpName] = useState('');
  const [empPos, setEmpPos] = useState('');
  const [empPhone, setEmpPhone] = useState('');
  const [empSalary, setEmpSalary] = useState<number>(0);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load Session & Initial Data
  useEffect(() => {
    const savedUser = localStorage.getItem('vnpis_pos_user');
    if (savedUser) {
      try {
        const u = JSON.parse(savedUser);
        if (u && (u.role === 'CEO' || u.role === 'QUANLY_XUONG')) {
          setCurrentUser(u);
        } else {
          localStorage.removeItem('vnpis_pos_user');
        }
      } catch (e) {
        localStorage.removeItem('vnpis_pos_user');
      }
    }

    const savedProducts = localStorage.getItem('kiotlite_products');
    const savedCustomers = localStorage.getItem('kiotlite_customers');
    const savedOrders = localStorage.getItem('kiotlite_orders');
    const savedExpenses = localStorage.getItem('kiotlite_expenses');
    const savedEmployees = localStorage.getItem('kiotlite_employees');

    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      if (parsed.length < DEFAULT_PRODUCTS.length) {
        setProducts(DEFAULT_PRODUCTS);
        localStorage.setItem('kiotlite_products', JSON.stringify(DEFAULT_PRODUCTS));
      } else {
        setProducts(parsed);
      }
    } else {
      setProducts(DEFAULT_PRODUCTS);
      localStorage.setItem('kiotlite_products', JSON.stringify(DEFAULT_PRODUCTS));
    }

    if (savedCustomers) {
      const parsedCust = JSON.parse(savedCustomers);
      if (parsedCust.length < DEFAULT_CUSTOMERS.length) {
        setCustomers(DEFAULT_CUSTOMERS);
        localStorage.setItem('kiotlite_customers', JSON.stringify(DEFAULT_CUSTOMERS));
      } else {
        setCustomers(parsedCust);
      }
    } else {
      setCustomers(DEFAULT_CUSTOMERS);
      localStorage.setItem('kiotlite_customers', JSON.stringify(DEFAULT_CUSTOMERS));
    }

    if (savedOrders) setOrders(JSON.parse(savedOrders));
    else { setOrders(DEFAULT_ORDERS); localStorage.setItem('kiotlite_orders', JSON.stringify(DEFAULT_ORDERS)); }

    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
    else { setExpenses(DEFAULT_EXPENSES); localStorage.setItem('kiotlite_expenses', JSON.stringify(DEFAULT_EXPENSES)); }

    if (savedEmployees) setEmployees(JSON.parse(savedEmployees));
    else { setEmployees(DEFAULT_EMPLOYEES); localStorage.setItem('kiotlite_employees', JSON.stringify(DEFAULT_EMPLOYEES)); }
  }, []);

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const account = VALID_ACCOUNTS[loginUsername.trim().toLowerCase()];
    if (account && account.pass === loginPassword) {
      const userObj: UserAccount = {
        username: loginUsername.trim().toLowerCase(),
        role: account.role,
        name: account.name
      };
      setCurrentUser(userObj);
      localStorage.setItem('vnpis_pos_user', JSON.stringify(userObj));
      setLoginError('');
      setLoginPassword('');
    } else {
      setLoginError('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  // Logout Handler
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('vnpis_pos_user');
  };

  // Keyboard Shortcuts (F2: Search, F9: Checkout)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentUser) return;
      if (e.key === 'F2') {
        e.preventDefault();
        setActiveTab('pos');
        setTimeout(() => searchInputRef.current?.focus(), 100);
      } else if (e.key === 'F9') {
        e.preventDefault();
        if (activeTab === 'pos' && cart.length > 0) {
          handleCompleteCheckout();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentUser, activeTab, cart, discount, selectedCustomer, paymentMethod, cashGiven, products, customers, orders]);

  // Categories list
  const categories = useMemo(() => {
    const setCat = new Set<string>();
    products.forEach(p => { if (p.category) setCat.add(p.category); });
    return Array.from(setCat);
  }, [products]);

  // Filtered Products for POS
  const filteredPosProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(posSearch.toLowerCase()) || p.sku.toLowerCase().includes(posSearch.toLowerCase());
      const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [products, posSearch, selectedCategory]);

  // Cart Calculations
  const cartSubtotal = useMemo(() => cart.reduce((sum, item) => sum + item.subtotal, 0), [cart]);
  const cartGrandTotal = useMemo(() => Math.max(0, cartSubtotal - discount), [cartSubtotal, discount]);
  const cashChangeReturn = useMemo(() => {
    const numGiven = parseFloat(cashGiven) || 0;
    return Math.max(0, numGiven - cartGrandTotal);
  }, [cashGiven, cartGrandTotal]);

  // POS Handlers
  const handleAddToCart = (product: Product) => {
    if (product.stock <= 0) {
      alert('Sản phẩm đã hết hàng!');
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.productId === product.id);
      if (existing) {
        if (existing.qty >= product.stock) {
          alert(`Chỉ còn ${product.stock} ${product.unit} trong kho!`);
          return prev;
        }
        return prev.map(item => item.productId === product.id ? { ...item, qty: item.qty + 1, subtotal: (item.qty + 1) * item.price } : item);
      } else {
        return [...prev, { productId: product.id, sku: product.sku, name: product.name, price: product.price, qty: 1, subtotal: product.price }];
      }
    });
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    const prod = products.find(p => p.id === productId);
    setCart(prev => {
      return prev.map(item => {
        if (item.productId === productId) {
          const newQty = item.qty + delta;
          if (newQty <= 0) return null;
          if (prod && newQty > prod.stock) {
            alert(`Tồn kho chỉ còn ${prod.stock}`);
            return item;
          }
          return { ...item, qty: newQty, subtotal: newQty * item.price };
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const handleCompleteCheckout = () => {
    if (cart.length === 0) {
      alert('Giỏ hàng đang trống!');
      return;
    }

    const customerObj = customers.find(c => c.id === selectedCustomer);
    const newOrder: Order = {
      id: 'HD' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      customerId: selectedCustomer,
      customerName: customerObj ? customerObj.name : 'Khách hàng lẻ',
      companyName: customerObj?.companyName,
      shippingAddress: customerObj?.shippingAddress,
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discount,
      grandTotal: cartGrandTotal,
      paymentMethod: paymentMethod,
      cashGiven: parseFloat(cashGiven) || cartGrandTotal,
      cashChange: cashChangeReturn,
      status: 'COMPLETED'
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem('kiotlite_orders', JSON.stringify(updatedOrders));

    const updatedProducts = products.map(p => {
      const cartItem = cart.find(ci => ci.productId === p.id);
      if (cartItem) {
        return { ...p, stock: Math.max(0, p.stock - cartItem.qty) };
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem('kiotlite_products', JSON.stringify(updatedProducts));

    if (selectedCustomer) {
      const updatedCustomers = customers.map(c => {
        if (c.id === selectedCustomer) {
          return {
            ...c,
            totalSpent: (c.totalSpent || 0) + cartGrandTotal,
            points: (c.points || 0) + Math.floor(cartGrandTotal / 10000)
          };
        }
        return c;
      });
      setCustomers(updatedCustomers);
      localStorage.setItem('kiotlite_customers', JSON.stringify(updatedCustomers));
    }

    setSelectedReceiptOrder(newOrder);
    setCart([]);
    setDiscount(0);
    setCashGiven('');
    setSelectedCustomer('');
  };

  // Save / Edit Product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      const updated = products.map(p => p.id === editingProduct.id ? {
        ...p,
        sku: prodSku,
        name: prodName,
        category: prodCategory,
        unit: prodUnit,
        costPrice: prodCostPrice,
        price: prodPrice,
        stock: prodStock
      } : p);
      setProducts(updated);
      localStorage.setItem('kiotlite_products', JSON.stringify(updated));
    } else {
      const newProd: Product = {
        id: Date.now().toString(),
        sku: prodSku || 'SP' + Math.floor(1000 + Math.random() * 9000),
        name: prodName,
        category: prodCategory || 'Khác',
        unit: prodUnit || 'Cái',
        costPrice: prodCostPrice,
        price: prodPrice,
        stock: prodStock
      };
      const updated = [newProd, ...products];
      setProducts(updated);
      localStorage.setItem('kiotlite_products', JSON.stringify(updated));
    }
    setShowProductModal(false);
  };

  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProdSku('IN' + Math.floor(1000 + Math.random() * 9000));
    setProdName('');
    setProdCategory('');
    setProdUnit('Hộp');
    setProdCostPrice(0);
    setProdPrice(0);
    setProdStock(10);
    setShowProductModal(true);
  };

  const handleOpenEditProduct = (prod: Product) => {
    setEditingProduct(prod);
    setProdSku(prod.sku);
    setProdName(prod.name);
    setProdCategory(prod.category);
    setProdUnit(prod.unit);
    setProdCostPrice(prod.costPrice);
    setProdPrice(prod.price);
    setProdStock(prod.stock);
    setShowProductModal(true);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('kiotlite_products', JSON.stringify(updated));
    }
  };

  // Save Customer
  const handleSaveCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    const newCust: Customer = {
      id: Date.now().toString(),
      code: 'KH' + Math.floor(1000 + Math.random() * 9000),
      name: custName,
      phone: custPhone,
      email: custEmail,
      companyName: custCompany,
      shippingAddress: custAddress,
      points: 0,
      totalSpent: 0
    };
    const updated = [newCust, ...customers];
    setCustomers(updated);
    localStorage.setItem('kiotlite_customers', JSON.stringify(updated));
    setShowCustomerModal(false);
    setCustName(''); setCustPhone(''); setCustEmail(''); setCustCompany(''); setCustAddress('');
  };

  // Save Expense
  const handleSaveExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const newExp: ExpenseRecord = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      title: expTitle,
      category: expCat,
      amount: expAmount,
      note: expNote
    };
    const updated = [newExp, ...expenses];
    setExpenses(updated);
    localStorage.setItem('kiotlite_expenses', JSON.stringify(updated));
    setShowExpenseModal(false);
    setExpTitle(''); setExpAmount(0); setExpNote('');
  };

  // Save Employee
  const handleSaveEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmp: Employee = {
      id: Date.now().toString(),
      code: 'NV' + Math.floor(1000 + Math.random() * 9000),
      name: empName,
      position: empPos,
      phone: empPhone,
      salary: empSalary,
      allowance: 0,
      status: 'ACTIVE'
    };
    const updated = [newEmp, ...employees];
    setEmployees(updated);
    localStorage.setItem('kiotlite_employees', JSON.stringify(updated));
    setShowEmployeeModal(false);
    setEmpName(''); setEmpPos(''); setEmpPhone(''); setEmpSalary(0);
  };

  // Dashboard & Financial Stats
  const todayRev = useMemo(() => {
    const todayStr = new Date().toDateString();
    return orders
      .filter(o => new Date(o.createdAt).toDateString() === todayStr)
      .reduce((sum, o) => sum + o.grandTotal, 0);
  }, [orders]);

  const monthRev = useMemo(() => {
    const now = new Date();
    return orders
      .filter(o => {
        const d = new Date(o.createdAt);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((sum, o) => sum + o.grandTotal, 0);
  }, [orders]);

  const totalExpenseAmount = useMemo(() => expenses.reduce((sum, e) => sum + e.amount, 0), [expenses]);
  const totalSalaryAmount = useMemo(() => employees.reduce((sum, e) => sum + e.salary + (e.allowance || 0), 0), [employees]);
  const netProfitMonth = useMemo(() => monthRev - totalExpenseAmount, [monthRev, totalExpenseAmount]);

  const lowStockCount = useMemo(() => products.filter(p => p.stock <= 5).length, [products]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
  };

  // --- RENDER LOGIN LOCK SCREEN IF NOT AUTHENTICATED ---
  if (!currentUser) {
    return (
      <div className="min-h-screen w-full bg-slate-100 text-slate-800 flex items-center justify-center p-4">
        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">VNPIS POS Internal</h1>
            <p className="text-xs text-slate-500">Đăng nhập 2 cấp hệ thống: CEO & Quản Lý Xưởng In</p>
          </div>

          {loginError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs p-3 rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tài khoản đăng nhập</label>
              <input
                type="text"
                required
                placeholder="giamdoc hoặc quanly"
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mật khẩu</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Đăng Nhập Hệ Thống
            </button>
          </form>

          <div className="border-t border-slate-100 pt-4 text-center">
            <span className="text-[11px] text-slate-400">VNPIS Solutions • Bảo mật nội bộ</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 text-slate-800 font-sans">
      {/* SIDEBAR NAVIGATION - LIGHT THEME */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20 shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-base text-slate-900 leading-tight">VNPIS POS</h2>
            <span className="text-xs text-slate-500">Quản Lý Xưởng In</span>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <button
            onClick={() => setActiveTab('pos')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'pos' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Màn Hình POS (F2)</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Tổng Quan</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'products' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Sản Phẩm & Kho In</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'orders' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>Đơn Hàng</span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'customers' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Khách Hàng</span>
          </button>

          <button
            onClick={() => setActiveTab('accounting')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'accounting' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Kế Toán & Chi Phí</span>
          </button>

          <button
            onClick={() => setActiveTab('hr')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'hr' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Nhân Sự Xưởng In</span>
          </button>

          {currentUser.role === 'CEO' && (
            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'reports' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Báo Cáo CEO</span>
            </button>
          )}
        </nav>

        <div className="p-3 border-t border-slate-200 bg-slate-50 flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shadow-inner">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</div>
              <div className="text-[10px] text-blue-600 font-bold">{currentUser.role === 'CEO' ? 'Giám Đốc (CEO)' : 'Quản Lý Xưởng'}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full mt-1 flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            <LogOut className="w-4 h-4" /> Đăng Xuất (Đổi Tài Khoản)
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-100">
        {/* TOPBAR HEADER */}
        <header className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div>
            <h1 className="text-lg font-bold text-slate-900">
              {activeTab === 'pos' && 'Màn Hình Bán Hàng (POS)'}
              {activeTab === 'dashboard' && 'Tổng Quan Xưởng In VNPIS'}
              {activeTab === 'products' && 'Quản Lý Sản Phẩm & Kho In'}
              {activeTab === 'orders' && 'Lịch Sử Đơn Hàng'}
              {activeTab === 'customers' && 'Quản Lý Khách Hàng (Công Ty & Địa Chỉ)'}
              {activeTab === 'accounting' && 'Kế Toán & Thu Chi Xưởng In'}
              {activeTab === 'hr' && 'Quản Lý Nhân Sự & Lương Xưởng In'}
              {activeTab === 'reports' && 'Báo Cáo Doanh Thu Bán Hàng (CEO)'}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs flex items-center gap-2">
              <span className="text-slate-600 font-medium">Doanh thu hôm nay:</span>
              <strong className="text-emerald-700 text-sm font-bold">{formatCurrency(todayRev)}</strong>
            </div>

            <button
              onClick={handleOpenAddProduct}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" /> Thêm Sản Phẩm
            </button>
          </div>
        </header>

        {/* CONTENT BODY */}
        <div className="flex-1 overflow-auto p-4">
          {/* TAB 1: POS SCREEN */}
          {activeTab === 'pos' && (
            <div className="h-full flex gap-4">
              {/* Product Selector Left Column */}
              <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-sm">
                {/* Search & Category filter */}
                <div className="space-y-3 mb-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Tìm sản phẩm theo tên hoặc mã SKU (F2)..."
                      value={posSearch}
                      onChange={(e) => setPosSearch(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('ALL')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === 'ALL' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Tất cả
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          selectedCategory === cat ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Grid */}
                <div className="flex-1 overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pr-1">
                  {filteredPosProducts.map(p => (
                    <div
                      key={p.id}
                      onClick={() => handleAddToCart(p)}
                      className="bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 p-3 rounded-xl flex flex-col justify-between cursor-pointer transition-all group shadow-sm hover:shadow"
                    >
                      <div>
                        <div className="text-xs text-blue-600 font-mono font-semibold mb-1">{p.sku}</div>
                        <h4 className="font-bold text-slate-800 text-sm line-clamp-2 mb-2 group-hover:text-blue-600">{p.name}</h4>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-2">
                        <span className="text-xs text-slate-500">Kho: <strong className={p.stock <= 5 ? 'text-amber-600' : 'text-slate-700'}>{p.stock}</strong></span>
                        <strong className="text-emerald-600 text-sm font-bold">{formatCurrency(p.price)}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart & Checkout Right Column */}
              <div className="w-96 bg-white border border-slate-200 rounded-xl flex flex-col p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base">
                    <ShoppingCart className="w-5 h-5 text-blue-600" /> Giỏ Hàng
                  </h3>
                  {cart.length > 0 && (
                    <button
                      onClick={() => setCart([])}
                      className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Đặt lại
                    </button>
                  )}
                </div>

                {/* Customer Select */}
                <div className="flex gap-2 mb-3">
                  <select
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Khách hàng lẻ (Khách vô danh)</option>
                    {customers.map(c => (
                      <option key={c.id} value={c.id}>{c.name} {c.companyName ? `(${c.companyName})` : ''}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowCustomerModal(true)}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                    title="Thêm khách mới"
                  >
                    <UserPlus className="w-4 h-4" />
                  </button>
                </div>

                {/* Cart Items Table */}
                <div className="flex-1 overflow-y-auto space-y-2 pr-1 mb-3">
                  {cart.map(item => (
                    <div key={item.productId} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-800 truncate">{item.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{formatCurrency(item.price)}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-slate-300 rounded bg-white">
                          <button
                            onClick={() => handleUpdateCartQty(item.productId, -1)}
                            className="px-2 py-0.5 text-xs hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-bold text-slate-900">{item.qty}</span>
                          <button
                            onClick={() => handleUpdateCartQty(item.productId, 1)}
                            className="px-2 py-0.5 text-xs hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 w-20 text-right">{formatCurrency(item.subtotal)}</span>
                        <button
                          onClick={() => handleRemoveCartItem(item.productId)}
                          className="text-slate-400 hover:text-rose-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {cart.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                      <ShoppingCart className="w-12 h-12 stroke-1 mb-2 opacity-40" />
                      <p className="text-sm font-medium">Giỏ hàng đang trống</p>
                      <small className="text-xs text-slate-400">Chọn sản phẩm bên trái để bắt đầu</small>
                    </div>
                  )}
                </div>

                {/* Checkout Summary */}
                <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Tổng tiền hàng ({cart.reduce((sum, i) => sum + i.qty, 0)} sp):</span>
                    <span className="font-semibold text-slate-900">{formatCurrency(cartSubtotal)}</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-600">
                    <span>Chiết khấu / Giảm giá:</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={discount || ''}
                        onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                        placeholder="0"
                        className="w-24 bg-slate-50 border border-slate-300 rounded px-2 py-1 text-right text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <span>₫</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm font-bold border-t border-slate-100 pt-2">
                    <span className="text-slate-900">Khách cần trả:</span>
                    <span className="text-emerald-600 text-base">{formatCurrency(cartGrandTotal)}</span>
                  </div>

                  {/* Payment Method */}
                  <div className="pt-2">
                    <label className="text-slate-500 block mb-1 text-xs">Phương thức thanh toán:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPaymentMethod('CASH')}
                        className={`py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          paymentMethod === 'CASH'
                            ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <Banknote className="w-3.5 h-3.5" /> Tiền mặt
                      </button>
                      <button
                        onClick={() => setPaymentMethod('BANK')}
                        className={`py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          paymentMethod === 'BANK'
                            ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <QrCode className="w-3.5 h-3.5" /> Chuyển khoản QR
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'CASH' && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Tiền khách đưa:</span>
                        <input
                          type="number"
                          value={cashGiven}
                          onChange={(e) => setCashGiven(e.target.value)}
                          placeholder={cartGrandTotal.toString()}
                          className="w-28 bg-white border border-slate-300 rounded px-2 py-1 text-right text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
                        />
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>Tiền thừa trả khách:</span>
                        <strong className="text-blue-600">{formatCurrency(cashChangeReturn)}</strong>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleCompleteCheckout}
                    className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <CheckCircle className="w-4 h-4" /> THANH TOÁN & IN (F9)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Doanh Thu Hôm Nay</span>
                    <h3 className="text-xl font-bold text-slate-900">{formatCurrency(todayRev)}</h3>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Doanh Thu Tháng Này</span>
                    <h3 className="text-xl font-bold text-slate-900">{formatCurrency(monthRev)}</h3>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Boxes className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Tổng Sản Phẩm Trong Kho</span>
                    <h3 className="text-xl font-bold text-slate-900">{products.length}</h3>
                    {lowStockCount > 0 && (
                      <small className="text-xs text-amber-600 font-semibold flex items-center gap-1 mt-0.5">
                        <AlertTriangle className="w-3 h-3" /> {lowStockCount} sắp hết hàng
                      </small>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Tổng Khách Hàng</span>
                    <h3 className="text-xl font-bold text-slate-900">{customers.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-base">Danh Sách Sản Phẩm & Kho In</h3>
                <button
                  onClick={handleOpenAddProduct}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Thêm Sản Phẩm Mới
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="p-3">Mã SKU</th>
                      <th className="p-3">Tên sản phẩm</th>
                      <th className="p-3">Danh mục</th>
                      <th className="p-3">ĐVT</th>
                      {currentUser.role === 'CEO' && <th className="p-3 text-right">Giá nhập</th>}
                      <th className="p-3 text-right">Giá bán</th>
                      <th className="p-3 text-center">Tồn kho</th>
                      <th className="p-3 text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {products.map(p => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-mono font-semibold text-blue-600">{p.sku}</td>
                        <td className="p-3 font-bold text-slate-800">{p.name}</td>
                        <td className="p-3 text-slate-600">{p.category}</td>
                        <td className="p-3 text-slate-500">{p.unit}</td>
                        {currentUser.role === 'CEO' && <td className="p-3 text-right text-slate-500">{formatCurrency(p.costPrice)}</td>}
                        <td className="p-3 text-right font-bold text-emerald-600">{formatCurrency(p.price)}</td>
                        <td className="p-3 text-center font-bold text-slate-900">{p.stock}</td>
                        <td className="p-3 text-center space-x-2">
                          <button onClick={() => handleOpenEditProduct(p)} className="text-blue-600 hover:underline font-semibold">Sửa</button>
                          <button onClick={() => handleDeleteProduct(p.id)} className="text-rose-600 hover:underline font-semibold">Xóa</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS */}
          {activeTab === 'orders' && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-4">Lịch Sử Đơn Hàng</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="p-3">Mã Hóa Đơn</th>
                      <th className="p-3">Thời gian</th>
                      <th className="p-3">Khách hàng</th>
                      <th className="p-3">Địa chỉ giao</th>
                      <th className="p-3">Thanh toán</th>
                      <th className="p-3 text-right">Tổng tiền</th>
                      <th className="p-3 text-center">In Hóa Đơn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {orders.map(o => (
                      <tr key={o.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-blue-600">{o.id}</td>
                        <td className="p-3 text-slate-600">{new Date(o.createdAt).toLocaleString('vi-VN')}</td>
                        <td className="p-3 font-medium text-slate-900">
                          <div>{o.customerName}</div>
                          {o.companyName && <small className="text-slate-500 font-normal">{o.companyName}</small>}
                        </td>
                        <td className="p-3 text-slate-600 max-w-xs truncate">{o.shippingAddress || 'Giao tại xưởng'}</td>
                        <td className="p-3 text-slate-500">{o.paymentMethod === 'CASH' ? 'Tiền mặt' : 'Chuyển khoản'}</td>
                        <td className="p-3 text-right font-bold text-emerald-600">{formatCurrency(o.grandTotal)}</td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => setSelectedReceiptOrder(o)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 p-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                          >
                            <Printer className="w-3.5 h-3.5" /> Xem / In
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: CUSTOMERS WITH COMPANY & SHIPPING ADDRESS */}
          {activeTab === 'customers' && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-base">Danh Sách Khách Hàng (Tích Hợp Thông Tin Công Ty & Giao Hàng)</h3>
                <button
                  onClick={() => setShowCustomerModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <UserPlus className="w-4 h-4" /> Thêm Khách Hàng
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="p-3">Mã KH</th>
                      <th className="p-3">Người Đại Diện / Họ Tên</th>
                      <th className="p-3"><div className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-blue-600" /> Tên Công Ty</div></th>
                      <th className="p-3"><div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Địa Chỉ Giao Hàng</div></th>
                      <th className="p-3">Số điện thoại</th>
                      <th className="p-3 text-right">Điểm tích lũy</th>
                      <th className="p-3 text-right">Tổng chi tiêu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {customers.map(c => (
                      <tr key={c.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono text-blue-600 font-semibold">{c.code}</td>
                        <td className="p-3 font-bold text-slate-900">{c.name}</td>
                        <td className="p-3 font-medium text-slate-700">{c.companyName || '-'}</td>
                        <td className="p-3 text-slate-600 max-w-xs truncate">{c.shippingAddress || '-'}</td>
                        <td className="p-3 text-slate-700">{c.phone}</td>
                        <td className="p-3 text-right font-bold text-amber-600">{c.points} điểm</td>
                        <td className="p-3 text-right font-bold text-emerald-600">{formatCurrency(c.totalSpent)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: ACCOUNTING MODULE */}
          {activeTab === 'accounting' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-xs text-slate-500">Doanh Thu Thu Được</span>
                  <h3 className="text-xl font-bold text-emerald-600 mt-1">{formatCurrency(monthRev)}</h3>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-xs text-slate-500">Tổng Chi Phí Xưởng</span>
                  <h3 className="text-xl font-bold text-rose-600 mt-1">{formatCurrency(totalExpenseAmount)}</h3>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-xs text-slate-500">Lợi Nhuận Ròng Dự Kiến</span>
                  <h3 className="text-xl font-bold text-blue-600 mt-1">{formatCurrency(netProfitMonth)}</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-base">Sổ Sách Thu Chi & Vật Tư Xưởng</h3>
                  <button
                    onClick={() => setShowExpenseModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Ghi Khoản Chi Mới
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                        <th className="p-3">Ngày chi</th>
                        <th className="p-3">Nội dung chi</th>
                        <th className="p-3">Hạng mục</th>
                        <th className="p-3">Ghi chú</th>
                        <th className="p-3 text-right">Số tiền (VND)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {expenses.map(e => (
                        <tr key={e.id} className="hover:bg-slate-50">
                          <td className="p-3 text-slate-600">{e.date}</td>
                          <td className="p-3 font-bold text-slate-900">{e.title}</td>
                          <td className="p-3 text-slate-600">{e.category}</td>
                          <td className="p-3 text-slate-500">{e.note || '-'}</td>
                          <td className="p-3 text-right font-bold text-rose-600">{formatCurrency(e.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: HUMAN RESOURCES (HR) */}
          {activeTab === 'hr' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-xs text-slate-500">Tổng Số Nhân Sự Xưởng In</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{employees.length} nhân sự</h3>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-xs text-slate-500">Tổng Quỹ Lương Dự Kiến / Tháng</span>
                  <h3 className="text-xl font-bold text-blue-600 mt-1">{formatCurrency(totalSalaryAmount)}</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-base">Danh Sách Nhân Sự & Bảng Lương</h3>
                  <button
                    onClick={() => setShowEmployeeModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <UserPlus className="w-4 h-4" /> Thêm Nhân Sự Mới
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                        <th className="p-3">Mã NV</th>
                        <th className="p-3">Họ và Tên</th>
                        <th className="p-3">Vị trí công việc</th>
                        <th className="p-3">Số điện thoại</th>
                        <th className="p-3 text-right">Lương cơ bản</th>
                        <th className="p-3 text-center">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {employees.map(emp => (
                        <tr key={emp.id} className="hover:bg-slate-50">
                          <td className="p-3 font-mono text-blue-600 font-semibold">{emp.code}</td>
                          <td className="p-3 font-bold text-slate-900">{emp.name}</td>
                          <td className="p-3 text-slate-700">{emp.position}</td>
                          <td className="p-3 text-slate-600">{emp.phone}</td>
                          <td className="p-3 text-right font-bold text-emerald-600">{formatCurrency(emp.salary)}</td>
                          <td className="p-3 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Đang làm việc</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: REPORTS (EXCLUSIVELY CEO) */}
          {activeTab === 'reports' && currentUser.role === 'CEO' && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Báo Cáo Doanh Thu Dành Riêng Cho CEO</h3>
                  <p className="text-xs text-slate-500">Thống kê toàn bộ chỉ số tài chính xưởng in VNPIS</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500">Tổng Số Đơn Hàng</span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1">{orders.length} đơn</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500">Giá Trị Đơn Trung Bình</span>
                  <h4 className="text-2xl font-bold text-blue-600 mt-1">
                    {formatCurrency(orders.length ? orders.reduce((s, o) => s + o.grandTotal, 0) / orders.length : 0)}
                  </h4>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500">Tổng Doanh Thu Tích Lũy</span>
                  <h4 className="text-2xl font-bold text-emerald-600 mt-1">
                    {formatCurrency(orders.reduce((s, o) => s + o.grandTotal, 0))}
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL ADD / EDIT PRODUCT */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">{editingProduct ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'}</h3>
              <button onClick={() => setShowProductModal(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveProduct} className="p-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Mã SKU / Barcode *</label>
                <input
                  type="text"
                  required
                  value={prodSku}
                  onChange={e => setProdSku(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Tên Sản Phẩm *</label>
                <input
                  type="text"
                  required
                  value={prodName}
                  onChange={e => setProdName(e.target.value)}
                  placeholder="VD: In Danh Thiếp A5..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Danh mục</label>
                  <input
                    type="text"
                    value={prodCategory}
                    onChange={e => setProdCategory(e.target.value)}
                    placeholder="In Ấn Ấn Phẩm..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Đơn vị tính</label>
                  <input
                    type="text"
                    value={prodUnit}
                    onChange={e => setProdUnit(e.target.value)}
                    placeholder="Hộp, Cái, m²..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {currentUser.role === 'CEO' && (
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Giá nhập (VND)</label>
                    <input
                      type="number"
                      value={prodCostPrice}
                      onChange={e => setProdCostPrice(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                <div className={currentUser.role === 'CEO' ? '' : 'col-span-2'}>
                  <label className="block text-slate-700 font-semibold mb-1">Giá bán (VND) *</label>
                  <input
                    type="number"
                    required
                    value={prodPrice}
                    onChange={e => setProdPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Tồn kho *</label>
                <input
                  type="number"
                  required
                  value={prodStock}
                  onChange={e => setProdStock(parseInt(e.target.value) || 0)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setShowProductModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200">Hủy</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm">Lưu Sản Phẩm</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ADD CUSTOMER (COMPANY & ADDRESS INCLUDED) */}
      {showCustomerModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">Thêm Khách Hàng / Đơn Vị Mới</h3>
              <button onClick={() => setShowCustomerModal(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveCustomer} className="p-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Họ và Tên Người Đại Diện *</label>
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={e => setCustName(e.target.value)}
                  placeholder="Nhập tên người mua..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Tên Công Ty / Tổ Chức</label>
                <input
                  type="text"
                  value={custCompany}
                  onChange={e => setCustCompany(e.target.value)}
                  placeholder="VD: Công Ty TNHH In Ấn VNPIS..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Địa Chỉ Giao Hàng</label>
                <input
                  type="text"
                  value={custAddress}
                  onChange={e => setCustAddress(e.target.value)}
                  placeholder="18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP.HCM..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Số Điện Thoại *</label>
                  <input
                    type="tel"
                    required
                    value={custPhone}
                    onChange={e => setCustPhone(e.target.value)}
                    placeholder="0912345678"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    value={custEmail}
                    onChange={e => setCustEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setShowCustomerModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200">Hủy</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm">Lưu Khách Hàng</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ADD EXPENSE */}
      {showExpenseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">Ghi Khoản Chi Phí Mới</h3>
              <button onClick={() => setShowExpenseModal(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveExpense} className="p-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Nội dung chi *</label>
                <input
                  type="text"
                  required
                  value={expTitle}
                  onChange={e => setExpTitle(e.target.value)}
                  placeholder="VD: Mua mực in tampon, Tiền điện xưởng..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Hạng mục</label>
                <select
                  value={expCat}
                  onChange={e => setExpCat(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Vật tư xưởng in">Vật tư xưởng in (Mực, Giấy, Khung)</option>
                  <option value="Vận hành xưởng">Vận hành xưởng (Điện, Nước, Máy móc)</option>
                  <option value="Chi phí khác">Chi phí phát sinh khác</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Số tiền chi (VND) *</label>
                <input
                  type="number"
                  required
                  value={expAmount}
                  onChange={e => setExpAmount(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Ghi chú</label>
                <input
                  type="text"
                  value={expNote}
                  onChange={e => setExpNote(e.target.value)}
                  placeholder="Ghi chú thêm..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setShowExpenseModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200">Hủy</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm">Lưu Khoản Chi</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ADD EMPLOYEE */}
      {showEmployeeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">Thêm Nhân Sự Mới</h3>
              <button onClick={() => setShowEmployeeModal(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveEmployee} className="p-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Họ và Tên Nhân Viên *</label>
                <input
                  type="text"
                  required
                  value={empName}
                  onChange={e => setEmpName(e.target.value)}
                  placeholder="Nhập tên..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Vị Trí Công Việc *</label>
                <input
                  type="text"
                  required
                  value={empPos}
                  onChange={e => setEmpPos(e.target.value)}
                  placeholder="VD: Kỹ thuật viên in, Thợ kéo lụa..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Số Điện Thoại</label>
                  <input
                    type="tel"
                    value={empPhone}
                    onChange={e => setEmpPhone(e.target.value)}
                    placeholder="0901234567"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Lương Cơ Bản (VND) *</label>
                  <input
                    type="number"
                    required
                    value={empSalary}
                    onChange={e => setEmpSalary(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setShowEmployeeModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200">Hủy</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm">Lưu Nhân Sự</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PRINT RECEIPT PREVIEW */}
      {selectedReceiptOrder && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl w-full max-w-md overflow-hidden p-6 shadow-2xl space-y-4">
            <div id="thermal-receipt" className="space-y-3 font-mono text-xs">
              <div className="text-center space-y-1">
                <h2 className="text-base font-bold uppercase">VNPIS SOLUTIONS STORE</h2>
                <p className="text-[11px] text-slate-600">Slogan: VNPIS Solutions: Giải pháp in ấn toàn diện trên mọi chất liệu</p>
                <p className="text-[11px] text-slate-600">Website: inanvnpis.com | Hotline: 0987 453 866</p>
                <div className="border-b border-dashed border-slate-400 my-2"></div>
                <h3 className="font-bold text-sm">HÓA ĐƠN BÁN HÀNG POS</h3>
                <p className="text-[11px]">Mã đơn: #{selectedReceiptOrder.id}</p>
                <p className="text-[11px]">Ngày: {new Date(selectedReceiptOrder.createdAt).toLocaleString('vi-VN')}</p>
              </div>

              <div className="border-b border-dashed border-slate-400 py-1 space-y-0.5 text-[11px]">
                <div>Khách hàng: <strong>{selectedReceiptOrder.customerName}</strong></div>
                {selectedReceiptOrder.companyName && <div>Công ty: <strong>{selectedReceiptOrder.companyName}</strong></div>}
                {selectedReceiptOrder.shippingAddress && <div>Địa chỉ giao: <span>{selectedReceiptOrder.shippingAddress}</span></div>}
                <div>Phương thức: {selectedReceiptOrder.paymentMethod === 'CASH' ? 'Tiền mặt' : 'Chuyển khoản QR'}</div>
              </div>

              <table className="w-full text-left text-[11px] my-2">
                <thead>
                  <tr className="border-b border-dashed border-slate-400">
                    <th className="pb-1">Tên SP</th>
                    <th className="pb-1 text-center">SL</th>
                    <th className="pb-1 text-right">Đ.Giá</th>
                    <th className="pb-1 text-right">T.Tiền</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dashed divide-slate-200">
                  {selectedReceiptOrder.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-1 pr-1 font-sans">{item.name}</td>
                      <td className="py-1 text-center">{item.qty}</td>
                      <td className="py-1 text-right">{item.price.toLocaleString('vi-VN')}</td>
                      <td className="py-1 text-right font-bold">{(item.subtotal).toLocaleString('vi-VN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="border-t border-dashed border-slate-400 pt-2 space-y-1 text-right text-[11px]">
                <div>Tạm tính: {selectedReceiptOrder.subtotal.toLocaleString('vi-VN')} ₫</div>
                <div>Giảm giá: {selectedReceiptOrder.discount.toLocaleString('vi-VN')} ₫</div>
                <div className="text-sm font-bold text-slate-900">TỔNG TIỀN: {selectedReceiptOrder.grandTotal.toLocaleString('vi-VN')} ₫</div>
                <div>Tiền khách đưa: {(selectedReceiptOrder.cashGiven || selectedReceiptOrder.grandTotal).toLocaleString('vi-VN')} ₫</div>
                <div>Tiền thừa: {selectedReceiptOrder.cashChange.toLocaleString('vi-VN')} ₫</div>
              </div>

              <div className="text-center pt-3 text-[10px] text-slate-500 border-t border-dashed border-slate-400 space-y-1">
                <p>Cảm ơn quý khách và hẹn gặp lại!</p>
                <p className="italic">VNPIS Solutions: Giải pháp in ấn toàn diện trên mọi chất liệu</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
              <button
                onClick={() => setSelectedReceiptOrder(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200"
              >
                Đóng
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm"
              >
                <Printer className="w-4 h-4" /> In Hóa Đơn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
