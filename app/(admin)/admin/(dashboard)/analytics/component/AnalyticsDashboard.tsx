"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';


// --- 1. API Response Interfaces (DummyJSON) ---
interface DummyUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  role: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  company: {
    name: string;
  };
}

interface DummyProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
}

interface DummyCart {
  id: number;
  userId: number;
  total: number;
  totalProducts: number;
  products: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
  }>;
}

interface UsersResponse {
  users: DummyUser[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductsResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface CartsResponse {
  carts: DummyCart[];
  total: number;
  skip: number;
  limit: number;
}

// --- 2. Chart Data Interfaces ---
interface SalesDataPoint {
  name: string;
  sales: number;
  orders: number;
}

interface CustomerDataPoint {
  name: string;
  customers: number;
}

interface CategoryDataPoint {
  name: string;
  value: number;
}

interface SummaryMetrics {
  revenue: string;
  orders: number;
  customers: number;
  avgOrder: string;
}

interface DashboardData {
  sales: SalesDataPoint[];
  orders: SalesDataPoint[];
  customers: CustomerDataPoint[];
  categories: CategoryDataPoint[];
  summary: SummaryMetrics;
}

const COLORS = ['#00C49F', '#FFBB28'];

const AnalyticsDashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DashboardData>({
    sales: [],
    orders: [],
    customers: [],
    categories: [],
    summary: { revenue: '0', orders: 0, customers: 0, avgOrder: '0' }
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const [productsRes, usersRes, cartsRes] = await Promise.all([
          axios.get<ProductsResponse>('https://dummyjson.com/products?limit=0'),
          axios.get<UsersResponse>('https://dummyjson.com/users?limit=0'),
          axios.get<CartsResponse>('https://dummyjson.com/carts?limit=0')
        ]);

        const products = productsRes.data.products;
        const users = usersRes.data.users;
        const carts = cartsRes.data.carts;

        // 1. Sales Data (Mocked Time-Series)
        const salesData: SalesDataPoint[] = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return {
            name: date.toLocaleDateString('en-US', { weekday: 'short' }),
            sales: Math.floor(Math.random() * 5000) + 2000,
            orders: Math.floor(Math.random() * 100) + 20
          };
        });

        // 2. Customer Growth
        const customerData: CustomerDataPoint[] = users.map((user, index) => ({
          name: `Day ${index + 1}`,
          customers: index + 1
        })).slice(0, 10);

        // 3. Category Distribution
        const categoryMap: Record<string, number> = {};
        products.forEach(p => {
          categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
        });
        const categoryData: CategoryDataPoint[] = Object.keys(categoryMap).map(key => ({
          name: key,
          value: categoryMap[key]
        }));

        // 4. Summary Metrics
        const totalRevenue = carts.reduce((acc, cart) => acc + cart.total, 0);
        const totalOrders = carts.length;
        const totalCustomers = users.length;

        setData({
          sales: salesData,
          orders: salesData,
          customers: customerData,
          categories: categoryData,
          summary: {
            revenue: totalRevenue.toFixed(2),
            orders: totalOrders,
            customers: totalCustomers,
            avgOrder: totalOrders ? (totalRevenue / totalOrders).toFixed(2) : '0'
          }
        });
      } catch (error) {
        console.error("Failed to fetch analytics data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Analytics...</div>;

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* <h1 className="text-3xl font-bold mb-8 text-gray-800">Analytics Dashboard</h1> */}

      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Revenue', value: `$${data.summary.revenue}`, color: 'border-primary' },
          { title: 'Total Orders', value: data.summary.orders.toString(), color: 'border-primary' },
          { title: 'Total Customers', value: data.summary.customers.toString(), color: 'border-primary' },
          { title: 'Avg Order Value', value: `$${data.summary.avgOrder}`, color: 'border-primary' },
        ].map((card, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${card.color}`}>
            <p className="text-gray-500 text-sm font-medium uppercase">{card.title}</p>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Sales Trend (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.sales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} name="Sales ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Orders Trend (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.orders}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#9A9A9A" name="Orders Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Customer Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.customers}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name="Total Customers" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Product Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.categories}
                cx="50%"
                cy="50%"
                labelLine={false}
                // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}   
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;   