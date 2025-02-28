# Simple Tasker

Simple Tasker là một ứng dụng quản lý công việc đơn giản, được phát triển với React và TailwindCSS cho frontend, cùng với Node.js và MongoDB cho backend.

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cài đặt và chạy dự án](#cài-đặt-và-chạy-dự-án)
- [API Endpoints](#api-endpoints)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Môi trường](#môi-trường)

## Giới thiệu

Simple Tasker là ứng dụng giúp người dùng quản lý các công việc hàng ngày, hỗ trợ tạo, chỉnh sửa, xoá và đánh dấu trạng thái hoàn thành của từng công việc.

## Tính năng

- Tạo công việc mới
- Chỉnh sửa công việc
- Xoá công việc
- Đánh dấu công việc hoàn thành
- Xem danh sách công việc
- Tìm kiếm công việc theo tên
- Lọc công việc theo trạng thái

## Công nghệ sử dụng

### Frontend

- React
- Vite
- TailwindCSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Cài đặt và chạy dự án

### Yêu cầu

- Node.js >= 18
- MongoDB

### Backend

1. Clone dự án:

```bash
git clone https://github.com/username/simple-tasker.git
cd simple-tasker/backend
```

2. Cài đặt các gói phụ thuộc:

```bash
npm install
```

3. Tạo tệp `.env` trong thư mục `backend` với nội dung:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/simple-tasker
```

4. Chạy server:

```bash
npm run dev
```

### Frontend

1. Di chuyển vào thư mục `frontend`:

```bash
cd ../frontend
```

2. Cài đặt các gói phụ thuộc:

```bash
npm install
```

3. Chạy ứng dụng:

```bash
npm run dev
```

## API Endpoints

| Phương thức | URL             | Mô tả                   |
| ----------- | --------------- | ----------------------- |
| GET         | /api/tasks      | Lấy danh sách công việc |
| POST        | /api/tasks      | Tạo công việc           |
| PUT         | /api/tasks/\:id | Cập nhật công việc      |
| DELETE      | /api/tasks/\:id | Xoá công việc           |

## Cấu trúc thư mục

```
project-root
│
├─ backend
│   ├─ controllers
│   ├─ models
│   ├─ routes
│   ├─ middleware
│   └─ server.js
│
└─ frontend
    ├─ src
    │   ├─ components
    │   ├─ pages
    │   ├─ hooks
    │   └─ App.jsx
    └─ index.css
```

## Môi trường

- Node.js: 18.x
- MongoDB: 6.x
- React: 18.x
- TailwindCSS: 3.x



