### Cài đặt trên máy Linux (ubuntu)

1. Cài đặt môi trường

   ```bash
   sudo apt-get update && sudo apt-get install -y vim curl git
   ```

2. Cài Docker

   ```bash
   https://docs.docker.com/engine/install/ubuntu/
   ```

3. Cài Docker-compose

   ```bash
   (https://docs.docker.com/compose/install/
   ```

4. Clone repo

   ```bash
   git clone -b 2.0 https://github.com/phanmanh99/khambenh.git && cd khambenh
   ```

5. Khởi động

   ```bash
   docker-compose up -d
   ```

Quá trình cài đặt có thể tốn từ 5 đến 30 phút phụ thuộc vào tốc độ mạng!

Sau đó, hãy kiểm tra bằng lệnh `docker ps -a`，nếu không có container nào ở trạng thái `unhealthy` hoặc `Exited (x) xxx` thì là ok rồi đó.

## Sử dụng

Truy cập cổng HTTP 6868 của máy chủ thông qua trình duyệt và bạn có thể bắt đầu sử dụng. Đường dẫn trang bác sỹ là `/doctor`, **Vui lòng tạo tài khoản để sử dụng**.
để truy cập vào trang `/admin` cần phải kết nối đến csdl qua cổng 3307 để tạo tài khoản.
