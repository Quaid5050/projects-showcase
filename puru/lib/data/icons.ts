import {
  Settings, Factory, Package, Wheat, Building2, Search, Layers, Boxes,
  ShoppingBag, ArrowLeftRight, Star, Download, Upload, Truck, Handshake,
  Zap, Car, Flame, Grid, Globe, Users, Landmark, HeartPulse, GraduationCap,
  Home, PickaxeIcon, Plane, Server, Radio, Building, TrendingUp,
} from 'lucide-react';

export const iconMap = {
  Settings,
  Factory,
  Package,
  Wheat,
  Building2,
  Search,
  Layers,
  Boxes,
  ShoppingBag,
  ArrowLeftRight,
  Star,
  Download,
  Upload,
  Truck,
  Handshake,
  Zap,
  Car,
  Flame,
  Grid,
  Globe,
  Users,
  Landmark,
  HeartPulse,
  GraduationCap,
  Home,
  Pickaxe: PickaxeIcon,
  Plane,
  Server,
  Radio,
  Building,
  TrendingUp,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName) {
  return iconMap[name];
}
